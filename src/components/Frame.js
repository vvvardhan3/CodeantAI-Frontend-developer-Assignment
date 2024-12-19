import React from "react";

function Frame() {
  return (
    <div className="frame">
      <div>
        <img
          className="image1"
          src={require("../assests/groupImage.png")}
          alt="group_Image"
        />
      </div>
      <div>
        <img
          className="image2"
          src={require("../assests/Subtract.png")}
          alt="group_Image"
        />
      </div>
    </div>
  );
}

export default Frame;
