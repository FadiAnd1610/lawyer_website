// Help.js
import React from "react";

function Help() {
  return (
    <div className="Help-container">
      <h1 style={{color:"rgb(65, 61, 61)" ,fontSize:"35px ",fontWeight:"bold"}}> תחומי עיסוק עיקריים</h1>
      <div className="Help-elements">
        {/* Card 1 */}
       

        {/* Card 2 */}
        <div className="Help-elements-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="20"
            viewBox="0 0 640 512"
            className="Svg-icon"
          >
            <path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" />
          </svg>
          <div className="Help-elements-2-contant">
            <h2>חנינות </h2>
            <p>
              תמחה בייצוג חשודים ונאשמים מהמגזר הערבי, בכל שלבי ההליך הפלילי
              ובכל הערכאות: בית המשפט העליון, בתי משפט מחוזי ובתי משפט שלום.
              עו"ד יוסי
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="Help-elements-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
            className="Svg-icon3"
          >
            <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
          <div className="Help-elements-3-contant">
            <h2>מחיקת רישום פלילי </h2>
            <p>
              תמחה בייצוג חשודים ונאשמים מהמגזר הערבי, בכל שלבי ההליך הפלילי
              ובכל הערכאות: בית המשפט העליון, בתי משפט מחוזי ובתי משפט שלום.
              עו"ד יוסי
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="Help-elements-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
            className="Svg-icon"
          >
            <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z" />
          </svg>
          <div className="Help-elements-3-contant">
            <h2> שחרור אסירים </h2>
            <p>
              תמחה בייצוג חשודים ונאשמים מהמגזר הערבי, בכל שלבי ההליך הפלילי
              ובכל הערכאות: בית המשפט העליון, בתי משפט מחוזי ובתי משפט שלום.
              עו"ד יוסי
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
