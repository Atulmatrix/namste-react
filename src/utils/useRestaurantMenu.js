import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(MENU_API + resID);
    const Json = await Data.json();
    console.log(Json.data);

    setResInfo(Json.data);
    // resInfo = Json.data;
    console.log("Hello World");
  };

  return resInfo;
};

export default useRestaurantMenu;
