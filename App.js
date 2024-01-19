import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// Appcomponenet
// header
// -Logo
// -Nav

// body
// -Search
// -Restaurant container
// ---RestaurantCard

// footer
// -CopyRigt
// -Links
// -Address
// -Contact
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705449600&semt=ais"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

const StyleCard = { backgroundColor: "yellow" };

const RestaurantCard = (props) => {
  const { resName } = props;
  return (
    // <div className="cover" style={StyleCard}>
    <div className="cover" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resName.cloudinaryImageId
        }
        alt=""
      />
      <h3>{resName.name}</h3>
      <h4>{resName.cuisines.join(", ")}</h4>
      <h4>4.8 Star</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const resObject = {
  id: "177495",
  name: "La Pino'z Pizza",
  cloudinaryImageId: "ugemttaiukyqfhxkfs9i",
  locality: "Pathways School Road",
  areaName: "Hajipur",
  costForTwo: "₹300 for two",
  cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  avgRating: 3.9,
  parentId: "4961",
  avgRatingString: "3.9",
  totalRatingsString: "10K+",
  sla: {
    deliveryTime: 32,
    lastMileTravel: 4.3,
    serviceability: "SERVICEABLE",
    slaString: "32 mins",
    lastMileTravelString: "4.3 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2024-01-19 06:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "₹120 OFF",
    subHeader: "ABOVE ₹199",
    discountTag: "FLAT DEAL",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

const Body = () => {
  return (
    <div className="body">
      <div className="SearchContainer">Search</div>
      <div className="res-Container">
        <RestaurantCard resName={resObject} />
        <RestaurantCard resName={resObject} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
