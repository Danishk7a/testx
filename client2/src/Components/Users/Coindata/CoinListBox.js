import React from 'react'
import CoinList from './CoinList'
import './Css/CoinListBox.css'
import { Button, SearchBar, Box } from '@mui/material'
import Loading from '../../Loading'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Star from '@mui/icons-material/StarBorderOutlined'
import Star2 from '@mui/icons-material/Star'
import SearchIcon from '@mui/icons-material/Search'
import Context from '../../../hooks/useTheme2'

function CoinListBox({ coins, disbableBtn }, props) {
  const context = useContext(Context)
  const [coin, setcoin] = useState([])
  const [Loader, setLoader] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(coin)

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const [StaticData, setStaticData] = useState(0)
  

//   useEffect(() => {
    
//     const StaticApi = async() => {
      
//       const responseData = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,cardano,polkadot,solana,tron,binancecoin,ethereum,ripple,litecoin&vs_currencies=usd&include_24hr_change=true');
//       console.log("NOW SEE HERE ", responseData)
//       setStaticData(responseData.data);
//       console.log("THIS IS STATIC DATA ",StaticData)



//     }
// StaticApi()


//   },[])



  useEffect(() => {
    setSearchResults(coin)
  }, [])

  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults(coin)
    }
  }, [searchQuery])

  useEffect(() => {
    setTimeout(() => {
      setLoader(1)
    }, 2000)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // `https://btccrypto.exchange/api/searchquery/${'U'}`
        `/searchquery/${'u'}`
      )
      const data = await response.json()
      setSearchResults(data)
      // console.log("THis is Searched Data " + data)
    }

    fetchData()
  }, [])



  const onUSDT = () => {
    const fetchData = async () => {
      const response = await fetch(
        // `https://btccrypto.exchange/api/searchquery/${'U'}`
        `/searchquery/${'usdt'}`
      )
      const data = await response.json()
      setSearchResults(data)
      // console.log("THis is Searched Data " + data)
    }

    fetchData()

  }





  const onBUSD = () => {
    const fetchData = async () => {
      const response = await fetch(
        // `https://btccrypto.exchange/api/searchquery/${'U'}`
        `/searchquery/${'busd'}`
      )
      const data = await response.json()
      setSearchResults(data)
      // console.log("THis is Searched Data " + data)
    }

    fetchData()

  }
  const onAll = () => {
    const fetchData = async () => {
      const response = await fetch(
        // `https://btccrypto.exchange/api/searchquery/${'U'}`
        `/searchquery/${'u'}`
      )
      const data = await response.json()
      setSearchResults(data)
      // console.log("THis is Searched Data " + data)
    }

    fetchData()

  }






  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // `https://btccrypto.exchange/api/searchquery/${searchQuery}`
        `/searchquery/${searchQuery}`
      )
      const data = await response.json()
      setSearchResults(data)
      // console.log("THis is Searched Data " + data)
    }

    fetchData()
  }, [searchQuery])

  const [Fav, setFav] = useState(0)
  const addFav = () => {
    if (Fav) {
      setFav(0)
    } else {
      setFav(1)
    }
  }

  useEffect(() => { }, [searchResults])

  const getdata = () => {
    axios.get('/getcoin')
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
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

  return (
    <>
      <Box
        sx={{
          width: { xs: '100%', sm: '20%' },
          backgroundColor: context?.color == '#ffffff' ? '#f5f5f5' : '#171b26',

          borderBottom:
            context?.color == '#ffffff'
              ? '1px solid #E7E7E8'
              : '1px solid #363c4e',
          borderRight:
            context?.color == '#ffffff'
              ? '1px solid #E7E7E8'
              : '1px solid #363c4e',
          overflow: 'scroll',
          overflowX: 'hidden',
        }}
      >
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
          <div onClick={onAll} style={{ color: 'orange', cursor: 'pointer' }}>All</div>
          <div onClick={onUSDT} style={{ color: 'grey', cursor: 'pointer' }}>USDT</div>
          <div onClick={onBUSD} style={{ color: 'grey', cursor: 'pointer' }}>BUSD</div>

        </div>
        <Box>
          {' '}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Explore New Coins..."
              style={{
                height: '15px',
                backgroundColor: 'transparent',
                border:
                  context?.color == '#ffffff'
                    ? '1px solid #E7E7E8'
                    : '1px solid grey',
                padding: '15px',
                margin: '10px',
                width: '90%',
              }}
            />{' '}
            <SearchIcon sx={{ color: '#3468D1' }} />
          </div>
        </Box>
        {/* <div style={{ display: 'flex', gap: '15px', padding: '10px' }}>
          <div style={{ color: 'orange', }}>USDT</div>
          <div style={{ color: 'white', }}>BUSD</div>
          <div style={{ color: 'white', }}>ETH</div>
          <div style={{ color: 'white', }}>BTC</div>
        </div>
 */}





        <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
          <div style={{ color: 'grey', }}>Pair</div>
          <div style={{ color: 'grey', }}>Price</div>
          <div style={{ color: 'grey', }}>Change (24hr)</div>

        </div>
        {Loader ? (
          <Box sx={{ backgroundColor: props.bg }}>
            {searchResults.map((element) => {
              let price = ''
              let color = 'n'
              // console.log(coins)
              if (coins != null && coins.length > 0) {
                // console.log(element.symbol)

                let t = coins.find((el) => el.s == element.symbol)
                // console.log(t)
                if (t != null) {
                  price = Number(t['p']).toFixed(4)
                  color = t['color']
                }
              }

              return (
                <>
                  {/* <div style={{ width: '20%' }} id="coinimg">{Fav ? <Star2 onClick={addFav} sx={{ color: 'rgb(125 135 148 / 28%)', fontSize: '20px' }} /> : <Star onClick={addFav} sx={{ color: 'rgb(125 135 148 / 28%)', fontSize: '20px' }} />}</div> */}


                  <CoinList
                    bg={context?.color}
                    DisbableBtn={props.DisbableBtn}
                    disbableBtn={disbableBtn}
                    key={element.coinid}
                    symbol={element.symbol}
                    coinimg={`/static/images/CoinImage/${element.coin.toUpperCase()}.png`}
                    // coinimg={``}
                    price={price}
                    color={color}
                    bgcolorr={context?.color}
                    quantity={element.quantity}
                    Cprice={element.price}
                    custom={element.custom}
                    coin={element.coin}
                    backCoin={element.backCoin}
                    name={element.Name}
                    // StaticData={StaticData}
                    StaticData={coin}
                  />{' '}
                </>
              )
            })}{' '}
          </Box>
        ) : (
          <Loading />
        )}
        <div style={{ borderRight: '', height: '38px' }}></div>
      </Box>
    </>
  )
}

export default CoinListBox
