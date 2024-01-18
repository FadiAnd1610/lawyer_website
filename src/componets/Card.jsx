import React from "react";
import tax from "../img/tax-img.jpg";
import child from "../img/child-img.jpg";
import free from "../img/free-prisoners.jpg";
import forgive from "../img/forgive.jpg";
import dead from "../img/dead.jpg";
import cars from "../img/cars.jpg";
import partnersFight from "../img/partners-fight.jpg";
import gun from "../img/נשיאת-נשק.jpg";
import violnce from "../img/עבירות-אלימות.jpg";
import rob from "../img/rob.jpg";
import sex from "../img/sex.jpg";
import Footer from "./footer";
import gunn from "../img/gunnnn.jpg";
import freeVictem from "../img/free victem.jpg";

function Card() {
  return (
    <div>
      <div className="all-cards">
        <div className="all-cards-subject">
          <h3 style={{ marginBottom: "20px" }}>תחומי התמחות</h3>
          <a
            href="Team"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            מיסים{" "}
          </a>
          <a
            href="now"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            ייצוג פלילים{" "}
          </a>
          <a
            href="child"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            ייצוג קטינים{" "}
          </a>
          <a
            href="robery"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            שוד{" "}
          </a>
          <a
            href="pardons"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            חנינות{" "}
          </a>
          <a
            href="murder"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            רצח{" "}
          </a>{" "}
          <a
            href="dead"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            גרם מוות ברשלנות{" "}
          </a>
          <a
            href="car"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            תאונות דרכים קשות{" "}
          </a>
          <a
            href="sex"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            עבירות מין{" "}
          </a>
          <a
            href="violnce"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            עבירות אלימות קשות{" "}
          </a>
          <a
            href="partners"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            אלימות בין בני זוג{" "}
          </a>
          <a
            href="gun"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            נשיאת נשק{" "}
          </a>
          <a
            href="crimeVictem"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(145, 145, 112)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            {" "}
            נפגעי עבירה{" "}
          </a>
        </div>
        <div className="cards-container">
          <h1>תחומי התמחות</h1>

          <div className="cards" style={{ marginBottom: "50px" }}>
            <div className="card-1">
              <img src={tax} alt="מיסים" />
              <div className="card-1-text">
                <h2>מיסים</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="Team"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>

            <div className="card-2">
              <img src={free} alt="שוד" />
              <div className="card-2-text">
                <h2>ייצוג פלילים</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="now"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>
          </div>

          {/*אזור חדש*/}

          <div className="cards" style={{ marginBottom: "50px" }}>
            <div className="card-1">
              <img src={child} alt="מיסים" />
              <div className="card-1-text">
                <h2>ייצוג קטינים</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="child"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>

            <div className="card-2">
              <img src={rob} alt="שוד" />
              <div className="card-2-text">
                <h2>שוד</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="robery"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>
          </div>

          {/*אזור חדש*/}

          <div className="cards" style={{ marginBottom: "50px" }}>
            <div className="card-1">
              <img src={forgive} alt="מיסים" />
              <div className="card-1-text">
                <h2>חנינות</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="pardons"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>

            <div className="card-2">
              <img src={gun} alt="שוד" />
              <div className="card-2-text">
                <h2>רצח</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="murder"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>
          </div>

          {/*אזור חדש*/}

          <div className="cards" style={{ marginBottom: "50px" }}>
            <div className="card-1">
              <img src={dead} alt="מיסים" />
              <div className="card-1-text">
                <h2>גרם מוות ברשלנות</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="dead"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>

            <div className="card-2">
              <img src={cars} alt="שוד" />
              <div className="card-2-text">
                <h2>תאונות דרכים קשות</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="car"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>
          </div>

          {/*אזור חדש*/}

          <div className="cards" style={{ marginBottom: "50px" }}>
            <div className="card-1">
              <img src={sex} alt="מיסים" />
              <div className="card-1-text">
                <h2>עבירות מין</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="sex"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>

            <div className="card-2">
              <img src={violnce} alt="שוד" />
              <div className="card-2-text">
                <h2>עבירות אלימות קשות</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="violnce"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>
          </div>

          {/*אזור חדש*/}

          <div
            style={{
              paddingBottom: "40px",
              marginBottom: "50px",
            }}
            className="cards"
          >
            <div className="card-1">
              <img src={partnersFight} alt="מיסים" />
              <div className="card-1-text">
                <h2>אלימות בין בני זוג</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="partners"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>

            <div className="card-2">
              <img src={gunn} alt="שוד" />
              <div className="card-2-text">
                <h2>נשיאת נשק</h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="gun"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="cards" style={{ marginBottom: "50px" }}>
            <div className="card-1">
              <img src={freeVictem} alt="מיסים" />
              <div className="card-1-text">
                <h2>נפגעי עבירה </h2>
                <p>
                  תחשבו שיש פה איזה טקסט נחמד ויש פה אחלה מידע שמעיד על רשמיות
                  ותוכן איכותי. אני בעצם בטקסט הזה אני רושם המלצה מסויימת על בן
                </p>
                <a
                  href="crimeVictem"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgb(145, 145, 112)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  {" "}
                  --קרא עוד{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Card;
