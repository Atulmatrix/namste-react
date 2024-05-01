import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import useBody from "../utils/useBody";

const Body = () => {
  //Local State Variable-Super Powerful Variable
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardpromoted = withPromotedLabel(RestaurantCard);
  console.log("Body Rendered");

  const {
    listOfRestaurant,
    filteredRestaurant,

    setFilteredRestaurant,
  } = useBody();

  console.log(listOfRestaurant);

  // setFilteredRestaurant(listOfRestaurant);
  //whenever state variable update, react triggers reconciliation cycle(re-renders the component with updated value=>finding difference between older virtual DOM and newer virtual DOM and only update the changed value inside the DOM)

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  // const fetchdata = async () => {
  //   const data = await fetch(RESTAURANT_List_API);
  //   const json = await data.json();
  //   console.log(json);
  //   setListOfRestaurant(
  //     //optional chaining
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );

  //   console.log(
  //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  //   );
  //   setFilteredRestaurant(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };
  //conditional rendering
  // if (listOfRestaurant.length == 0) {
  //   // return <h1>Loading........</h1>;
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>No Internet Connection</h1>;
  }
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
              const filteredRestaurant1 = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant1);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filterData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            // setListOfRestaurant(filterData);
            setFilteredRestaurant(filterData);
            console.log(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-Container">
        {filteredRestaurant.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              {res.info.avgRating > 3.5 ? (
                <RestaurantCardpromoted resName={res} />
              ) : (
                <RestaurantCard resName={res} />
              )}
            </Link>
          );
        })}

        {/* {listOfRestaurant.map((res) => {
          return <RestaurantCard key={res.info.id} resName={res} />;
        })} */}
      </div>
    </div>
  );
};

export default Body;
