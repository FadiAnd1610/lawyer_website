import React from "react";
import pic from "../img/neeew.jpg";

function Success() {
  return (
    <div className="success-container">
      <img src={pic} alt="" className="background-image" />

      <div className="success-rows">
        <div className="success-box-row">
          <div className="success-box">
            <div className="success-box-1">
              <h1>90%</h1>
              <h3>תיקי ניצחון</h3>
            </div>
            <div className="success-box-2" style={{paddingTop:'40px',paddingRight:'20px'}}>
              <h1 style={{marginLeft:'20px'}}>36</h1>
              <h3>  אנשים מרוצים</h3>
            </div>
          </div>
        </div>

        <div className="success-box-row">
          <div className="success-box">
            <div className="success-box-1">
              <h1>90%</h1>
              <h3>תיקי ניצחון</h3>
            </div>
            <div className="success-box-2">
              <h1>90%</h1>
              <h3>תיקי ניצחון</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
