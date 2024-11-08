import { useDispatch, useSelector } from "react-redux";
import cart from "../assets/cart.png";
import starimg from "../assets/star.svg";

import "./restromenu.css";
import { useState } from "react";
import { clearCart } from "../utils/cartslice";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";

const Cart = () => {
  const [extandable, setextandable] = useState(null);
  const handlelongpara = (index) => {
    setextandable(extandable === index ? null : index);
  };
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };
 console.log(cartitems)
 
  return (
    <div className="cartitemscontainer">
      <h3>Cart</h3>
      {cartitems.length === 0 ? (
        <div className="emptycart-container">
        <Link to="/" id="addtoempty">
            <h3 >Add +</h3>
        </Link>
        <div className="emptycart">
          <div className="cart-image-container">
            <img src={cart} alt="cart" className="cart-image" />
            <span className="cart-text">Cart is empty</span>
          </div>
        </div>
        </div>
      ) : (
        <>
          <button className="clearcart" onClick={handleclearcart}>
            clear
          </button>
          {cartitems.map((item, index) => (
            <div className="menucards" key={item.id}>
              <div className="card">
                <div className="card-text">
                  <h4>{item.name}</h4>
                  <p>&#8377; {item.price / 100 || item.defaultPrice / 100}</p>
                  {item?.ratings?.aggregatedRating?.rating && (
                    <div className="menucardrating">
                      <img src={starimg} alt="star" width="17" />
                      <p>{item.ratings.aggregatedRating.rating}</p>
                    </div>
                  )}
                  {item.description && (
                    <p className="description">
                      {extandable === index
                        ? item.description
                        : item.description.slice(0, 100)}
                      {item.description.length > 100 && (
                        <span onClick={() => handlelongpara(index)}>
                          {extandable === index ? "" : "...more"}
                        </span>
                      )}
                    </p>
                  )}
                  <h4>Total price :<span>&#8377;{item.totalPrice}</span> </h4>
                </div>
                <div className="menucardimg">
                  {item.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
                      alt="dish"
                    />
                  )}
                  <Quantity cartitems={cartitems} quantityinc = {item.quantity} index={index} />
                </div>
              </div>
              <hr style={{ borderTop: "1px dotted #000" }} />
            </div> 
          ))}
         
        </>
      )}
    </div>
  );
};
export default Cart;
