import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div>
        <SectionTitle
          subHeading={"From 11.00 am to 11.00 pm"}
          heading={"Order online"}
        ></SectionTitle>
      </div>
      <div className="category-area py-20 max-w-screen-xl mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-3xl text-center -mt-16 text-white">SALAD</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-3xl text-center -mt-16 text-white">DESSERTS</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-3xl text-center -mt-16 text-white">SOUPS</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-3xl text-center -mt-16 text-white">PIZZAS</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-3xl text-center -mt-16 text-white">BURGER</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
