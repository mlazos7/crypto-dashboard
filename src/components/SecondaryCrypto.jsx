import React from 'react'
import UpIcon from './../assets/up.png'
import DownIcon from './../assets/down.png'
import { useSelector } from "react-redux";
import {classTheme} from './../Theme'

const TopGainer = (props) => {

    const theme = useSelector((state) => state.crypto.theme);

    return (
        <div className={`secondary-box ${classTheme.Box(theme)} ${classTheme.Hover(theme)}`}>
            <div className="box-header">
                <p className={classTheme.Secondary(theme)}>{props.name}</p>
                <img src={props.image} alt="" />
            </div>
            <div className="box-footer">
                <h1 className={classTheme.Primary(theme)}>{props.current_price.toFixed(3)}</h1>
                <div>
                    <img src={props.price_change_percentage_24h >= 0 ? UpIcon : DownIcon} alt="" />
                    <p className={props.price_change_percentage_24h >= 0 ? 'green' : 'red'}>{props.price_change_percentage_24h.toFixed(2) + '%'}</p>
                </div>
            </div>
        </div>
    )
}

export default TopGainer;