import React from "react";

export default ({ src, style, ...props }) => (
  <img
    src={src}
    style={{
      ...style,
      padding: "1em",
      border: "5px dashed green",
    }}
    {...props}
  ></img>
);
