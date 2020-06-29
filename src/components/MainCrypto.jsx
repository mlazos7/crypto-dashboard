import React from 'react'
import UpIcon from './../assets/up.png'
import DownIcon from './../assets/down.png'

const BoxCrypto = (props) => {
    return (
        <div className="main-box">
            <div className="box-header">
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
            </div>
            <div className="box-content">
                <h1>{props.current_price.toFixed(2)}</h1>
                <p>$USD</p>
            </div>
            <div className="box-footer">
                <img src={props.price_change_percentage_24h >= 0 ? UpIcon : DownIcon} alt=""/>
                <p className={props.price_change_percentage_24h >= 0 ? 'green' : 'red'}>{props.price_change_percentage_24h.toFixed(2) + '%'}</p>
            </div>
        </div>
    )
}

export default BoxCrypto;