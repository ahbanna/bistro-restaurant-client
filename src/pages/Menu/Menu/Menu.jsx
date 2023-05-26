import React from "react";
import useTitle from "../../../hooks/useTitle";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  useTitle("My Menu");
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <section>
      {/* main cover */}
      <Cover img={menuImg} title="Our Menu"></Cover>

      {/* Today's offer */}
      <div className="today-affer-area max-w-screen-xl mx-auto my-10">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"Don't miss"}
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>

      {/* Dessert items */}
      <div className="desserts-area">
        <MenuCategory
          items={desserts}
          title={"Dessert"}
          img={dessertImg}
        ></MenuCategory>
      </div>
      {/* Pizza items */}
      <div className="desserts-area">
        <MenuCategory
          items={pizza}
          title={"Pizza"}
          img={pizzaImg}
        ></MenuCategory>
      </div>
      {/* Salad items */}
      <div className="desserts-area">
        <MenuCategory
          items={salad}
          title={"Salad"}
          img={saladImg}
        ></MenuCategory>
      </div>
      {/* Pizza items */}
      <div className="desserts-area">
        <MenuCategory items={soup} title={"Soups"} img={soupImg}></MenuCategory>
      </div>
    </section>
  );
};

export default Menu;
