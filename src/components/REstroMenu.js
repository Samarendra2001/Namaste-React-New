import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
const RestroMenu = () => {
  const [ResInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  console.log(resId)
  useEffect(() => {
    fetchMenu();
  }, []);

  
  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8434636&lng=77.650033&restaurantId=268782&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if(ResInfo===null){
    return <Shimmer />
  }
  const {name,cuisines,costForTwoMessage} =
    ResInfo?.cards[0]?.card?.card?.info;
  const {itemCards}=ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
      {itemCards.map((item)=>(
        <li key={item.card.info.id}>
        {item.card.info.name} - {"Rs."}
        {item.card.info.price/100|| item.card.info.defaultPrice/100}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default RestroMenu;
