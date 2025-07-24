import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [navBtn, setNavBtn] = useState("login");
  const isOnline = useOnlineStatus();
  const cardItems = useSelector((store) => store.cart.items);
  console.log(cardItems);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="nav-list text-white">
          <li>{isOnline ? <h6>🟢 </h6> : <h6>🔴</h6>}</li>
          <li>
            <Link
              className="normal-link m-2.5 p-1  bg-black text-white border-4 rounded-2xl cursor-pointer"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="normal-link m-2.5 p-1  bg-black text-white border-4 rounded-2xl cursor-pointer"
              to={"/about"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="normal-link m-2.5 p-1  bg-black text-white border-4 rounded-2xl cursor-pointer"
              to={"/contact"}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="normal-link m-2.5 p-1  bg-black text-white border-4 rounded-2xl cursor-pointer"
              to={"/grocery"}
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              className="normal-link m-2.5 p-1  bg-black text-white border-4 rounded-2xl cursor-pointer"
              to={"/cart"}
            >
              cart-({cardItems.length})
            </Link>
          </li>

          <li
            onClick={() => {
              navBtn === "login" ? setNavBtn("logout") : setNavBtn("login");
            }}
            className=" p-1  bg-black text-white border-4 rounded-2xl cursor-pointer"
          >
            {navBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
