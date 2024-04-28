import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("Header Render");

  //if no dependency Array=>useEffect is called on every render.
  //if dependency Array is Empty=[]=>useEffect is called on intial render(just once)
  //if dependency Array is [btnNameReact]=>called everytime on btnNameReact is updated
  // Never Create useState outside the component
  // Always try to use state variable at the top ..just to avoid inconsistencies.
  //Never use state variable inside the conditions: if else, functions or loops
  //state variable are meant to be created inside the function component at the higher level.
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="./About">About us</Link>
          </li>

          <li>
            <Link to="./Contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              // setbtnNameReact("LogOut");
              // console.log(btnNameReact);
              btnNameReact == "Login"
                ? setbtnNameReact("LogOut")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
