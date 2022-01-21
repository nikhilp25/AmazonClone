import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketIcon";
export default function Header() {
  const [{basket,user}, dispatch] = useStateValue();

  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
    <Link to="/login">
      <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
    </Link>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* <SearchIcon className="header__searchIcon" /> */}
        <h3 className="header__searchIcon">Search</h3>
      </div>
      <div className="header__nav">
      <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header__option ">
          <span className="header__optionLineOne">Hello {!user?'Guest':user?.email}</span>
          <span className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
        </div>
      </Link>
        <div className="header__option ">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option ">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <h3>Cart</h3>
            <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
