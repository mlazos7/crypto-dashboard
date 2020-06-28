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
  const top4 = useSelector(state => state.crypto.top4)


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
            top4.map((item) =>
              <BoxCrypto
                key={item.id}
                name={item.name}
                image={item.image}
                current_price={item.current_price}
                price_change_24h={item.price_change_24h} />
            )
          }

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
