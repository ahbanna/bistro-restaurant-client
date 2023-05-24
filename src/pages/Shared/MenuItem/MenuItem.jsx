import React from "react";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { category, recipe, name, price, image, _id } = item;
  return (
    <section className="single-item flex space-x-4">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{name}--------</h4>
        <p>{recipe}</p>
      </div>
      <div className="price">
        <p>${price}</p>
      </div>
    </section>
  );
};

export default MenuItem;
