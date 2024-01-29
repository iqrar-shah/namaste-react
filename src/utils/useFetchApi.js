import { useEffect, useState } from "react";


const useFetchApi =(url) =>{
    const [apidata, setApiData]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    fetchData =async() =>{
        const data =await fetch(url);
        const json =await data.json();
        setApiData(json);
        console.log(json.data);
    }
    return apidata;
}

export default useFetchApi;