import React from 'react';
import './assets/App.css';
import Navbar from "./components/Navbar.jsx"
import BoxCrypto from "./components/BoxCrypto.jsx"
import TopGainer from "./components/TopGainer.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalData } from './redux/reducers'
import { useEffect } from 'react'


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGlobalData())
  })


  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <div className="wrapper-top">
          <BoxCrypto />
          <BoxCrypto />
          <BoxCrypto />
          <BoxCrypto />
        </div>
        <div className="sub-title">
          <h1>Top Gainers</h1>
        </div>
        <div className="wrapper-gainer">
          <TopGainer />
          <TopGainer />
          <TopGainer />
          <TopGainer />
          <TopGainer />
          <TopGainer />
          <TopGainer />
          <TopGainer />
        </div>
      </div>
    </div>
  );
}

export default App;
