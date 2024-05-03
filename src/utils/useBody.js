import { useEffect, useState } from "react";
import { RESTAURANT_List_API } from "../utils/constant";
import { Restaurant_list_Noida } from "../utils/constant";

const useBody = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(Restaurant_list_Noida);
    const json = await data.json();
    setListOfRestaurant(
      //optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { listOfRestaurant, filteredRestaurant, setFilteredRestaurant };
};

export default useBody;
