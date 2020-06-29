import React from "react";
import { formatterUSD } from "./../utilities";
import LightThemeIcon from "../assets/l-theme.png";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h1>Cryptocurencies Dashboard</h1>
        <p>Total Market Cap: {formatterUSD.format(props.totalMarketCap)}</p>
      </div>
      <div className="navbar-theme">
        <div className="display-theme">
          <p>Dark Mode</p>
          <img src={LightThemeIcon} alt=""></img>
        </div>
      </div>
    </div>
  );
}
