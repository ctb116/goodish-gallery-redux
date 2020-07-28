import React from "react";

const ArtWall = (props) => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + props.image.src}
        alt={props.image.name}
        style={{ width: "100%", borderRadius: 5 }}
        onClick={() => props.onView(props.image)}
      />
    </div>
  );
};

export default ArtWall;
