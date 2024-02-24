import { LOGO_URL } from "../utils/constant";
const Header = () => {
  let btnName = "Login";
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
              btnName = "Logout";
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
