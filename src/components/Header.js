import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header Render");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact us</li>
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
