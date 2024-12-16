import Restrocard from "./Restocard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/onlineStatus";

const Body = () => {
  const [restrodata, setRestrodata] = useState([]);
  const [copy, setcopy] = useState([]);
  const [searchtext,setsearchtext] = useState("");

  useEffect(() => {
    fetchdata();
  }, []); 


  const fetchdata = async () => {
    try {
      let res = await fetch(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let json = await res.json();
      
      setRestrodata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]);
      setcopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onlinestatus = useOnlineStatus();
  if (onlinestatus===false){return <h2>looks you are offline , please check your internet connection </h2>}
  if (restrodata.length === 0) {
    return ( <div className="shimmer-container" >
    <div className="Restrocard-container">
      {Array.from({length: 20}).map((e,i)=>(
      <Shimmer key={i} />
      ))}
      </div>
      </div>
      );
  }

  return (
    <div className="body">
      <div className="filter-container">
      <div className="search-container">
        <div className="search">
        <input type="text" value={searchtext} placeholder="search for restaurants..." onChange={(e)=>{
          setsearchtext(e.target.value);
        }}/>
        </div>
        <button className="search-btn" onClick={()=>{
          const filterRestro = restrodata.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase())||
          res.info.cuisines.some((cousine)=>cousine.toLowerCase().includes(searchtext.toLowerCase())))
          setcopy(filterRestro)
        }}>Search</button>
      </div>
      <button
        className="filter"
        onClick={() => {
          let filterList = restrodata.filter(
            (res) => res.info.avgRating > 4.4
          );
          setcopy(filterList)
        }}
      >
        Top Rated Restaurants
      </button>
      </div>
      <div className="Restrocard-container">
        {copy.map((item,index) => {
          return(
          <Restrocard
            name={item.info.name}
            cousine={item.info.cuisines.slice(0, 4).join(", ")}
            rating={item.info.avgRating}
            deliverytime={item.info.sla.deliveryTime}
            restroimg={item.info.cloudinaryImageId}
            cost={item.info.costForTwo}
            key={item.info.id}
            id = {item.info.id}  
          />
        )})}
      </div>
    </div>
  );
};

export default Body;
