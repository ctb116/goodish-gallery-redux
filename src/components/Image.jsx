import React from "react";

const Image = props => {
  return (
    <React.Fragment>
      <img
        src={process.env.PUBLIC_URL + props.image.src}
        alt={props.image.name}
        style={{ width: "100%", borderRadius: 5 }}
        onClick={() => props.onView(props.image)}
      />
    </React.Fragment>
  );
};

export default Image;
