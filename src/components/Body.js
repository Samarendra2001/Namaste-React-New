import { useState, useEffect } from "react";
//import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTRO_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState([]);
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //here we have used empty[] as initial value
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRO_API);

    const json = await data.json();
    /*  console.log(json);
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    ); */
    // Optional Chaining
    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  /* if(listofRestaurants.length===0){ Instead of using this we have used conditional rendering
    return <Shimmer/>
  } */
  return listofRestaurants.length === 0 ? (
    <Shimmer /> // conditional rendering if restro list==0 then return shimmer else return that
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              setFilteredRestaurants(
                listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              setListofRestaurants(
                listofRestaurants.filter((res) => res.info.avgRating > 4.4)
                //const filteredList = listofRestaurants.filter(res)=> res.info.avgRating>4)  this is also can be written for understanding
                //</div></div>setListofRestaurants(filteredList);
              );
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
