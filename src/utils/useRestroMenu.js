import { useEffect,useState } from "react";
import { MENU_API } from "./constant";

const useRestroMenu=(resId)=>{

    const [ResInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return ResInfo;
}
export default useRestroMenu;