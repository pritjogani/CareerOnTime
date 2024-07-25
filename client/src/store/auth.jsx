import { createContext, useContext, useEffect, useState } from "react";





//context
export const AuthContext = createContext();


//provider function
export const AuthProvider = ({children})=>{

    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setUser] = useState("");
    const [isloading ,setIsloading] = useState(true); 
    const [jobs,setjobs] = useState([])
    const authorizationtoken = `Bearer ${token}`;
    const [hr,sethr] = useState();


    const Logoutuser = () =>{
        setToken("");
        return localStorage.removeItem("token");

    }
    let isLoggedIn = !!token;
    
    console.log(isLoggedIn);

    //any component access to this
    const storeTokenInLs = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token" , serverToken);
    }

    //add job opening in home portal
const getjobs = async () =>{
    try {
        const responce = await fetch("http://localhost:5000/api/hr/alljobtitle",
            {
                method:"GET",
                
            })
            if(responce.ok)
            {
                const data = await responce.json();
                console.log(data);
                setjobs(data)
            }
    } catch (error) {
        console.log(`jobs frontend error${error}`)
    }
}



    //jwt authentication to get the currently user data
    const userAuthentication = async () =>{
        try {
            setIsloading(true);
            const responce = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization: authorizationtoken,
                },
            });
            if(responce.ok){
                const data = await responce.json();
                console.log(data.userData)
                setUser(data.userData)
                sethr(data.userData);
                setIsloading(false);
            }
            else{
                console.log("error fetching user data")
                setIsloading(false);
            }
        } catch (error) {
            console.log("error fetching user data");
            
        }
    }

useEffect(()=>{
     getjobs();
userAuthentication();

},[])









    return <AuthContext.Provider value={{user,storeTokenInLs,Logoutuser,isLoggedIn,isloading,userAuthentication,jobs,hr,authorizationtoken}}>
        {children}
    </AuthContext.Provider>

}


//consumer delivery function
export const useAuth = () =>{
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue)
    {
        throw new console.error(("useAuth used outside of the provider"));

    }
    return AuthContextValue;
}