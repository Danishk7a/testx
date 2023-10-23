import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './css/UserHeader.css'
import Light from '@mui/icons-material/LightModeOutlined'

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { } from '@mui/icons-material'
import { Link, Outlet } from 'react-router-dom'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import ToggleButton from '@mui/material/ToggleButton'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import Context from '../../hooks/useTheme2'

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
import Close from '@mui/icons-material/CloseOutlined'
const UserHeader = () => {
  const [toggle, settoggle] = useState(false)
  const context = useContext(Context)
  // const context2 = useContext(Context)
  const togglebtn = () => {
    if (toggle) {
      settoggle(false)
    } else {
      settoggle(true)
    }
  }

  const res = axios.get(`/checklogin`)
  // console.log("this is very important "+res.email)

  const hidetoggle = () => {
    settoggle(false)
  }

  // const [color, setColor] = useState('#171B26')
  const [color, setColor] = useState('#ffffff')
  const Theme = () => {
    if (color === '#171B26') {
      context.dispatcher({ type: 'update', payload: { color: color } })
      setColor('#ffffff')

    } else {
      context.dispatcher({ type: 'update', payload: { color: color } })
      setColor('#171B26')

    }
  }


  const [showProfilestate, setshowProfile] = useState(0)

  const showProfile = () => {
    setshowProfile(1)

  }

  const closeProfile = () => {

    setshowProfile(0)
  }

  // const [currency, setCurrency] = useState('INR')
  // const ChangeCurrency = () => {
  //   if (currency === 'INR') {
  //     setCurrency('USD')
  //     context2.dispatcher({type:"update",payload:{symbol:currency} })
  //   } else {
  //     setCurrency('INR')
  //     context2.dispatcher({type:"update",payload:{symbol:currency} })
  //         }

  // }

  return (
    <>
      {/* Togle================================================================= */}

      {showProfilestate ? <div onClick={closeProfile} style={{ position: 'fixed', background: 'transparent', height: '100vh', width: '100%', zIndex: '789' }}>

        <div style={{ background: '#f9f9f9', borderRadius: '9px', width: '200px', height: '300px', position: 'fixed', right: '40px', top: '50px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: '', gap: '10px', paddingTop: '10px' }}>

            <div onClick={closeProfile} style={{ textAlign: 'right', paddingRight: '20px', cursor: 'pointer' }}>X</div>
            <div style={{ textAlign: 'center' }}><img src="http://localhost:3001/img/avatar.svg" alt="" /></div>

            <div style={{ textAlign: 'center' }}><strong>Danish Khan</strong></div>

            <div style={{ textAlign: 'center' }}>danishk7a@gmail</div>
            <hr />

            <div className='hoverClass'><Link to="/userpanel/userkyc">My Profile</Link></div>

            <div className='hoverClass'><Link to="/userpanel/wallet">Wallet</Link></div>

            <div onClick={""} className='hoverClassLogout'>Log out</div>

          </div>

        </div>

      </div> : <></>}
      {toggle ? (
        <Container
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
              transition: '0.7s',
              position: 'fixed',
              zIndex: '9',
            },
          }}
          maxWidth="xl"
          style={{
            width: window.innerWidth,
            backgroundColor: '#171b26',
            height: '100vh',
            borderRight: '1px solid #2A2F3F',
          }}
        >
          <Box>
            <Box sx={{ width: '90%' }}></Box>
            <IconButton
              sx={{ color: '#7D8794', fontSize: '0.8rem', padding: '10px' }}
            >
              <Close onClick={hidetoggle} />
            </IconButton>
          </Box>

          <Grid
            container
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 3, sm: 2, md: 3 }}
            className="gridcontainer"
          >
            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <DashboardIcon style={{ color: '#5442f2' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/userpanel/userdashboard"
              >
                Dashboard
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <Person4Icon style={{ color: '#EA661C' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/userpanel/userkyc"
              >
                Profile
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <AccountBalanceWalletIcon style={{ color: '#0082FC' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/userpanel/wallet"
              >
                Wallet
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <EqualizerIcon style={{ color: '#19B6A4' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/trade"
              >
                Buy Coins
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <ArticleIcon style={{ color: '#1392DE' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/userpanel/tradehistory"
              >
                Trade History
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <RequestPageIcon style={{ color: '#AEB5BB' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/userpanel/transactionhistory"
              >
                Transaction History
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <SecurityIcon style={{ color: '#0082FC' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/userpanel/security"
              >
                Security
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <PersonAddIcon style={{ color: '#22A3D0' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/userpanel/referral"
              >
                Referral
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <SsidChartIcon style={{ color: '#0082FC' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/chart"
              >
                Technical Analysis
              </Link>
            </Grid>

            <Grid
              onClick={hidetoggle}
              item
              xs={12}
              className="gridbox"
              sx={{
                '&:hover': {
                  background: '#18192B',
                },
              }}
            >
              <PowerSettingsNewIcon style={{ color: '#0082FC' }} />
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#7D8794',
                  fontSize: '16px',
                  marginLeft: '10px',
                }}
                to="/Logout"
              >
                Logout
              </Link>
            </Grid>

            <Link to="/airdropcontest"></Link>
          </Grid>
        </Container>
      ) : (
        <></>
      )}

      {/* Togle================================================================= */}

      <div style={{ backgroundColor: (color == '#ffffff' ? '#171b26' : '#7192A8') }}>

        <Box
          style={{
            backgroundColor: (color == '#ffffff' ? '#171b26' : '#f2f2f2'),
            zIndex: '5',
            position: '',
            borderBottom: (color == '#ffffff' ? '1px solid #2A2F3F' : '1px solid #d9dadb'),
            width: '100%',
            // height: '7vh',
          }}
        >
          <Box>
            <Toolbar>

              <ToggleButton
                onClick={togglebtn}
                value="justify"
                key="justify"
                style={{ border: 'none', padding: '2px', marginTop: '5px' }}
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                <FormatAlignJustifyIcon style={{ color: 'grey' }} />
              </ToggleButton>
              <Typography
                style={{
                  color: '#5661FF',

                  fontSize: '22px',
                  fontWeight: 700,
                }}
              >
                BCEX
              </Typography>

              {/* <Container ></Container> */}

              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  width: '50%',
                }}
              >
                <Box>
                  <Link
                    to="/userpanel/userdashboard"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton
                      sx={{
                        color: (color == '#ffffff' ? '#7D8794' : 'grey'),
                        fontSize: '0.8rem',
                        padding: '10px',
                      }}
                    >
                      Dashboard
                    </IconButton>
                  </Link>
                </Box>

                <Box>
                  <Link to="/trade" style={{ textDecoration: 'none' }}>
                    <IconButton
                      sx={{
                        color: (color == '#ffffff' ? '#7D8794' : 'grey'),
                        fontSize: '0.8rem',
                        padding: '10px',
                      }}
                    >
                      Exchange
                    </IconButton>
                  </Link>
                </Box>


                <Box>
                  <Link to="/market" style={{ textDecoration: 'none' }}>
                    <IconButton
                      sx={{
                        color: (color == '#ffffff' ? '#7D8794' : 'grey'),
                        fontSize: '0.8rem',
                        padding: '10px',
                      }}
                    >
                      Market
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
                        color: (color == '#ffffff' ? '#7D8794' : 'grey'),
                        fontSize: '0.8rem',
                        padding: '10px',
                      }}
                    >
                      Deposit
                    </IconButton>
                  </Link>
                </Box>

              </Box>

              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  color: (color == '#ffffff' ? '#7D8794' : 'grey'),
                  width: '50%',
                }}
              >

                <IconButton>
                  {' '}
                  {color === '#171B26' ? (
                    <Light
                      style={{ color: (color == '#ffffff' ? '#7D8794' : 'grey'), fontSize: '20px' }}
                      onClick={Theme}
                    ></Light>
                  ) : (
                    <DarkModeOutlinedIcon
                      style={{ color: (color == '#ffffff' ? '#7D8794' : 'grey'), fontSize: '20px' }}
                      onClick={Theme}
                    />

                  )}
                </IconButton>

                <Box

                  style={{ textDecoration: 'none' }}
                >
                  <IconButton onClick={showProfile}
                    sx={{ color: (color == '#ffffff' ? '#7D8794' : 'grey'), fontSize: '16px', padding: '10px' }}
                  >
                    <AccountCircleOutlinedIcon
                      sx={{ color: (color == '#ffffff' ? '#7D8794' : 'grey'), fontSize: '30px' }}
                    />


                    {/* {showProfilestate ? <div style={{
                      backgroundColor: 'grey', height: '300px', width: '100px', position: 'fixed'
                    }}> Hello</div> : ""} */}

                  </IconButton>



                </Box>


              </Box>
            </Toolbar>
          </Box>
        </Box>
      </div>



    </>
  )
}

export default UserHeader
