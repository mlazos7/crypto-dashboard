import React from 'react'
import UpDown from './../assets/up-down.png'

const TopGainer = (props) => {
    return (
        <div className="box-gainer">
            <div className="box-gainer-header">
                <p>{props.name}</p>
                <h1>{props.current_price}</h1>
            </div>
            <div className="box-gainer-content">
                <img className="box-gainer-content-img" src={props.image} alt="" />
                <div>
                    <img src={UpDown} alt="" />
                    <p>{props.price_change_percentage_24h}</p>
                </div>
            </div>
        </div>
    )
}

export default TopGainer;