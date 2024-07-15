import { useEffect } from "react";

export const Logout = () =>{
    const {Logoutuser} = useAuth();
    useEffect(() =>{
        Logoutuser();
    },[Logoutuser])

    return <Navigate to= "/login" />
}
