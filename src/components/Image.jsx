import React from "react";
import "../styles/image.css";

const Image = (props) => {
  return (
    <div>
      <img
        className="grid-image"
        src={process.env.PUBLIC_URL + props.image.src}
        alt={props.image.name}
        onClick={() => props.onView(props.image)}
      />
    </div>
  );
};

export default Image;
