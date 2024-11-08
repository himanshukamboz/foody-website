import { useState } from "react";
import { additems } from "../utils/cartslice";
import starimg from "../assets/star.svg";
import { useDispatch } from "react-redux";
import Quantity from "./Quantity";
const MenuItems = ({card,cartitems,quantity})=>{
    const [extandable,setextandable] = useState(false)
    const handlelongpara=()=>{
      setextandable(!extandable)
    }  
    
    const {info} = card;
    const dispatch = useDispatch();
    const addtocart = ()=>{
      dispatch(additems(info))
    }
    
  const cartindex = cartitems.findIndex((item)=>item.id===info.id)
return(
        <div className="menucards">
        <div className="card">
        <div className="card-text">
        <h4>{info.name}</h4>
        <p>&#8377; {info.price/100||info.defaultPrice/100}</p>
        {info.ratings.aggregatedRating.rating && <div className="menucardrating">
            <img src={starimg} alt="star" width="17" />
            <p>{info.ratings.aggregatedRating.rating}</p>
        </div>}
        {info.description && <p className="description">{extandable? 
        info.description:info.description.slice(0,100)}
         {info.description.length>100 &&<span onClick={()=>handlelongpara()}>{extandable?"" :"...more"}</span>}
        </p>}
        </div>
        <div className="menucardimg">
        { info.imageId && <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.imageId}`} alt="dish"  />}
        {quantity>0?(<Quantity cartitems={cartitems} quantityinc={quantity} index={cartindex}/>):(<button className="add" onClick={()=>addtocart()}>ADD +</button>)}
        </div>
        </div>   
        <hr style={{ borderTop: "1px dotted #000" }} />
        </div>
)
}
export default MenuItems;