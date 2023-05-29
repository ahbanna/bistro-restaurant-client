import React, { useState } from "react";
import orderCoverImg from "../../../assets/shop/orderCover.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import useTitle from "../../../hooks/useTitle";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  useTitle("Order");
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <div>
        <Cover
          img={orderCoverImg}
          title={"Order"}
          subtitle={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <div className="max-w-screen-xl mx-auto py-24">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            {/* <div className="grid md:grid-cols-3 gap-10 ">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div> */}
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
