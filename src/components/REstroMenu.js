import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
const RestroMenu = () => {
  const {resId} = useParams();
  const ResInfo = useRestroMenu(resId);

  if(ResInfo===null){
    return <Shimmer />
  }
  const {name,cuisines,costForTwoMessage} =
    ResInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
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
