import React from "react";

const ColofulMessage = (props) => {
  const { color, children } = props;
  const ontherStlye = {
    color,
    fontsize: "10px"
  };
  return <p style={ontherStlye}>{children}</p>;
};

export default ColofulMessage;
