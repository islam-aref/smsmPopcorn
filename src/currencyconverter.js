// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function CurrencyConverter() {
  function handleConversion() {}

  return (
    <div className="currency-converter">
      <Header />
      <div className="converter-container">
        <input type="number" placeholder="Amount" className="amount-input" />
        <select className="currency-select">
          <option value="USD">United States Dollar</option>
          <option value="EUR">Euro</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="AUD">Australian Dolla</option>
          <option value="BRL">Brazilian Real</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CNY">Chinese Renminbi Yuan</option>
          <option value="HKD">Hong Kong Dollar</option>
          <option value="ISK">Icelandic Króna</option>
          <option value="JPY">Japanese Yen</option>
          <option value="KRW">South Korean Won</option>
          <option value="MXN">Mexican Peso</option>
          <option value="MYR">Malaysian Ringgit</option>
          <option value="NZD">New Zealand Dollar</option>
        </select>
        <span className="arrow">→</span>
        <select className="currency-select">
          <option value="USD">United States Dollar</option>
          <option value="EUR">Euro</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="AUD">Australian Dolla</option>
          <option value="BRL">Brazilian Real</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CNY">Chinese Renminbi Yuan</option>
          <option value="HKD">Hong Kong Dollar</option>
          <option value="ISK">Icelandic Króna</option>
          <option value="JPY">Japanese Yen</option>
          <option value="KRW">South Korean Won</option>
          <option value="MXN">Mexican Peso</option>
          <option value="MYR">Malaysian Ringgit</option>
          <option value="NZD">New Zealand Dollar</option>
        </select>
        <button className="convert-button" onClick={handleConversion}>
          Convert
        </button>
      </div>
      <div className="result">
        Converted Amount: <span>0.00</span>
      </div>
    </div>
  );
}

function Header() {
  return <h2>Currency Converter</h2>;
}
