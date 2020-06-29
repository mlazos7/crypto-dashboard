import React from 'react'
import UpIcon from './../assets/up.png'
import DownIcon from './../assets/down.png'

const BoxCrypto = (props) => {
    return (
        <div className="box-crypto">
            <div className="box-crypto-header">
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
            </div>
            <div className="box-crypto-content">
                <h1>{props.current_price.toFixed(2)}</h1>
                <p>$USD</p>
            </div>
            <div className="box-crypto-footer">
                <img src={props.price_change_percentage_24h >= 0 ? UpIcon : DownIcon} alt=""/>
                <p>{props.price_change_percentage_24h.toFixed(2) + '%'}</p>
            </div>
        </div>
    )
}

export default BoxCrypto;