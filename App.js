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
  console.log(props);
  return (
    // <div className="cover" style={StyleCard}>
    <div className="cover" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3711387c3cb4ff9eaff53e1653cb46d"
        alt=""
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.8 Star</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="SearchContainer">Search</div>
      <div className="res-Container">
        <RestaurantCard resName="Mera Dhaba" cuisine="Mutton-Biryani" />
        <RestaurantCard resName="Tera Dhaba" cuisine="Butter paneer masala" />
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
