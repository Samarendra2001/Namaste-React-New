import { RES_LOGO } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;//it can be directly written as const RestaurantCard = (resData) => {

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data; //this is optional chaining. For this we don't have to write resData.data in every time.

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          RES_LOGO +
          cloudinaryImageId
        }
      />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
  );
    
};

export default RestaurantCard;