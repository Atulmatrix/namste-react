import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  // Normal JS variable
  // let resList=[];
  // let resList1 = [
  //   {
  //     info: {
  //       id: "177495",
  //       name: "La Pino'z Pizza",
  //       cloudinaryImageId: "ugemttaiukyqfhxkfs9i",
  //       locality: "Pathways School Road",
  //       areaName: "Hajipur",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //       avgRating: 3.9,
  //       parentId: "4961",
  //       avgRatingString: "3.9",
  //       totalRatingsString: "10K+",
  //       sla: {
  //         deliveryTime: 32,
  //         lastMileTravel: 4.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "32 mins",
  //         lastMileTravelString: "4.3 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-01-19 06:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "₹120 OFF",
  //         subHeader: "ABOVE ₹199",
  //         discountTag: "FLAT DEAL",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {},
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-pathways-school-road-hajipur-noida-1-177495",
  //       type: "WEBLINK",
  //     },
  //   },
  // ];
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
