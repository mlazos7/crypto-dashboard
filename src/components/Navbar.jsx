import React from 'react'
import Theme from './Theme.jsx'

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <h1>Cryptocurencies Dashboard</h1>
                <p>Total Market Cap: {props.totalMarketCap}</p>
            </div>
            <div className="navbar-theme">
                <Theme />
            </div>
        </div>
    )
}
