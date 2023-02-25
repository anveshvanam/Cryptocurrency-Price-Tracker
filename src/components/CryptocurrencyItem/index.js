// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} = cryptoData

  return (
    <li className="list-item">
      <div className="title-container">
        <img src={currencyLogoUrl} className="logo" alt={currencyName} />
        <p className="title">{currencyName}</p>
      </div>

      <div className="prices-container">
        <p className="title">{usdValue}</p>
        <p className="title">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
