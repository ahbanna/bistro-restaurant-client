import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="popular-menu-area max-w-screen-xl mx-auto py-8">
      <div>
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular items"}
        ></SectionTitle>
      </div>
      {/* <div className="grid md:grid-cols-2 gap-6 my-7">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div> */}
    </section>
  );
};

export default PopularMenu;
