import { useEffect, useState } from "react"
import { Menu_API } from "./apiservice";
const useRestroMenu = (resid)=>{
const [menudata,setmenudata] = useState([])
    useEffect(()=>{
      fetchmenudata()
    },[resid])
    const fetchmenudata = async()=>{
        try {
            let data = await fetch(`${Menu_API}&restaurantId=${resid}`);
            let json = await data.json();
            setmenudata(json?.data||[]);
            
          } catch (error) {
            console.error("Failed to fetch menu data:", error);
            setmenudata([]);
          }
    };
    return menudata
}
export default useRestroMenu