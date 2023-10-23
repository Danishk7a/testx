
import './Wallet/CSS/CryptopriceList.css'
import CoinList from './Coindata/CoinList'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import axios from 'axios';

const CryptoPriceList = () => {
  const [cryptoData, setCryptoData] = useState({});
  const cryptoIds = ['bitcoin', 'ethereum', 'ripple','tron']; // List of cryptocurrency IDs
  const currencies = ['usd', 'btc', 'eth']; // List of currencies

  useEffect(() => {
    async function fetchCryptoData() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: cryptoIds.join(','),
            vs_currencies: currencies.join(','),
            include_24hr_change: true
          }
        });

        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCryptoData();
  }, []);

  return (
    <div id='listbox'>




<Box
          sx={{
            height: '4vh',
            backgroundColor: '#363BE6',
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
            color: 'white',
            padding: '20px',
          }}
        >
          Find Coin from here
        </Box>

        <div style={{ display: 'flex', padding: '10px', gap: '20px' }}>
          <div onClick={"onAll"} style={{ color: 'orange', cursor: 'pointer' }}>All</div>
          <div onClick={"onUSDT"} style={{ color: 'grey', cursor: 'pointer' }}>USDT</div>
          <div onClick={"onBUSD"} style={{ color: 'grey', cursor: 'pointer' }}>BUSD</div>

        </div>
     
        <Box>
          {' '}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="text"
              onChange={"handleInputChange"}
              placeholder="Explore New Coins..."
              style={{
                height: '15px',
                backgroundColor: 'transparent',
                border:
                  // context?.color == '#ffffff'
                    '1px solid #E7E7E8'
                    ,
                padding: '15px',
                margin: '10px',
                width: '90%',
              }}
            />{' '}
            <SearchIcon sx={{ color: '#3468D1' }} />
          </div>
        </Box>
        

        <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
          <div style={{ color: 'grey', }}>Pair</div>
          <div style={{ color: 'grey', }}>Price</div>
          <div style={{ color: 'grey', }}>Change (24hr)</div>

        </div>


      {/* <ul>
        {Object.keys(cryptoData).map(cryptoId => (
          <li key={cryptoId}>
            {cryptoId}: <br />
            {currencies.map(currency => (
              <span key={currency}>
                {currency.toUpperCase()} Price: {cryptoData[cryptoId][currency]} {currency.toUpperCase()}<br />
                24hr Change: <span className={cryptoData[cryptoId][`${currency}_24h_change`] >= 0 ? 'positive' : 'negative'}>
                  {cryptoData[cryptoId][`${currency}_24h_change`].toFixed(2)}%
                </span>
                <br />
              </span>
            ))}
          </li>
        ))}

      </ul> */}


  

      {Object.keys(cryptoData).map(cryptoId => (
          <div  key={cryptoId}>
           
            {cryptoId}: <br />
           
            {currencies.map(currency => (
           
           <div style={{display:'flex'}}  key={currency}>
                {currency.toUpperCase()} Price: {cryptoData[cryptoId][currency]} {currency.toUpperCase()}<br />
                
                24hr Change: <span className={cryptoData[cryptoId][`${currency}_24h_change`] >= 0 ? 'positive' : 'negative'}>
                
                  {cryptoData[cryptoId][`${currency}_24h_change`].toFixed(2)}%
                
                </span>
                <br />
              </div>
            ))}
          </div>
        ))}



    


      <div>

        <div>



          


        </div>


      </div>





    </div>
  );
};

export default CryptoPriceList;
