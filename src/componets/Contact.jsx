import React from "react";
import mapphoto from "../img/map-photo.png";
import Footer from "./footer";

function Contact() {
  const phone = "054-487-0000";

  function callNow() {
    window.location.href = `tel:${phone}`;
  }

  return (
    <div>
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-box-open-days">
            <h3>שעות פעילות</h3>
            <div className="Heading-opening-days">
              <div
                onMouseOver={(e) => {
                  e.target.style.color = "darkgray";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "";
                }}
              >
                <h4 className="b">ראשון-חמישי</h4>
                <h4 className="s">9:00-17:00</h4>
              </div>
            </div>
          </div>

          <div className="contact-box-mail">
            <h3>שלחו לנו מייל</h3>
            <div className="Heading-mail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                style={{ fill: "darkgray" }}
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <a
                href="mailto:yossi@zlaws.co.il"
                className="email-link"
                onMouseOver={(e) => {
                  e.target.style.color = "darkgray";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "";
                }}
              >
                yossi@zlaws.co.il
              </a>
            </div>
            <div className="Heading-mail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                style={{ fill: "darkgray" }}
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <a
                href="mailto:yossi@zlaws.co.il"
                className="email-link"
                onMouseOver={(e) => {
                  e.target.style.color = "darkgray";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "";
                }}
              >
                aml@zlaws.co.il
              </a>
            </div>
            <div className="Heading-mail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                style={{ fill: "darkgray" }}
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <a
                href="mailto:yossi@zlaws.co.il"
                className="email-link"
                onMouseOver={(e) => {
                  e.target.style.color = "darkgray";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "";
                }}
              >
                lior@zlaws.co.il
              </a>
            </div>
          </div>

          <div className="conact-box-phone">
            <h3>התקשרו אלינו</h3>
            <div className="Heading-phone">
              <h5>עורך דין יוסי זילברברג</h5>
              <svg
                className="icon-style"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                style={{
                  fill: "darkgray",
                  marginleft: "200px",
                  marginright: "50px",
                }}
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <a
                href=""
                onClick={callNow}
                style={{ backgroundColor: "none" }}
                onMouseOver={(e) => {
                  e.target.style.color = "darkgray";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "";
                }}
              >
                054-487-0000
              </a>
            </div>
            <div className="Heading-phone">
              <h5>עורך דין ליאור משהו </h5>
              <svg
                className="icon-style"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                style={{
                  fill: "darkgray",
                  marginleft: "200px",
                  marginright: "50px",
                }}
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <a
                href=""
                onClick={callNow}
                style={{ backgroundColor: "none" }}
                onMouseOver={(e) => {
                  e.target.style.color = "darkgray";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "";
                }}
              >
                054-487-0003
              </a>
            </div>
            <div className="Heading-phone">
              <h5>עורכת דין אפרת משהו </h5>

              <svg
                className="icon-style"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                style={{
                  fill: "darkgray",
                  marginleft: "200px",
                  marginright: "50px",
                }}
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <a
                href=""
                onClick={callNow}
                style={{ backgroundColor: "none" }}
                onMouseOver={(e) => {
                  e.target.style.color = "darkgray";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "";
                }}
              >
                054-487-0004
              </a>
            </div>
          </div>

          <div className="contact-box-adress">
            <h3>כתובת של המשרד</h3>
            <h5>
              <span style={{ color: "black", fontWeight: "bolder" }}>
                {" "}
                כפר שמריהו -
              </span>
              המעפילים 5
            </h5>
          </div>
        </div>

        <div className="contact-image">
          <h1>איפה אנחנו ממוקמים</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.8934931854897!2d34.81949712456602!3d32.18014667391877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d462aa2b4f5c3%3A0x8410869484913f6e!2z15TXntei16TXmdec15nXnSA1LCDXm9ek16gg16nXnteo15nXlNeV!5e0!3m2!1siw!2sil!4v1705511732885!5m2!1siw!2sil"
            width="1500"
            height="600"
            style={{border:'0'}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h3>או לחץ כאן</h3>

          <div className="Heading-location">
            <a
              href="https://www.waze.com/ul?ll=32.178485,34.899252&navigate=yes"
              target="_blank"
              onMouseOver={(e) => {
                e.target.style.color = "darkgray";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "";
              }}
            >
              המעפילים 5, כפר שמריהו, ישראל
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
