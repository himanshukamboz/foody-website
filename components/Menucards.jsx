import downward from "../assets/down.svg";
import { useState } from "react";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
const Menucards = ({ menucards }) => {
  const [show, setshow] = useState(null);
  const handleclick = (index) => {
    setshow(show === index ? null : index);
  };
  const cartitems = useSelector((store)=>store.cart.items);
  return (
    <div className="menu-container">
      <hr style={{ borderTop: "1px dotted #000" }} />
      {menucards.map(
        (e, index) =>
          e?.card?.card?.itemCards && (
            <div key={e?.card?.card?.title} className="list-container">
              <div className="title" onClick={() => handleclick(index)}>
                <h3>
                  {e?.card?.card?.title}({e?.card?.card?.itemCards.length})
                </h3>
                <img
                  src={downward}
                  alt="down"
                  width="15px"
                  className={show === index ? "rotate-svg" : ""}
                />
              </div>
              {show === index &&
                e.card.card.itemCards.map((item) =>{
                  const cartItem = cartitems.find((cartitem) => cartitem.id === item.card.info.id); 
                  const currentQuantity = cartItem?.quantity || 0;
                  return(
                  <MenuItems
                    key={item.card.info.id}
                    card={item.card} 
                    cartitems = {cartitems} 
                    quantity = {currentQuantity}  
                  />
                )})}
            </div>
          )
      )}
    </div>
  );
};

export default Menucards;
