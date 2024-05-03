import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resmenu, setResmenu] = useState(null);
  // const params = useParams();
  // console.log(params);
  const { resID } = useParams();

  const resmenu = useRestaurantMenu(resID);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resID);
  //   // const data = await fetch(
  //   //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=234763"
  //   // );
  //   // const data = await fetch(MENU_API + "234763");

  //   const json = await data.json();
  //   // console.log(json);
  //   // console.log("Hello");
  //   setResmenu(json.data);
  //   console.log(json.data);
  // };

  if (resmenu == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resmenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resmenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resmenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resmenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* <h1>{resmenu?.cards[0]?.card?.card?.info?.name}</h1> */}
      <p>
        {cuisines.join(" ")}-{costForTwoMessage}
      </p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}-{"Rs "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul> */}

      {categories.map((category) => {
        return <RestaurantCategory data={category?.card?.card?.itemCards} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
