import React from 'react'
import UpIcon from './../assets/up.png'
import DownIcon from './../assets/down.png'
import {useSelector} from 'react-redux'

const BoxCrypto = (props) => {

    const theme = useSelector((state) => state.crypto.theme);
    const classThemePrimary = `primary-${theme ? 'dark' : 'light'}`
    const classThemeSecondary = `secondary-${theme ? 'dark' : 'light'}`
    const classThemeBox = `box-${theme ? 'dark' : 'light'}`
    const classThemehover = `hover-${theme ? 'dark' : 'light'}`

    return (
        <div className={`main-box ${classThemeBox} ${classThemehover}`}>
            <div className="box-header">
                <img src={props.image} alt=""/>
                <p className={classThemeSecondary}>{props.name}</p>
            </div>
            <div className="box-content">
                <h1 className={classThemePrimary}>{props.current_price.toFixed(2)}</h1>
                <p className={classThemeSecondary}>$USD</p>
            </div>
            <div className="box-footer">
                <img src={props.price_change_percentage_24h >= 0 ? UpIcon : DownIcon} alt=""/>
                <p className={props.price_change_percentage_24h >= 0 ? 'green' : 'red'}>{props.price_change_percentage_24h.toFixed(2) + '%'}</p>
            </div>
        </div>
    )
}

export default BoxCrypto;