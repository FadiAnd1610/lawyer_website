import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Heading from "./Heading";
import img from "../img/yosi-pic.jpg";
import tax from "../img/tax-img.jpg";
import child from "../img/child-img.jpg";
import free from "../img/free-prisoners.jpg";
import forgive from "../img/forgive.jpg";
import robery from "../img/robery.jpg";
import dead from "../img/dead.jpg";
import cars from "../img/cars.jpg";
import partnersFight from "../img/partners-fight.jpg";
import gun from "../img/נשיאת-נשק.jpg";
import violnce from "../img/עבירות-אלימות.jpg";
import rob from "../img/rob.jpg";
import sex from "../img/sex.jpg";

function Works() {
  return (
      <div className="works-container">
                <h1>תחומי התמחות</h1>

      <div className="works-box-1">
        <div className="works-info-1">
          <img src={tax} alt="" />
          <div className="works-info-1-text">
            <h2>מיסים</h2>
            <p>
              תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות ותוכן
              איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן אדם מסויים
              אז תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
              ותוכן איכו תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על
              רשמיות ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על
              בן אדם מסויים אז תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע
              שמעיד על רשמיות ותוכן איכו
            </p>
          </div>
        </div>

        <div className="works-info-2">
          <img src={free} alt="" style={{paddingLeft:'10px'}} />
          <div className="works-info-2-text">
            <h2>ייצוג פלילים</h2>
            <p>
              תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות ותוכן
              איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן אדם מסויים
              אז תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
              ותוכן איכו תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על
              רשמיות ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על
              בן אדם מסויים אז תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע
              שמעיד על רשמיות ותוכן איכו
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Works;
