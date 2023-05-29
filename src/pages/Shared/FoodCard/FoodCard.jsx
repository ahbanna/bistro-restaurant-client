import React from "react";
import "./FoodCard.css";

const FoodCard = ({ item }) => {
  const { category, recipe, name, price, image, _id } = item;
  return (
    <div className="food-single-card">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h4 className="card-price">${price}</h4>
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
