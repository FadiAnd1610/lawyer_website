import React from "react";
import art1 from "../img/art-1.png";
import art2 from "../img/art-2.png";
import art3 from "../img/art-3.png";
import art4 from "../img/art-4.png";
import art5 from "../img/art-5.png";
import art6 from "../img/צילום מסך 2024-01-14 131247.png";
import Footer from "./footer2";

function Contant() {
  return (
    <div className="big-contant">
    <div className="Contant-container">
      <h1>כתבות </h1>
      <div className="Contant-container-fix">
        <div className="contant-1">
          {/******************/}
          <div className="contant-1-img1">
            <div className="contant-1-img1-text" style={{paddingBottom:"5px"}}>
              <a
                href="https://www.ynet.co.il/articles/0,7340,L-4341057,00.html"
                  target="_blank"
                  rel="noreferrer"
                  className="press"
                  style={{textAlign:'center'}}
              >
                 זוג עורכי הדין,החשד לגניבה והרב הבכיר 
              </a>
            </div>
            <a
              href="https://www.ynet.co.il/articles/0,7340,L-4341057,00.html"
                target="_blank"
                rel="noreferrer"
            >
              <img src={art1} alt="article number 1" />
            </a>
          </div>
          {/******************/}

          <div className="contant-1-img2">
            <div className="contant-1-img1-text" style={{ paddingBottom: "5px" }} >
              <a
                href="https://www.ynet.co.il/articles/0,7340,L-4053728,00.html"
                  target="_blank"
                  rel="noreferrer"
                  className="press"
                  style={{textAlign:'center'}}
              >
                  עסק משפחתי: אחים נתפסו 'על חם' פורצים לבית 
              </a>
            </div>
            <a
              href="https://www.ynet.co.il/articles/0,7340,L-4053728,00.html"
                target="_blank"
                rel="noreferrer"
                style={{textAlign:'center'}}
            >
              <img src={art2} alt="article number 1" />
            </a>
          </div>
          {/******************/}

          <div className="contant-1-img3">
            <div className="contant-1-img1-text" style={{ paddingBottom: "5px" }}>
              <a
                href="https://13tv.co.il/item/news/domestic/crime-and-justice/ramat-hasharon-903660219/"
                  target="_blank"
                  rel="noreferrer"
                  className="press"
                  style={{textAlign:'center'}}
              >
                  חשד: עובדי עירייה הקימו אתר פסולת פיראטית - וגרפו הון לכיסם 
              </a>
            </div>
            <a
              href="https://13tv.co.il/item/news/domestic/crime-and-justice/ramat-hasharon-903660219/"
                target="_blank"
                rel="noreferrer"
            >
              <img src={art3} alt="article number 1" />
            </a>
          </div>
        </div>

        {/************** contant 2 *****************************************************************/}

        <div className="contant-2">
          {/******************/}
          <div className="contant-2-img1">
            <div className="contant-1-img1-text" style={{ paddingBottom: "5px" }}>
              <a
                href="https://www.ynet.co.il/news/article/B1gprmNWw"
                  target="_blank"
                  rel="noreferrer"
                  className="press"
                  style={{textAlign:'center'}}
              >
                  איש העסקים מת"א שחשוד בהזנחת התינוק: "הוא החיים שלי. לא יודע איך הגיעו אליו סמים" 
              </a>
            </div>{" "}
            <a
              href="https://www.ynet.co.il/news/article/B1gprmNWw"
                target="_blank"
                rel="noreferrer"
                style={{textAlign:'center'}}
            >
              <img src={art4} alt="article number 1" />
            </a>
          </div>
          {/******************/}

          <div className="contant-2-img2">
            <div className="contant-1-img1-text" style={{ paddingBottom: "5px" }}>
              <a
                href="https://www.bhol.co.il/news/745065"
                  target="_blank"
                  rel="noreferrer"
                  className="press"
                  style={{textAlign:'center'}}
              >
                  מעצר עורכי הדין החרדים הוארך: "גניבה בהיקף גדול" 
              </a>
            </div>{" "}
            <a href="https://www.bhol.co.il/news/745065" target="_blank" rel="noreferrer">
              <img src={art5} alt="article number 1" />
            </a>
          </div>
          {/******************/}

          <div className="contant-2-img3">
            <div className="contant-1-img1-text" style={{ paddingBottom: "5px" }}>
              <a
                href="https://www.ynet.co.il/news/article/bjymnwok5"
                  target="_blank"
                  rel="noreferrer"
                  className="press"
                  style={{textAlign:'center'}}
              >
                  החשוד המרכזי בדריסת המתנדב יישאר במעצר, היתר שוחררו: "צעקנו שיבלום"
              </a>
            </div>{" "}
            <a
              href="https://www.ynet.co.il/news/article/bjymnwok5"
                target="_blank"
                rel="noreferrer"
                style={{textAlign:'center'}}
            >
              <img src={art6} alt="article number 1" />
            </a>
          </div>
        </div>
        </div>

      </div>
      <Footer />

      </div>
  );
}

export default Contant;
