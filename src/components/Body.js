import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState(resList);//here we have usee resList as default value
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListofRestaurants(
              listofRestaurants.filter((res) => res.data.avgRating > 4)
            //const filteredList = listofRestaurants.filter(res)=> res.data.avgRating>4)  this is also can be written for understanding
            //</div></div>setListofRestaurants(filteredList);
            );
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
