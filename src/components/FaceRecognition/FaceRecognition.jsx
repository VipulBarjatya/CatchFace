import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(box);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt="img"
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="boundingBox"
          style={{
            top: box.toprow,
            right: box.rightCol,
            bottom: box.bottomrow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
