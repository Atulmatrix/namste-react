import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",
// {id:"heading"},
// "Hello World from React");
// console.log(heading); //this will print a react element which is a normal javascript object.
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// ReactElement(JavaScript Object)=>HTML(Browser Understand)


{/* <div id="parent">
<div id="child1">
  <h1></h1>
  <h2></h2>
</div>
<div id="child2">
  <h1></h1>
  <h2></h2>
</div>


</div> */}






const parent=React.createElement("div",
{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I am an h1 tagggg"),React.createElement("h2",{},"I am an h2 tag"),]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag"),])]);
const root= ReactDOM.createRoot(document.getElementById("root"));

console.log(parent); //object
root.render(parent);

// JSX