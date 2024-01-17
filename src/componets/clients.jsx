import React, { useEffect, useState } from "react";
import pic from "../img/yosi-pic.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { Pagination, Navigation } from "swiper/modules"; // Import Swiper modules

function Clients() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.init();
    }
  }, [swiperInstance]);

  return (
    <div className="clients-container">
      <div className="clients">
        <div className="text">
          <h4>חוות דעת של אנשים</h4>
          <h2>עדות לקוח</h2>
        </div>
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          slidesPerView={"auto"}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          loopedSlides={3} // Set the number of slides you have in a single loop
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
            delay: 5000, // Set the delay to 5 seconds
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="swiper-slide box">
              <div className="clients-card">
                <div className="clients-card-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                    className="client-icon"
                  >
                    <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                  </svg>
                  <p>
                    אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן אדם מסויים
                    אז תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על
                    רשמיות ותוכן איכותי.
                  </p>
                </div>

                <div className="clients-card-img">
                  <img src={pic} alt="" />
                  <div className="clients-card-img-text">
                    <h2>דוקטור אנדראוס</h2>
                    <h4>מנהל אפל</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide box">
              <div className="clients-card">
                <div className="clients-card-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                    className="client-icon"
                  >
                    <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                  </svg>
                  <p>
                    אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן אדם מסויים
                    אז תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על
                    רשמיות ותוכן איכותי.
                  </p>
                </div>

                <div className="clients-card-img">
                  <img src={pic} alt="" />
                  <div className="clients-card-img-text">
                    <h2>דוקטור אנדראוס</h2>
                    <h4>מנהל אפל</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide box">
              <div className="clients-card">
                <div className="clients-card-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                    className="client-icon"
                  >
                    <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                  </svg>
                  <p>
                    אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן אדם מסויים
                    אז תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על
                    רשמיות ותוכן איכותי.
                  </p>
                </div>

                <div className="clients-card-img">
                  <img src={pic} alt="" />
                  <div className="clients-card-img-text">
                    <h2>דוקטור אנדראוס</h2>
                    <h4>מנהל אפל</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default Clients;
