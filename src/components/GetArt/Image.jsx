import React from "react";
import "../../styles/image.css";

const Image = (props) => {
  return (
    <div>
      <img
        className="grid-image"
        src={props.image}
        alt={"bunny"}
        onClick={() => props.onView(props.image)}
      />
    </div>
  );
};

export default Image;
