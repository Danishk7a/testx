import React from 'react'
import CoinListh from './CoinListh'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function CoinListBoxh({ coins, bg }) {
  const [coin, setcoin] = useState([])

  const getdata = () => {
    axios('/getcoin')
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setcoin(data)
      })
    // fetch('/getcoin').then(res=> res).then((data)=>{
    //   console.log(data)
    //   setcoin(data);
    // })
  }

  useEffect(() => {
    getdata()
  }, [])

  const Favourite = () => {
    let favarr = [
      {
        coinid: 786501,
        symbol: 'BTCUSDT',
        coinimg: '/static/images/coinimage/BTC.png',
        quantity: null,
        price: null,
      },
      {
        coinid: 786502,
        symbol: 'ETHUSDT',
        coinimg: '/static/images/coinimage/ETH.png',
        quantity: null,
        price: null,
      },
      {
        coinid: 786503,
        symbol: 'DOGEUSDT',
        coinimg: '/static/images/coinimage/DOGE.png',
        quantity: null,
        price: null,
      },
      {
        coinid: 786509,
        symbol: 'BNBUSDT',
        coinimg: 'https://btccrypto.exchange/api/static/images/coinimage/BNB.png',
        quantity: null,
        price: null,
      },
    ]

    setcoin(favarr)
  }
  const TopGainer = () => {
    let TopGainer = [
      {
        coinid: 786508,
        symbol: 'LTCUSDT',
        coinimg: 'https://btccrypto.exchange/api/static/images/coinimage/LTC.png',
        quantity: null,
        price: null,
      },
      {
        coinid: 786505,
        symbol: 'XRPUSDT',
        coinimg: 'https://btccrypto.exchange/api/static/images/coinimage/XRP.png',
        quantity: null,
        price: null,
      },
      {
        coinid: 786507,
        symbol: 'SOLUSDT',
        coinimg: 'https://btccrypto.exchange/api/static/images/coinimage/SOL.png',
        quantity: null,
        price: null,
      },
    ]

    setcoin(TopGainer)
  }
  const AllCoin = () => {
    getdata()
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '30px',
          paddingLeft: '0px',
          fontSize: '18px',
        }}
      >
        <Box
          onClick={AllCoin}
          style={{
            textDecoration: 'none',
            borderBottom:'1px solid #5661FF',
     
            color: '#666E77',
            cursor: 'pointer',
          }}
          to=""
        >
          All Coin
        </Box>
        <Box
          onClick={TopGainer}
          style={{
            textDecoration: 'none',
            color: '#666E77',
            cursor: 'pointer',
          }}
          to=""
        >
          Top Gainer
        </Box>
        <Box
          onClick={Favourite}
          style={{
            textDecoration: 'none',
            color: '#666E77',
            cursor: 'pointer',
          }}
          to=""
        >
          Favourite
        </Box>
      </Box>

      <div
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          color: 'black',
          height:'40vh',
          overflow:'hidden',
          border: '1px solid #E8E9EC' ,
          borderRadius: '9px',
        }}
      >
        <div
          style={{
            height: '8vh',
            padding: '13px',
            borderBottom:
            '1px solid #E7E7E8',
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { sm: '20%', xs: '30%' },
              fontSize: '16px',
              color: '#657489',
            }}
          >
            Assests
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: '20%',
              fontSize: '16px',
              color: '#657489',
            }}
          >
            Name
          </Box>
          <Box
            sx={{
              width: { sm: '20%', xs: '30%' },
              fontSize: '16px',
              color: '#657489',
            }}
          >
            Price
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: '20%',
              fontSize: '16px',
              color: '#657489',
            }}
          >
            Graph
          </Box>
          <Box sx={{ width: '10%', fontSize: '16px', color: '#657489' }}>
            Action
          </Box>
        </div>

        {coin.map((element) => {
          let price = ''
          let color = 'n'
          // console.log(coins)
          if (coins != null && coins.length > 0) {
            // console.log(element.symbol)

            let t = coins.find((el) => el.s == element.symbol)
            // console.log(t)
            if (t != null) {
              price = Number(t['p']).toFixed(3)
              color = t['color']
            }
          }

          return (
            <CoinListh
              bg={bg}
              style={{}}
              key={element.coinid}
              symbol={element.symbol}
              coinimg={element.coinimg}
              coin={element.coin}
              price={price}
              color={color}
            />
          )
        })}
      </div>
    </>
  )
}

export default CoinListBoxh
