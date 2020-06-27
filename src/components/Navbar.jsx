import React from 'react'
import Theme from './Theme.jsx'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <h1>Cryptocurencies Dashboard</h1>
                <p>Total Market Cap: $264,719,508,635</p>
            </div>
            <div className="navbar-theme">
                <Theme />
            </div>
        </div>
    )
}
