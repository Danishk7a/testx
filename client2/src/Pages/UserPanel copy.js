import React, { useEffect, useState, useRef } from 'react'
import './css/UserPanel.css'
import Login from '../Components/Users/Login'
import UserHeader from '../Components/Users/UserHeader'
import { useContext, useReducer } from 'react'
import Context from '../hooks/useTheme2'
import { Link, Outlet } from 'react-router-dom'
import {
  Container,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Grid,
} from '@mui/material'

import DashboardIcon from '@mui/icons-material/GridViewOutlined'
import Person4Icon from '@mui/icons-material/Person4Outlined';
import EqualizerIcon from '@mui/icons-material/SsidChartOutlined';
import RequestPageIcon from '@mui/icons-material/AssignmentOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import SecurityIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import TradeNow from '@mui/icons-material/GraphicEq'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UserPanel = () => {
  const navilogout = useNavigate()
  const [isLoggedIn, setLogin] = useState('invalid')
  const [toggle, settoggle] = useState(false)


  const div1Ref = useRef(null);
  const div2Ref = useRef(null);








  useEffect(() => {

    const check = async () => {

      const response = await axios.get('/checklogin')
      setLogin(response.data.msg)

      if (response.data.status === 200) {

      } else {
        navilogout('/login');
      }


    }
    check()



  }, [isLoggedIn])













  const togglebtn = () => {
    if (toggle) {
      settoggle(false)
    } else {
      settoggle(true)
    }
  }

  const hidetoggle = () => {
    settoggle(false)
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return action.payload
      default:
        throw new Error()
    }
  }

  // useEffect(() => {
  //   const div2Width = div2Ref.current.clientWidth; // Get the width of div 2
  //   div1Ref.current.style.width = `${div2Width}px`; // Set the width of div 1 to be equal to div 2
  // }, []);

  const divRef = useRef(null);
  const [sideBarWidth, setsideBarWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        console.log('Div width:', width);
        setsideBarWidth(width)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const [state, dispatcher] = useReducer(reducer, { color: 0 })

  return (
    <>
      <div style={{}}>
        <Context.Provider
          value={{
            color: state.color,
            dispatcher: dispatcher,
          }}
        >
          {isLoggedIn && (
            <div style={{ backgroundColor: state.color, height: '' }}>
              <UserHeader />
              <Container sx={{ padding: '20px' }}>.</Container>


              <div className="userpanel" style={{ backgroundColor: (state.color == '#ffffff' ? 'linear-gradient(to bottom, #325469, #7192A8)' : 'linear-gradient(to bottom, #171B26, #152136)') }}>

                <Box ref={divRef} className="responsive-font"
                  // sx={{ display: { xs: 'none', sm: 'flex' } }}
                  // maxWidth="xl"
                  style={{
                    width: '30vw',
                    paddingLeft: '20px',
                    // width: '15vw',
                    background: 'linear-gradient(to bottom, #325469, #7192A8)',
                    height: '100%',
                    borderRight:
                      state.color == '#ffffff'
                        ? '1px solid #E7E7E8'
                        : '1px solid #2A2F3F',
                    flexDirection: 'column',
                  }}
                >
                  <Grid
                    container
                    alignItems="center"
                    rowSpacing={1}
                    columnSpacing={{ xs: 3, sm: 2, md: 3 }}
                    className="gridcontainer"
                  >
                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            '"#43728fff"',
                        },
                      }}
                    >
                      <DashboardIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",
                          // fontSize: '0.8vw',
                          marginLeft: '10px',
                        }}
                        to="/userpanel/userdashboard"
                      >
                        Dashboard
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            '"#43728fff"',
                        },
                      }}
                    >
                      <Person4Icon className='responsive-font' style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",
                          // fontSize: '0.8vw',
                          marginLeft: '10px',
                        }}
                        to="/userpanel/userkyc"
                      >
                        Profile
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            "#43728fff",
                        },
                      }}
                    >
                      <AccountBalanceWalletIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",

                          marginLeft: '10px',
                        }}
                        to="/userpanel/wallet"
                      >
                        Wallet
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            "#43728fff",
                        },
                      }}
                    >
                      <EqualizerIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",

                          marginLeft: '10px',
                        }}
                        to="/trade"
                      >
                        Trades
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            "#43728fff",
                        },
                      }}
                    >
                      <ArticleIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",

                          marginLeft: '10px',
                        }}
                        to="/userpanel/tradehistory"
                      >
                        Trade History
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            "#43728fff",
                        },
                      }}
                    >
                      <RequestPageIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",

                          marginLeft: '10px',
                        }}
                        to="/userpanel/transactionhistory"
                      >
                        Transaction History
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            "#43728fff",
                        },
                      }}
                    >
                      <SecurityIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",

                          marginLeft: '10px',
                        }}
                        to="/userpanel/security"
                      >
                        Security
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            "#43728fff",
                        },
                      }}
                    >
                      <PersonAddIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",

                          marginLeft: '10px',
                        }}
                        to="/userpanel/referral"
                      >
                        Referral
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            "#43728fff",
                        },
                      }}
                    >
                      <SsidChartIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",

                          marginLeft: '10px',
                        }}
                        to="/chart"
                      >
                        Technical Analysis
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="gridbox"
                      sx={{
                        '&:hover': {
                          background:
                            "#43728fff",
                        },
                      }}
                    >
                      <PowerSettingsNewIcon style={{ color: '#939ba9', fontSize: '18px' }} />
                      <Link className='responsive-font'
                        style={{
                          textDecoration: 'none',
                          color: "white",

                          marginLeft: '10px',
                        }}
                        to="/Logout"
                      >
                        Logout
                      </Link>
                    </Grid>

                    <Link to="/airdropcontest"></Link>
                  </Grid>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'fixed',
                      bottom: '10px',
                      left: '1px',
                      alignItems: 'center',
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontSize: '14px',
                      }}
                    >
                    </Link>
                  </Box>
                </Box>
                <Box
                  sx={{ width: window.innerWidth }}
                  maxWidth="xl"
                  style={{ backgroundColor: state.color, border: '' }}
                >
                  {/* <Box
                  maxWidth="lg"
                  sx={{
                    backgroundColor: state.color == '#ffffff' ? '#ebedef' : '#171b26',
                    display: { xs: 'block', sm: 'none' },
                  }}
                >
                  <Outlet />
                </Box> */}

                  <div

                    style={{
                      backgroundColor: '#ebedef',
                      // backgroundColor: 'green',
                      height: '100%',
                      display: { xs: 'none', sm: 'block' }, width: window.innerWidth - sideBarWidth
                    }}
                  >
                    <div style={{ background: 'grey', border: '7px solid green', height: '40vh' }}> hello</div>

                    {/* <Outlet /> */}
                  </div>
                </Box>

                {/* mobo=============================================================== */}
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
                        state.color == '#ffffff' ? '#f9f9f9' : '#171B26',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: 'rgb(105 50 151) 2px 1px 2px 0px',
                      padding: '10px',
                      borderTop:
                        state.color == '#ffffff'
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
                        sx={{
                          color: '#7D8794',
                          fontSize: '1vw',
                          padding: '10px',
                        }}
                      >
                        <div> <DashboardIcon
                          sx={{ color: '#7D8794', fontSize: '20px' }}
                        />
                          <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> Dashboard</div> </div>
                      </IconButton>
                    </Link>
                  </Box>

                  <Box>
                    <Link
                      to="/userpanel/userkyc"
                      style={{ textDecoration: 'none' }}
                    >
                      <IconButton
                        sx={{
                          color: '#7D8794',
                          fontSize: '1vw',
                          padding: '10px',
                        }}
                      >

                        <div> <Person4Icon
                          sx={{ color: '#7D8794', fontSize: '22px' }}
                        />
                          <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> Profile</div> </div>
                      </IconButton>
                    </Link>
                  </Box>
                  <Box>
                    <Link to="/trade" style={{ textDecoration: 'none' }}>
                      <IconButton
                        sx={{
                          color: '#7D8794',
                          fontSize: '1vw',
                          padding: '10px',
                        }}
                      >

                        <div> <TradeNow
                          sx={{ color: '#7D8794', fontSize: '22px' }}
                        />
                          <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> Trades</div> </div>

                      </IconButton>
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to="/userpanel/wallet"
                      style={{ textDecoration: 'none' }}
                    >
                      <IconButton
                        sx={{
                          color: '#7D8794',
                          fontSize: '16px',
                          padding: '10px',
                        }}
                      >
                        <div> <AccountBalanceWalletIcon
                          sx={{ color: '#7D8794', fontSize: '22px' }}
                        />
                          <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> Wallet</div> </div>


                      </IconButton>
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to="/userpanel/tradehistory"
                      style={{ textDecoration: 'none' }}
                    >
                      <IconButton
                        sx={{
                          color: '#7D8794',
                          fontSize: '16px',
                          padding: '10px',
                        }}
                      >

                        <div> <ArticleIcon
                          sx={{ color: '#7D8794', fontSize: '22px' }}
                        />
                          <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> History</div> </div>
                      </IconButton>
                    </Link>
                  </Box>
                </Box>
              </div>
            </div>
          )}
        </Context.Provider>
      </div>
    </>
  )
}

export default UserPanel