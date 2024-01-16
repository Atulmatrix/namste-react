import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{id:"heading"}, "namste JS");

// React.createElement=> React Element -JS object => HTML Element after rendering


console.log(heading); //object


// JSX(transpile into react code before it reaches to JS Engine)-Done by Parcel and Babel.
// JSX=>React.createElement=> React Element -JS object => HTML Element after rendering

const jsxheading=<h1 id="heading">Namste React using JSX</h1>
console.log(jsxheading); //object=>React Object
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
