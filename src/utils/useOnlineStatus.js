import {useEffect,useState} from "react";


const useOnlineStatus =() =>{
    const [onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("online", (event) => {
            console.log("You are now connected to the network.");
            setOnlineStatus(true);
          });
        
        window.addEventListener("offline", (event) => {
            console.log("You are now offline to the network.");
            setOnlineStatus(false);
          });
    },[]);

    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;