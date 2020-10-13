import React from 'react'
import UpIcon from './../assets/up.png'
import DownIcon from './../assets/down.png'
import {useSelector} from 'react-redux'
import {classTheme} from './../Theme'

const BoxCrypto = (props) => {

    const theme = useSelector((state) => state.crypto.theme);

    return (
        <div className={`main-box ${classTheme.Box(theme)} ${classTheme.Hover(theme)}`}>
            <div className="box-header">
                <img src={props.image} alt=""/>
                <p className={classTheme.Secondary(theme)}>{props.name}</p>
            </div>
            <div className="box-content">
                <h1 className={classTheme.Primary(theme)}>{props.current_price.toFixed(2)}</h1>
                <p className={classTheme.Secondary(theme)}>$USD</p>
            </div>
            <div className="box-footer">
                <img src={props.price_change_percentage_24h >= 0 ? UpIcon : DownIcon} alt=""/>
                <p className={props.price_change_percentage_24h >= 0 ? 'green' : 'red'}>{props.price_change_percentage_24h.toFixed(2) + '%'}</p>
            </div>
        </div>
    )
}

export default BoxCrypto;