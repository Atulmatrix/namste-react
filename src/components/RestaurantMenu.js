import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
  const [resmenu, setResmenu] = useState(null);
  // const params = useParams();
  // console.log(params);
  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=234763"
    // );
    // const data = await fetch(MENU_API + "234763");

    const json = await data.json();
    // console.log(json);
    // console.log("Hello");
    setResmenu(json.data);
    console.log(json.data);
  };

  if (resmenu == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resmenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resmenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* <h1>{resmenu?.cards[0]?.card?.card?.info?.name}</h1> */}
      <p>
        {cuisines.join(" ")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>{itemCards[2]?.card?.info?.name}</li>
        <li>{itemCards[3]?.card?.info?.name}</li>
        <li>{itemCards[4]?.card?.info?.name}</li>
        <li>{itemCards[5]?.card?.info?.name}</li> */}

        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}-{"Rs "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
