import React from 'react';
import './assets/App.css';
import Navbar from "./components/Navbar.jsx"
import BoxCrypto from "./components/BoxCrypto.jsx"
import TopGainer from "./components/TopGainer.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { getMarketCap, getTop4ByMarketCap } from './redux/actions'
import { useEffect } from 'react'


function App() {

  const dispatch = useDispatch()
  const totalMarketCap = useSelector(state => state.crypto.totalMarketCap)
  const coins = useSelector(state => state.crypto.coins)


  useEffect(() => {
    dispatch(getMarketCap())
    dispatch(getTop4ByMarketCap())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="App">
      <div className="content">
        <Navbar totalMarketCap={totalMarketCap} />
        <div className="wrapper-top">
          {
            coins.slice(0, 4).map((item) =>
              <BoxCrypto
                key={item.id}
                name={item.name}
                image={item.image}
                current_price={item.current_price}
                price_change_percentage_24h={item.price_change_percentage_24h} />
            )
          }

        </div>
        <div className="sub-title">
          <h1>24h Change</h1>
        </div>
        <div className="wrapper-gainer">
          {
            coins.sort((a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
            ).slice(0, 8).map((item) =>
              <TopGainer
                key={item.id}
                name={item.name}
                image={item.image}
                current_price={item.current_price}
                price_change_percentage_24h={item.price_change_percentage_24h} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
