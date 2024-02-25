import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable-Super Powerful Variable
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");
  //whenever state variable update, react triggers reconciliation cycle(re-renders the component with updated value=>finding difference between older virtual DOM and newer virtual DOM and only update the changed value inside the DOM)

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
  //conditional rendering
  // if (listOfRestaurant.length == 0) {
  //   // return <h1>Loading........</h1>;
  //   return <Shimmer />;
  // }
  return listOfRestaurant.length == 0 ? (
    <Shimmer />
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
              //filter the restaurant cards and update the UI
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
