import React from 'react'
import UpDown from './../assets/up-down.png'

const BoxCrypto = ({name,image,current_price,price_change_24h}) => {
    return (
        <div className="box-crypto">
            <div className="box-crypto-header">
                <img src={image} alt=""/>
                <p>{name}</p>
            </div>
            <div className="box-crypto-content">
                <h1>{current_price}</h1>
                <p>Price</p>
            </div>
            <div className="box-crypto-footer">
                <img src={UpDown} alt=""/>
                <p>{price_change_24h}</p>
            </div>
        </div>
    )
}

export default BoxCrypto;