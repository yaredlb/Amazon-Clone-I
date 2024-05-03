import React from "react";
import { Link } from 'react-router-dom';
import amazonLogo from "../../assets/images/amazonLogo.png";
import usaFlag from "../../assets/images/usaFlag.png";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to="/" >
              <img src={amazonLogo} alt="amazon logo" />
            </Link>
            <div className={classes.delivery}>
              <Link to="#">
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Delivering to</p>
                  <span>Colorado</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon" />
            <BsSearch size={25} />
          </div>
          <div className={classes.order__container}>
            <Link to="#" className={classes.language}>
              <img src={usaFlag} alt="USA flag" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="#">
              <div>
                <p>Hello, sign in</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
