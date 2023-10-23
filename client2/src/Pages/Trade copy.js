import React, { useReducer, useContext } from 'react'
import CoinListBox from '../Components/Users/Coindata/CoinListBox'
import Chart from '../Components/Users/Coindata/Chart'
import BuyCoin from '../Components/Users/Coindata/BuyCoin'
import UserHeader from '../Components/Users/UserHeader'
import StableConnection from '../Components/Users/StableConnection'
import CoinData from '../Components/Users/Coindata/CoinData'
import TradeHistory from '../Components/Users/TradeHistory'
import BuyOrder from '../Components/Users/BuyOrder'
import SellOrder from '../Components/Users/SellOrder'
import { SellCoin } from '../Components/Users/Coindata/SellCoin'
import { useEffect, useState } from 'react'
import './css/Trade.css'
import { Box, Container, IconButton } from '@mui/material'

import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'
import Addmoney from '../Components/Users/Wallet/Addmoney'
import Context from '../hooks/useCoin'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Person4Icon from '@mui/icons-material/Person4'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import RequestPageIcon from '@mui/icons-material/RequestPage'
import ArticleIcon from '@mui/icons-material/Article'
import SecurityIcon from '@mui/icons-material/Security'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import Data24hr from '../Components/Users/Data24hr'
import Showwallet from '../Components/Users/Wallet/Showwallet'
import OpenOrder from '../Components/Users/OpenOrder'
import OrderHistory from '../Components/Users/OrderHistory'
import CustomChart from '../Components/Users/CustomChart'
import Loading from '../Components/Loading'
import TradeNow from '@mui/icons-material/GraphicEq'
import { useNavigate } from 'react-router-dom';
import Context2 from '../hooks/useTheme2'

import { Outlet, Link, NavLink } from 'react-router-dom'

const Trade = () => {
  const [size, setsize] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // console.log('Now it is mobile screen');
        // navigate('/trade/buysell/buycoin')
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set the height and width based on the device type
  const height = isMobile ? 250 : 350;
  const width = isMobile ? window.innerWidth - 40 : size - 40;



  useEffect(() => {
    let size = document.getElementById('middlebox').offsetWidth
    setsize(size)
  }, [])










  const [coins, setCoins] = useState([])

  const handleCoinChange = (coin) => {
    setCoins(coin)
  }
  const [loader, setLoader] = useState(1)
  useEffect(() => {
    setLoader(0)
  }, [])

  // toglee
  const [buyactive, setbuyactive] = useState(0)
  const [sellactive, setsellactive] = useState(0)
  const BuyToggleBtn = () => {
    setbuyactive(1)
  }

  // Active Color
  const [changeColor, setchangeColor] = useState(1)
  const changecolor1 = () => {
    setchangeColor(1)
  }

  const changecolor2 = () => {
    setchangeColor(0)
  }
  // Active Color

  const SellToggleBtn = () => {
    setbuyactive(1)
  }

  const toggleClose = () => {
    setbuyactive(0)
    setsellactive(0)
  }

  // ijdjojioj4oifjoijioj4i3f
  // ijdjojioj4oifjoijioj4i3f

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return action.payload
      default:
        throw new Error()
    }
  }

// const [contextData, setContextData] = useState({symbol:'--', custom:'--', Price:'--', Cprice:'--'})

//   useEffect(() => {
  
//     setContextData(state)
//     console.log("This is your Context Data used for Sustain " + contextData.symbol)

