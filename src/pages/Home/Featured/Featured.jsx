import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-area py-10 bg-fixed">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <SectionTitle
            heading="From our menu"
            subHeading="Check it out"
          ></SectionTitle>
        </div>
        <div className="md:flex justify-center items-center py-5">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-8 text-white">
            <h5 className="text-2xl">March 20, 2023</h5>
            <h4 className="text-3xl">WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            {/* <button className="btn btn-outline border-0 border-b-4"> */}
            <button className="btn btn-outline order-now-btn">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
