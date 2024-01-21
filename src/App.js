import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// not using key is not acceptable<<<<<<<indexas a key(however , not recommnded)<<<<<<<<<<<<<< unique key is a best practise

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
