import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// ReactElement

const heading0 = (
  <h1 id="zero" className="head">
    Namste React using JSXOrigin
  </h1>
);
const heading = (
  <h1 id="heading" className="head">
    {heading0}
    Namste React using JSX
  </h1>
);

//React Functional Component

// const fn = () => true;
// const fn2 = () => {
//   return true;
// };
// const ReactComponent = () => {
//   return <h1>Namste React using React Componenet</h1>;
// };
// const ReactComponent1 = () => <h1>Namste React using React Componenet</h1>;

const Title = () => (
  <h1 id="heading" className="head">
    Namste Title Component
  </h1>
);

// const Title1 = function () {
//   return (
//     <h1 id="heading" className="head">
//       Namste Ttile Component
//     </h1>
//   );
// };

//Component composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {heading}
    <h1 className="New">Namste React using React Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
