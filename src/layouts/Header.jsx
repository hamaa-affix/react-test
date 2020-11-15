import React from "react";

const Header = (props) => {
  const { children, color } = props;
  const colorStlye = {
    color
  };
  return (
    <>
      <div>
        <nav>
          <ul>
            <li style={colorStlye}>{children}</li>
            <li>header2</li>
            <li>header3</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
