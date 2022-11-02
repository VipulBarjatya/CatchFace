import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="tc">
      <p className="f3 white">
        {"CatchFace will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="input f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            onClick={onButtonSubmit}
            className="btn tc w-30 grow f4 link ph3 pv2 dib black"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
