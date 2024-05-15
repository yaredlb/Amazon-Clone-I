import React from "react";
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
          <li>
        <a href="#">
            <AiOutlineMenu />
            {/* <span>All</span> */}
            <span>All</span>
        </a>
          </li>
          {/* <p>All</p> */}
        <li>
          <a href="#">
            <select name="" id="">
              <option value="">Medical Care</option>
            </select>
          </a>
        </li>
        <li>
          <a href="#">
            <select name="" id="">
              <option value="">Groceries</option>
            </select>
          </a>
        </li>
        <li>
          <a href="#">Best Sellers</a>
        </li>
        <li>
          <a href="#">Amazon Basics</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">New Releases</a>
        </li>
        <li>
          <a href="#">
            <select name="" id="">
              <option value="">Prime</option>
            </select>
          </a>
        </li>
        <li>
          <a href="#">Customer Serives</a>
        </li>
        <li>
          <a href="#">Today's Deals</a>
        </li>
        <li>
          <a href="#">Amazon Home</a>
        </li>
        <li>
          <a href="#">Registry</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
        {/* <li><a href="#">Pharmacy</a></li> */}
        {/* <li><a href="#">
            <select name="" id="">
                <option value="">Gift Cards</option>
            </select>
        </a></li> */}
        {/* <li><a href="#">Smart Home</a></li> */}
      </ul>
    </div>
  );
};

export default LowerHeader;
