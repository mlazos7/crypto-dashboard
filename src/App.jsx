import React from "react";
import "./assets/App.scss";
import Navbar from "./components/Navbar.jsx";
import MainCrypto from "./components/MainCrypto.jsx";
import SecondaryCrypto from "./components/SecondaryCrypto.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMarketCap, getTop4ByMarketCap } from "./redux/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const totalMarketCap = useSelector((state) => state.crypto.totalMarketCap);
  const coins = useSelector((state) => state.crypto.coins);

  useEffect(() => {
    dispatch(getMarketCap());
    dispatch(getTop4ByMarketCap());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Navbar totalMarketCap={totalMarketCap} />
        <div className="wrapper">
          {coins.slice(0, 4).map((item) => (
            <MainCrypto
              key={item.id}
              name={item.name}
              image={item.image}
              current_price={item.current_price}
              price_change_percentage_24h={item.price_change_percentage_24h}
            />
          ))}
        </div>

        <h1 className="sub-title">24h Change</h1>

        <div className="wrapper">
          {coins
            .slice()
            .sort(
              (a, b) =>
                b.price_change_percentage_24h - a.price_change_percentage_24h
            )
            .slice(0, 8)
            .map((item) => (
              <SecondaryCrypto
                key={item.id}
                name={item.name}
                image={item.image}
                current_price={item.current_price}
                price_change_percentage_24h={item.price_change_percentage_24h}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
