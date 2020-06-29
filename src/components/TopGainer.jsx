import React from 'react'
import UpIcon from './../assets/up.png'
import DownIcon from './../assets/down.png'

const TopGainer = (props) => {
    return (
        <div className="box-gainer">
            <div className="box-gainer-header">
                <p>{props.name}</p>
                <img className="box-gainer-content-img" src={props.image} alt="" />
            </div>
            <div className="box-gainer-content">
                <h1>{props.current_price.toFixed(3)}</h1>
                <div>
                    <img src={props.price_change_percentage_24h >= 0 ? UpIcon : DownIcon} alt="" />
                    <p className={props.price_change_percentage_24h >= 0 ? 'green' : 'red'}>{props.price_change_percentage_24h.toFixed(2) + '%'}</p>
                </div>
            </div>
        </div>
    )
}

export default TopGainer;