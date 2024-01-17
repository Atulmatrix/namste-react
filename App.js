import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{id:"heading"}, "namste JS");

// React.createElement=> React Element -JS object => HTML Element after rendering


console.log(heading); //object yes

// JSX has HTML like syntax but its not HTML.
// JSX(Babel transpile into react code before it reaches to JS Engine)-Done by Parcel and Babel.
// JSX=>Babel tranpileit to React.createElement=> React Element -JS object => HTML Element after rendering

const jsxheading=(<h1 id="heading" className="head">Namste React using JSX</h1>)
console.log(jsxheading); //object=>React Object
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
