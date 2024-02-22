import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable-Super Powerful Variable
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      //optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurant.length == 0) {
    // return <h1>Loading........</h1>;
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-Container">
        {listOfRestaurant.map((res) => {
          return <RestaurantCard key={res.info.id} resName={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
