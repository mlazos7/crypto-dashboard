import React from 'react'
import LightThemeIcon from '../assets/l-theme.png'

export default function Theme() {
    return (
        <div className="theme">
            <p>Dark Mode</p>
            <img src={LightThemeIcon} alt=""></img>
        </div>
    )
}
