import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesData} = props

  return (
    <div className="cryptos-list-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        className="image"
        alt="cryptocurrency"
      />
      <ul className="cryptos-list">
        <li className="list-item list-heading">
          <div className="title-container">
            <h1 className="title">Coin Type</h1>
          </div>

          <div className="prices-container">
            <h1 className="title">USD</h1>
            <h1 className="title">EURO</h1>
          </div>
        </li>
        {cryptoCurrenciesData.map(eachItem => (
          <CryptocurrencyItem cryptoData={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
