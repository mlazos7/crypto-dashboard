import React from 'react'
import Icon from './../assets/btc.png'
import UpDown from './../assets/up-down.png'

const TopGainer = () => {
    return (
        <div className="box-gainer">
            <div className="box-gainer-header">
                <p>Bitcoin</p>
                <h1>$10,379</h1>
            </div>
            <div className="box-gainer-content">
                <img src={Icon} alt="" />
                <div>
                    <img src={UpDown} alt="" />
                    <p>12%</p>
                </div>
            </div>
        </div>
    )
}

export default TopGainer;