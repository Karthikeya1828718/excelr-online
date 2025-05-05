import React from "react";
import "./ExternalStyle.css";
const ExternalStyle = () => {
  let menus = ["Home", "About", "Contact"];
  return (
    <nav id="navbar">
      <ul id="menuList">
        {menus.map((menu, index) => {
          return <li className="menuItems" key={index}>{menu}</li>;
        })}
      </ul>
    </nav>
  );
};

export default ExternalStyle;
