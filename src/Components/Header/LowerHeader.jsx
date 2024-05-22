import React from "react";
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";



const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <Link to="#">
            <AiOutlineMenu />
            <span>All</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <select name="" id="">
              <option value="">Medical Care</option>
            </select>
          </Link>
        </li>
        <li>
          <Link to="#">
            <select name="" id="">
              <option value="">Groceries</option>
            </select>
          </Link>
        </li>
        <li>
          <Link to="#">Best Sellers</Link>
        </li>
        <li>
          <Link to="#">Amazon Basics</Link>
        </li>
        <li>
          <Link to="#">Music</Link>
        </li>
        <li>
          <Link to="#">New Releases</Link>
        </li>
        <li>
          <Link to="#">
            <select name="" id="">
              <option value="">Prime</option>
            </select>
          </Link>
        </li>
        <li>
          <Link to="#">Customer Serives</Link>
        </li>
        <li>
          <Link to="#">Today's Deals</Link>
        </li>
        <li>
          <Link to="#">Amazon Home</Link>
        </li>
        <li>
          <Link to="#">Registry</Link>
        </li>
        <li>
          <Link to="#">Books</Link>
        </li>
        <li>
          <Link to="#">Pharmacy</Link>
        </li>
        <li>
          <Link to="#">
            <select name="" id="">
              <option value="">Gift Cards</option>
            </select>
          </Link>
        </li>
        <li>
          <Link to="#">Smart Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default LowerHeader;
