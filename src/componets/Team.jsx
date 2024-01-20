import React from "react";
import img from "../img/yosi-pic.jpg";

function Team() {
  return (
      <div className="team-container">
          <h1>צוות עורכי הדין</h1>
      <div className="team-box">
        <div className="team-box-1">
          <h4>מישהו משהו מנהל חברת משהו כאשר יש שם משהו</h4>
          <img src={img} alt="" />
        </div>
        <div className="team-box-2">
          <h4>מישהו משהו מנהל חברת משהו כאשר יש שם משהו</h4>
          <img src={img} alt="" />
        </div>
      </div>

      <div className="team-box2">
        <div className="team-box-2-1">
          <h4>מישהו משהו מנהל חברת משהו כאשר יש שם משהו</h4>
          <img src={img} alt="" />
        </div>
      </div>

    </div>
  );
}
export default Team;
