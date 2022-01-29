import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = event => {
    setDollar(event.target.value);
  };

  return (
    <div>
      <h1>The Coins {loading ? '' : `(${coins.length})`}</h1>
      <p>Coin Price</p>
      {loading ? (
        <strong>Loding...</strong>
      ) : (
        <select>
          {coins.map(coin => (
            <option>
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price} {coin.symbol}
            </option>
          ))}
        </select>
      )}

      <br></br>
      <br></br>
      <hr></hr>

      <p>Coins You can buy</p>
      <span>Your dollars: </span>
      <input value={dollar} onChange={onChange} type="number"></input>
      <span>$ </span>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map(coin => (
            <option>
              {coin.name} ({coin.symbol}): {dollar / coin.quotes.USD.price}{' '}
              {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
