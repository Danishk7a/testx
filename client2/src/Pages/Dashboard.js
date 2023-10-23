import React, { useEffect, useState, useReducer, useContext } from 'react'
import Login from '../Components/Users/Login'
import CoinDatah from '../Components/Home/CoinData/CoinDatah'
import FourBoxes from '../Components/Users/FourBoxes'
import './css/Dashboard.css'
import SideChat from '../Components/Users/SideChat'

import {
  Container,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Box,
  Badge,
  Grid,
} from '@mui/material'
// import {LineChart,Tooltip,CartesianGrid,Line,XAxis} from 'recharts'
import TransactionHistory from '../Components/Users/TransactionHistory'
import TradeHistory from '../Components/Users/TradeHistory'
import Wallet from '../Components/Users/Wallet/Wallet'
import WalletBalane from '../Components/Users/Wallet/WalletBalane'
import Showwallet from '../Components/Users/Wallet/Showwallet'
import UserProfile from '../Components/Users/UserKyc/UserProfile'
import { useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Person4Icon from '@mui/icons-material/Person4'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import RequestPageIcon from '@mui/icons-material/RequestPage'
import ArticleIcon from '@mui/icons-material/Article'
import SecurityIcon from '@mui/icons-material/Security'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import axios from 'axios'
import WalletChart from '../Components/Users/Wallet/WalletChart'
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'
import MobShortcuts from '../Components/Users/MobShortcuts'
import TradeHistoryDashboard from '../Components/Users/TradeHistoryDashboard'
import OpenOrder from '../Components/Users/OpenOrder'
import OrderHistory from '../Components/Users/OrderHistory'
import GraphWallet from '../Components/Users/Wallet/GraphWallet'
import GraphWallet2 from '../Components/Users/Wallet/GraphWallet2'
import Footer from '../Components/Home/Footer'
import WalletDashboard from '../Components/Users/Wallet/WalletDashboard'
import TwoBoxes from '../Components/Users/TwoBoxes'
import Context from '../hooks/useTheme2'

ChartJS.register(ArcElement, Tooltip, Legend)
const Dashboard = () => {
  const context = useContext(Context)
  const navilogin = useNavigate()
  const Airdrop = () => {
    navilogin('/airdropcontest')

    // console.log("clicked on airdeop")
  }

  const Wallet = () => {
    navilogin('/userpanel/wallet')

    // console.log("clicked on airdeop")
  }

  const Trade = () => {
    navilogin('/userpanel/tradehistory')

    // console.log("clicked on airdeop")
  }

  const Transaction = () => {
    navilogin('/userpanel/transactionhistory')

    // console.log("clicked on airdeop")
  }
  const [isLoggedIn, setLogin] = useState(0)
  // const [Airdrop, setAirdrop] = useState();
  // const [Spinner, setSpinner] = useState();
  const navilogout = useNavigate()

  useEffect(() => {
    axios.get('/checklogin').then(function (response) {
      setLogin(response.data.status)

      // if(isLoggedIn != 200 ){
      //     navilogout('/');
      // }
    })
  }, [isLoggedIn])

  // Chart
  const data = {
    labels: ['USDT', 'ETH', 'XRP'],
    datasets: [
      {
        data: [300, 50, 100, 70, 60, 50, 50, 670],

        backgroundColor: [
          '#BE6E46',
          '#3F7CAC',
          '#912F56',
          '#1DD3B0',
          '#1F7A8C',
          '#CB9173',
          '#F18F01',
          '#ACF7C1',
        ],
        // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#BE6E46', '#3F7CAC', '#912F56', '#1DD3B0'],
        borderWidth: 0,
      },
    ],
  }

  const options = { 
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: 'bottom',
      labels: {
        fontColor: 'white',
        fontSize: 14,
      },
    },
  }



  return (

    <>
      {isLoggedIn && (
        <div style={{ width: '100%' }}>
          <Box
            style={{
              backgroundColor:
                '',
              // 'orange'
            }}
          >
            <Box>
              {/* User Profile */}
              <UserProfile bg={context?.color} />


              <div style={{ padding: '20px', color: 'black', paddingTop: '40px', display: 'flex' }}>

                <div>
                  <div style={{ paddingBottom: '20px', fontSize: '16px' }} >Estimated Balance</div>

                  <div style={{ height: '100px' }}>.</div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ fontSize: '25px' }}>0.0000000 BTC </div>
                    <div style={{ fontSize: '25px' }}> &nbsp; ≈ $0.0000</div>
                  </div>
                  <div style={{ fontSize: '11px', color: '' }}>Your account does not currently have any assets, complete identity verification in order to make deposits to your account.</div>

                </div>

                <div>
                  <WalletChart />
                </div>


              </div>



              <Box style={{ padding: '20px' }}>
                <CoinDatah bg={context?.color} />
              </Box>

              {/* <TwoBoxes bg={context?.color} /> */}



              {/* <FourBoxes bg={context?.color} /> */}

              {/* <Box
                onClick={Airdrop}
                sx={{
                  display: { sm: 'block', xs: 'none' },
                  marginTop: { sm: '20px', xs: '0px' },
                  marginBottom: { sm: '20px', xs: '0px' },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: { sm: 'block', xs: 'none' },
                    backgroundImage: `url('https://btccrypto.exchange/api/static/images/Airdrop/Airdrop${
                      context?.color == '#ffffff' ? 3 : 2
                    }.gif')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: { sm: '200px', xs: '200px' },
                    width: { xs: window.innerWidth - 50, sm: '100%' },
                  }}
                >
                  {' '}
                </Box>
              </Box> */}
              {/* 
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: '',
                  gap: '20px',
                  flexWrap: 'wrap',
                  padding: { xs: '20px' },
                }}
              >
                <Box
                  sx={{
                    display: { sm: 'none', xs: 'block' },
                    padding: '15px',
                    fontSize: '16px',
                    color: 'grey',
                  }}
                >
                  {' '}
                  Spot Wallet
                </Box>
                <Box
                  sx={{
                    backgroundColor:
                      context?.color == '#ffffff' ? '#f7f7f7' : '#1C2230',
                    display: 'flex',
                    alignItems: '',
                    flexDirection: 'column',
                    padding: '20px',
                    borderRadius: '9px',
                    boxShadow: '1px 2px 9px -5px black',
                    width: '100%',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                    height: '50vh',
                  }}
                >
                  <WalletDashboard bg={context?.color} />
                </Box>

                <Box
                  sx={{
                    display: { sm: 'none', xs: 'block' },
                    padding: '15px',
                    fontSize: '16px',
                    color: 'grey',
                  }}
                >
                  {' '}
                  Trade History
                </Box>
                <Box
                  sx={{
                    backgroundColor:
                      context?.color == '#ffffff' ? '#f7f7f7' : '#1C2230',
                    display: 'flex',
                    alignItems: '',
                    flexDirection: 'column',
                    padding: '20px',
                    borderRadius: '9px',
                    boxShadow: '1px 2px 9px -5px black',
                    width: '100%',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                    height: '50vh',
                  }}
                >

                  <CoinDatah bg={context?.color} />
                </Box>
              </Box> */}

              {/* <SideChat bg={context?.color} /> */}
              {/* 
              <Container
                sx={{
                  height: '8vh',
                  color: 'grey',
                  fontSize: { sm: '1vw', xs: '22px' },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Recommended For You
              </Container>
              <Container onClick={Airdrop}>
                <Box
                  sx={{
                    backgroundImage:
                      "url('https://btccrypto.exchange/api/static/images/Airdrop/Airdrop3.gif')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: { sm: '300px', xs: '200px' },
                    width: { xs: window.innerWidth - 50, sm: '100%' },
                  }}
                >
                  {' '}
                </Box>

             
              </Container> */}
              {/* <Box sx={{ marginTop: '20px' }}>
                <Footer bg={context?.color}></Footer>
              </Box> */}
            </Box>
          </Box>

          {/* botto,m */}
        </div>
      )}
    </>
    // </Context.Provider>
  )
}

export default Dashboard
