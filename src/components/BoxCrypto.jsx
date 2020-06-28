import React from 'react'
import UpDown from './../assets/up-down.png'

const BoxCrypto = (props) => {
    return (
        <div className="box-crypto">
            <div className="box-crypto-header">
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
            </div>
            <div className="box-crypto-content">
                <h1>{props.current_price}</h1>
                <p>Price</p>
            </div>
            <div className="box-crypto-footer">
                <img src={UpDown} alt=""/>
                <p>{props.price_change_percentage_24h}</p>
            </div>
        </div>
    )
}

export default BoxCrypto;