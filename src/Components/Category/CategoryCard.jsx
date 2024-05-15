import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.category}`}>
        <span>
          <h2>{data?.name}</h2>
        </span>
        <img src={data?.imgLink} alt="#" />
        <p>Shop Luxury Stores</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
