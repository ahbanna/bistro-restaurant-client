import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import "./MenuCategory.css";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="py-10 single-category">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 my-10 max-w-screen-xl mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to="/order">
        <button className="btn btn-outline order-now-btn">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
