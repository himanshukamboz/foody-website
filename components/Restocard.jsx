
import starimg from "../assets/star.svg"
import { Link } from "react-router-dom";

const Restrocard = ({ name, cousine, rating, deliverytime, restroimg, cost , id}) => {
  return (
    <Link to={"/restaurants/"+id}><div className="restrocard">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${restroimg}`}
        alt="cardimg"
        className="cardimg"
      />
      <h3>{name}</h3>
      <h4>{cousine}</h4>
      <div className="containerfortwo">
      <div className="rating-container">
      <img src={starimg} alt="star"/>
      <h4>{rating}</h4>
      </div>
      <h4>{deliverytime} Mins</h4>
      <h4>{cost}</h4>
      </div>
      
    </div></Link>
  );
};

export default Restrocard;
