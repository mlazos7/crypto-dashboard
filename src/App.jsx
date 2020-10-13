import React from "react";
import "./assets/App.scss";
import Navbar from "./components/Navbar.jsx";
import MainCrypto from "./components/MainCrypto.jsx";
import SecondaryCrypto from "./components/SecondaryCrypto.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMarketCap, getCoins } from "./redux/actions";
import { useEffect } from "react";
import { classTheme } from "./Theme";

function App() {
  const dispatch = useDispatch();
  const totalMarketCap = useSelector((state) => state.crypto.totalMarketCap);
  const coins = useSelector((state) => state.crypto.coins);
  const theme = useSelector((state) => state.crypto.theme);

  useEffect(() => {
    dispatch(getMarketCap());
    dispatch(getCoins());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`App ${classTheme.Background(theme)}`}>
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

        <h1 className={`sub-title ${classTheme.Secondary(theme)}`}>
          24h Change
        </h1>

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
      <div className={`attribution ${classTheme.Secondary(theme)}`}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://twitter.com/MatiasLazos">Matias Lazos</a>.
      </div>
    </div>
  );
}

export default App;