// },[])
  
  
  
  const [state, dispatcher] = useReducer(reducer, {
    symbol: 'Select coin ',
    custom: false,
    Price: '--',
    Cprice:'--'
  })



  

  const reducer2 = (state, action) => {
    switch (action.type) {
      case 'update':
        return action.payload
      default:
        throw new Error()
    }
  }

  const [state2, dispatcher2] = useReducer(reducer, { color: '#171B26' })

  return (
    <>
      <Context2.Provider
        value={{
          color: state2.color,
          dispatcher: dispatcher2,
        }}
      >
        <div style={{ backgroundColor: state2.color }}>
          <UserHeader />

          <Box
            sx={{ height: '7vh', width: '100%', backgroundColor: '#171B26' }}
          ></Box>
          {/* <hr style={{borderTop:'7px solid #323849'}}/> */}

          <Context.Provider
            value={{
              symbol: state.symbol,
              custom: state.custom,
              Cprice: state.Cprice,
              price: state.price,
              dispatcher: dispatcher,
            }}
          >
            <div
              className="coinwrap"
              style={{ width: window.innerWidth, overflow: 'hidden' }}
            >
              <CoinData
                bgcolor={state2.color}
                coins={coins}
                coinChange={handleCoinChange}
              />
              {/* <Container style={{width:'300px'}}></Container> */}

              <Box
                id="middlebox"
                sx={{
                  display: { xs: 'block', sm: 'block' },
                  backgroundColor: state2.color,
                  padding: '10px',
                  width: { xs: '', sm: '60%' },
                }}
              >
                <Data24hr
                  color={state2.color}
                  coins={coins}
                  coinChange={handleCoinChange}
                ></Data24hr>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {(
                    <AdvancedRealTimeChart
                      style={{ zIndex: -2 }}
                      height={350}
                      width={size - 40}
                      symbol={state.symbol}
                      theme={state2.color == '#ffffff' ? 'light' : 'dark'}
                      container_id="chart"
                      hide_top_toolbar="true"
                      left_toolbar="true"
                    ></AdvancedRealTimeChart>
                  )}
                </Box>

                <Box id='buysellitems'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: { xs: '0px', sm: '30px' }, width: { xs: window.innerWidth, sm: 'auto' },
                    backgroundColor: (state2.color == '#ffffff' ? '#f5f5f5' : '#171b26')


                    // flexDirection: '@media only screen and (max-width: 768px) ? "column" : "row"',
                  }}
                >
                  <BuyCoin
                    bgcolor={state2.color}
                    coins={coins}
                    coinChange={handleCoinChange}
                  />
                  <SellCoin
                    bgcolor={state2.color}
                    coins={coins}
                    coinChange={handleCoinChange}
                  />
                </Box>
              </Box>

              {/* Mob new ================================ */}
              {/* Mob new ================================ */}
              {/* Mob new ================================ */}



              {/* Mob new ================================ */}
              {/* Mob new ================================ */}




              {/* Orders Show side============================================================== */}

              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  width: '500px',
                  backgroundColor: state2.color,
                  borderLeft:
                    state2.color == '#ffffff'
                      ? '1px solid #E7E7E8'
                      : '1px solid #363c4e',
                  borderBottom:
                    state2.color == '#ffffff'
                      ? '1px solid #E7E7E8'
                      : '1px solid #363c4e',
                  width: '20%',
                }}
              >
                <Box
                  sx={{
                    overflow: 'scroll',
                    overflowX: 'hidden',
                    height: '50vh',
                  }}
                >
                  <Box
                    sx={{ fontSize: '16px', color: 'grey', padding: '20px' }}
                  >
                    <BuyOrder bgcolor={state2.color}></BuyOrder>
                  </Box>
                </Box>

                <Box
                  sx={{
                    fontSize: '16px',
                    color: 'grey',
                    padding: '20px',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                    height: '50vh',
                  }}
                >
                  <SellOrder bgcolor={state2.color}></SellOrder>
                </Box>
              </Box>
              {/* Orders Show side============================================================== */}



            </div>

            {/* Orders Outlet here ======================================================================================= */}

            <div style={{ height: '7vh' }}></div>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                height: '100vh',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  backgroundColor:
                    state2.color == '#ffffff' ? '#f1f1f1' : 'rgb(27 32 46)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    color: 'grey',
                    backgroundColor:
                      state2.color == '#ffffff' ? '' : '',
                    height: '7vh',
                    width: '50%',
                  }}
                >
                  {/* <div onClick={openOrder} style={{ cursor: 'pointer' }}>Open Order</div>
                            <div onClick={orderhistory} style={{cursor:'pointer'}}>Order History</div>
                            <div onClick={Tradehistory} style={{cursor:'pointer'}}>Trading History</div>
                            <div onClick={Fund} style={{cursor:'pointer'}}>Fund</div> */}

                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: 'grey',

                    }}
                    to="/trade/openorder"
                  >
                    Open Order
                  </Link>
                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: 'grey',
                    }}
                    to="/trade/orderhistroy"
                  >
                    Order History
                  </Link>
                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: 'grey',
                    }}
                    to="/trade/tradehistory"
                  >
                    Trade{' '}
                  </Link>
                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: 'grey',
                    }}
                    to="/trade/showwallet"
                  >
                    Fund
                  </Link>
                </div>

                <div style={{ backgroundColor: '#171B26', color: 'grey' }}>

                  <Outlet />
                </div>
              </div>
            </Box>

            {/* Orders Outlet here ======================================================================================= */}



          </Context.Provider>
        </div>




















        {/* Bottom Menu Mobile=============================================================== */}
        <Box
          sx={{
            display: {
              sm: 'none',
              xs: 'flex',
              position: 'fixed',
              bottom: 0,
              height: '55px',
              width: window.innerWidth,
              zIndex: 5,
              display: 'flex',
              backgroundColor:
                state2.color == '#ffffff' ? '#f9f9f9' : '#171B26',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: 'rgb(105 50 151) 2px 1px 2px 0px',
              padding: '10px',
              borderTop:
                state2.color == '#ffffff'
                  ? '1px solid #E7E7E8'
                  : '1px solid #363c4e',
            },
          }}
        >
          <Box>
            {/* <DashboardIcon style={{ color: '#5442f2' }} /> */}
            <Link
              to="/userpanel/userdashboard"
              style={{ textDecoration: 'none' }}
            >
              <IconButton
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <DashboardIcon sx={{ color: '#7D8794', fontSize: '18px' }} />
              </IconButton>
            </Link>
          </Box>

          <Box>
            <Link to="/userpanel/userkyc" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <Person4Icon sx={{ color: '#7D8794', fontSize: '18px' }} />
              </IconButton>
            </Link>
          </Box>
          <Box>
            <Link to="/trade" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <TradeNow sx={{ color: '#7D8794', fontSize: '18px' }} />
              </IconButton>
            </Link>
          </Box>

          <Box>
            <Link to="/userpanel/wallet" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <AccountBalanceWalletIcon
                  sx={{ color: '#7D8794', fontSize: '18px' }}
                />
              </IconButton>
            </Link>
          </Box>
          <Box>
            <Link
              to="/userpanel/tradehistory"
              style={{ textDecoration: 'none' }}
            >
              <IconButton
                sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
              >
                <ArticleIcon sx={{ color: '#7D8794', fontSize: '18px' }} />
              </IconButton>
            </Link>
          </Box>
        </Box>

        <StableConnection />

        {/* <Loading/> */}
      </Context2.Provider>
    </>
  )
}

export default Trade
