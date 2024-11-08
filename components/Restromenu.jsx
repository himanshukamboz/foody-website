import Shimmer from "./Shimmer";
import starimg from "../assets/star.svg";
import useRestroMenu from "../utils/useRestromenu";
import { useParams } from "react-router-dom";
import Menucards from "./Menucards";
import "./restromenu.css"

const Restromenu = () => {
  const { resid } = useParams();
  const menudata = useRestroMenu(resid);
  

  if (menudata.length === 0) {
    return (
      
      
      <div className="shimmer-container">
        <div className="Restrocard-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <Shimmer key={i} />
          ))}
        </div>
      </div>
    )
  }

  const {
    name = "Unknown Restaurant",
    avgRating = "N/A",
    sla = {},
    totalRatingsString = "",
    locality = "Unknown",
    areaName = "Unknown"
  } = menudata?.cards[2]?.card?.card?.info || {};
  const totalRatingstext = totalRatingsString.split("ratings").join("");
  const regularCards = menudata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const menucards = regularCards.filter(e=>e?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
    <div className="menu-container">
      <div className="menu-start">
        <div className="menu-name">
          <h2>{name}</h2>
          <div className="delivertime flex">
            <img
              className="deliveryimg"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1648635511/Delivery_fee_new_cjxumu"
              alt="delivery image"
            />
            <p>{`${sla.minDeliveryTime} - ${sla.maxDeliveryTime}`}</p>
          </div>
          <p>{`${locality}, ${areaName}`}</p>
        </div>
        <div className="rating-card">
          <div className="avgrating">
            <img src={starimg} alt="star" width="25" />
            <h4>{avgRating}</h4>
          </div>
          <hr style={{ borderTop: "1px dotted #000" }} />
          <h4>{totalRatingstext}</h4>
        </div>
      </div>
     
      <Menucards menucards={menucards}/>
    </div>
    
  );
};

export default Restromenu;
