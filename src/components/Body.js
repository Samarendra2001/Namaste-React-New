import { useState, useEffect } from "react";
//import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTRO_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState([]);
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //here we have used empty[] as initial value
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");
  const OnlineStatus=useOnlineStatus();

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
  if (OnlineStatus===false){
    return<h1>Looks Like You are Offline !!! Plz Check your Internet Connection</h1>
  }
  return listofRestaurants.length === 0 ? (
    <Shimmer /> // conditional rendering if restro list==0 then return shimmer else return that
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="search-box border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg font-semibold hover:text-orange-400"
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
       </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-green-100 rounded-lg font-semibold hover:text-orange-400"
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
      <div className="res-container flex flex-wrap ">
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
