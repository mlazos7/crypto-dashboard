import React from "react";
import { formatterUSD } from "./../utilities";
import LightThemeIcon from "../assets/l-theme.png";
import DarkThemeIcon from "../assets/d-theme.png"
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/actions";

export default function Navbar(props) {
    const dispatch = useDispatch();
    const theme = useSelector( (state) => state.crypto.theme)
    const classThemePrimary = `primary-${theme ? 'dark' : 'light'}`
    const classThemeSecondary = `secondary-${theme ? 'dark' : 'light'}`

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(changeTheme)
    }

  return (
    <div className="navbar">
      <div className="navbar-title">
        <h1 className={classThemePrimary}>Cryptocurencies Dashboard</h1>
        <p className={classThemeSecondary}>Total Market Cap: {formatterUSD.format(props.totalMarketCap)}</p>
      </div>
      <div className="navbar-theme">
        <div className="display-theme">
          <p className={classThemeSecondary}>Dark Mode</p>
          <img src={theme ? DarkThemeIcon : LightThemeIcon} onClick={handleClick} alt=""></img>
        </div>
      </div>
    </div>
  );
}
