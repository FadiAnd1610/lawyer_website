import React, { useEffect, useState } from "react";
import court2 from "../img/court2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { Pagination, Navigation } from "swiper/modules"; // Import Swiper modules

function Details() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.init();
    }
  }, [swiperInstance]);

  return (
    <div className="Details-container">
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
              loop={true}
              
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="swiper-slide box">
            <div className="Details-elements">
              <img
                src={court2}
                alt="img of a court"
                className="background-imagee"
              />
              <div className="text-container">
                <h1 className="title">משרד עורכי דין זילברברג</h1>
                <h3 className="slogan">  מעורכי הדין הבולטים והמשפיעים בישראל במשפט הפלילי</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide box">
            <div className="Details-elements">
              <img
                src={court2}
                alt="img of a court"
                className="background-imagee"
              />
            
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Navigation Arrows */}
      <div className="swiper-button-next" style={{color:'darkgray'}}></div>
      <div className="swiper-button-prev" style={{color:'darkgray'}}></div>
    </div>
  );
}

export default Details;