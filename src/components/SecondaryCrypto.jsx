import React from 'react'
import UpIcon from './../assets/up.png'
import DownIcon from './../assets/down.png'
import { useSelector } from "react-redux";

const TopGainer = (props) => {

    const theme = useSelector((state) => state.crypto.theme);
    const classThemePrimary = `primary-${theme ? 'dark' : 'light'}`
    const classThemeSecondary = `secondary-${theme ? 'dark' : 'light'}`
    const classThemeBox = `box-${theme ? 'dark' : 'light'}`
    const classThemehover = `hover-${theme ? 'dark' : 'light'}`

    return (
        <div className={`secondary-box ${classThemeBox} ${classThemehover}`}>
            <div className="box-header">
                <p className={classThemeSecondary}>{props.name}</p>
                <img src={props.image} alt="" />
            </div>
            <div className="box-footer">
                <h1 className={classThemePrimary}>{props.current_price.toFixed(3)}</h1>
                <div>
                    <img src={props.price_change_percentage_24h >= 0 ? UpIcon : DownIcon} alt="" />
                    <p className={props.price_change_percentage_24h >= 0 ? 'green' : 'red'}>{props.price_change_percentage_24h.toFixed(2) + '%'}</p>
                </div>
            </div>
        </div>
    )
}

export default TopGainer;