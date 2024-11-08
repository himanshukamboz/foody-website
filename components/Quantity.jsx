import { useState } from "react";
import { useDispatch } from "react-redux";
import { additems, removeitems } from "../utils/cartslice";

const Quantity = ({cartitems,quantityinc,index})=>{
    const dispatch = useDispatch();
    const [quantity,setquantity] = useState(1);
    const handlecartquantity = (index, delta) => {
      const item = cartitems[index]; 
      const newQuantity = (quantityinc || 1) + delta  
      if (newQuantity <= 0) {
          dispatch(removeitems({ id: item.id })); 
      } else {
         
          dispatch(additems({ ...item,
             quantity: newQuantity,
              delta })); 
      }
  };
    return(
        <div className="add quantity-btn">
        <div className="decrease" onClick={()=>handlecartquantity(index,-1)}>-</div> 
        <div className="quantity">{quantityinc|| 1}</div> 
        <div className="increase" onClick={()=>handlecartquantity(index,1)}>+</div> 
      </div>
    )
}
export default Quantity;