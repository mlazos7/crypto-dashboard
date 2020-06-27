import React from 'react'
import Icon from './../assets/btc.png'
import UpDown from './../assets/up-down.png'

const BoxCrypto = () => {
    return (
        <div className="box-crypto">
            <div className="box-crypto-header">
                <img src={Icon} alt=""/>
                <p>Bitcoin</p>
            </div>
            <div className="box-crypto-content">
                <h1>$10,379</h1>
                <p>Price</p>
            </div>
            <div className="box-crypto-footer">
                <img src={UpDown} alt=""/>
                <p>12%</p>
            </div>
        </div>
    )
}

export default BoxCrypto;