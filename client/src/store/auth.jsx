import { createContext, useContext, useEffect, useState } from "react";





//context
export const AuthContext = createContext();


//provider function
export const AuthProvider = ({children})=>{

    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setUser] = useState("");
    let [hr,sethr] = useState(false);
    const [isloading ,setIsloading] = useState(true); 
    const [jobs,setjobs] = useState([])
    const authorizationtoken = `Bearer ${token}`;
     
    // const hrinfo = () =>{
    //     if(user.ishr)
    //     {
    //         sethr(true);
    //     }
    // }


    const Logoutuser = () =>{
        setToken("");
        setUser("")
        return localStorage.removeItem("token")
        
    
    }
    let isLoggedIn = !!token; 
    
   // console.log(isLoggedIn);

    //any component access to this
    const storeTokenInLs = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token" , serverToken);
    } 
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:5000/api/data');
    //         setData(response.data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []); // Empty dependency array ensures it runs only on the first load
    
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
                // console.log(data);
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
                    "Authorization": authorizationtoken,
                },
            });
            if(responce.ok){
                const data = await responce.json();
                  //console.log(data.userData.ishr)
                  
                setUser(data.userData)
                
               
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
// hrinfo();


},[])









    return <AuthContext.Provider value={{ hr,user,storeTokenInLs,Logoutuser,isLoggedIn,isloading,userAuthentication,jobs,authorizationtoken}}>
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