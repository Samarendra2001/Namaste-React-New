import { RES_LOGO } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;//it can be directly written as const RestaurantCard = (resData) => {

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info; //this is optional chaining. For this we don't have to write resData.data in every time.

  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 transition ease-out-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={
          RES_LOGO +
          cloudinaryImageId
        }
      />
        <h3  className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
    
};

export default RestaurantCard;