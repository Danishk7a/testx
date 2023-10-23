import React, { useState, useEffect, useContext } from 'react'
import {
  Container,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Box,
} from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import LoginIcon from '@mui/icons-material/Login'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined'
import Light from '@mui/icons-material/LightModeOutlined'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search'
import Blogo from '@mui/icons-material/Dashboard'
import { Link, Outlet } from 'react-router-dom'
import User from '@mui/icons-material/Person4Outlined'
import Trade from '@mui/icons-material/SignalCellularAltOutlined'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import { fontWeight } from '@mui/system'
import UserHeader from '../Users/UserHeader'
import Context from '../../hooks/useTheme'
import Close from '@mui/icons-material/CloseOutlined'

const Header = () => {
  const context = useContext(Context)

  const [toggle, settoggle] = useState(false)

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

  const [isLoggedIn, setLogin] = useState(0)

  useEffect(() => {
    axios.get('/checklogin').then(function (response) {
      setLogin(response.data.status)

      // if(isLoggedIn != 200 ){
      //     navilogout('/');
      // }
    })
  })

  const [color, setColor] = useState('#ffffff')
  const Theme = () => {
    if (color === '#ffffff') {
      setColor('#ffffff')
      context.dispatcher({ type: 'update', payload: { color: color } })
    } else {
      setColor('#ffffff')
      context.dispatcher({ type: 'update', payload: { color: color } })
    }
  }

  return (
    <>
      {/* togle================================================================================================== */}

      {toggle ? (
        <Box
          sx={{
            display: 'flex',
            position: 'fixed',
            zIndex: '4',
            flexDirection: 'column',
            height: '100vh',
            backgroundColor: '#171B26',
            alignItems: '',
            width: window.innerWidth,
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

          <Box sx={{}}>
            <Link
              to="/userpanel/userdashboard"
              style={{ textDecoration: 'none' }}
            >
              <IconButton
                sx={{ color: '#7D8794', fontSize: '0.9rem', padding: '10px' }}
              >
                Dashboard
              </IconButton>
            </Link>
          </Box>

          <Box sx={{}}>
            <Link to="/trade" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '0.9rem', padding: '10px' }}
              >
                Trade
              </IconButton>
            </Link>
          </Box>

          <Box sx={{}}>
            <Link to="/userpanel/wallet" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '0.9rem', padding: '10px' }}
              >
                Deposit
              </IconButton>
            </Link>
          </Box>
          <Box sx={{}}>
            <Link to="/reqcall" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: '#7D8794', fontSize: '0.9rem', padding: '10px' }}
              >
                Apply For Listing
              </IconButton>
            </Link>
          </Box>

          <Typography sx={{}}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: 'grey', fontSize: '0.9rem', padding: '10px' }}
              >
                Login{' '}
              </IconButton>
            </Link>
          </Typography>

          <Typography sx={{}}>
            <Link to="/registration" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: 'grey', fontSize: '0.9rem', padding: '10px' }}
              >
                Sign Up
              </IconButton>
            </Link>
          </Typography>
        </Box>
      ) : (
        <></>
      )}
      {/* togle================================================================================================== */}

      <Box
        sx={{
          width: window.innerWidth,
          backgroundColor: color,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '7vh',
            width: '80%',
          }}
        >
          <div style={{ backgroundColor: '', flexGrow: '1', display: 'flex' }}>
            <ToggleButton
              onClick={togglebtn}
              value="justify"
              key="justify"
              style={{ border: 'none', padding: '2px', marginTop: '5px' }}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <FormatAlignJustifyIcon style={{ color: 'grey' }} />
            </ToggleButton>
            {/* <img src="https://btccrypto.exchange/api/static/images/logo.png" height="35px" width="115px" alt="" /> */}
            <div
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#5661FF',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Blogo sx={{ color: '#5661FF' }} /> BCEX
            </div>
          </div>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              fontColor: 'grey',
              alignItems: 'center',
              flexGrow: '4',
              height: '50px',
              gap: '20px',
              backgroundColor: '',
            }}
          >
            <Typography>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <IconButton
                  sx={{ color: 'grey', fontSize: '0.8rem', padding: '6px' }}
                >
                  {' '}
                  Home
                </IconButton>
              </Link>
            </Typography>

            <Typography>
              <Link to="/trade" style={{ textDecoration: 'none' }}>
                <IconButton
                  sx={{ color: 'grey', fontSize: '0.8rem', padding: '6px' }}
                >
                  <Trade
                    sx={{
                      fontSize: '18px',
                    }}
                  />{' '}
                  &nbsp; Trade
                </IconButton>
              </Link>
            </Typography>

            <Typography>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <IconButton
                  sx={{ color: 'grey', fontSize: '0.8rem', padding: '6px' }}
                >
                  List Coin&nbsp;{' '}
                  <div
                    style={{
                      backgroundColor: '#5661FF',
                      width: '40px',
                      height: '20px',
                      display: 'flex',
                      fontSize: '11px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '1px',
                      color: 'white',
                    }}
                  >
                    new
                  </div>
                </IconButton>
              </Link>
            </Typography>

            <Box sx={{}}>
              {' '}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: 'center',
                }}
              >
                <input
                  type="text"
                  onChange={''}
                  placeholder="Explore New Coins..."
                  style={{
                    height: '15px',
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    borderRadius: '5px',
                    padding: '15px',
                    margin: '10px',
                  }}
                />{' '}
                <SearchIcon sx={{ color: '#3468D1' }} />
              </div>
            </Box>

            <Typography>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <IconButton
                  sx={{ color: 'grey', fontSize: '0.8rem', padding: '6px' }}
                >
                  Login{' '}
                </IconButton>
              </Link>
            </Typography>

            <Typography>
              <Link to="/registration" style={{ textDecoration: 'none' }}>
                <IconButton
                  sx={{ color: 'grey', fontSize: '0.8rem', padding: '6px' }}
                >
                  {' '}
                  <User
                    sx={{
                      fontSize: '18px',
                    }}
                  />{' '}
                  &nbsp;Sign Up
                </IconButton>
              </Link>
            </Typography>
          </Box>
        </Container>
        <div
          style={{
            display: 'flex',
            fontColor: 'grey',
            alignItems: 'center',
            width: '20%',
            height: '50px',
            gap: '20px',
            backgroundColor: '',
            justifyContent: 'flex-end',
          }}
        >
          {/*     
         <Box sx={{}}> <div style={{display:'flex', alignItems:'center',gap:'10px' , justifyContent:'center'}}><input type="text" onChange={""} placeholder='Explore New Coins...'  style={{height:"15px", backgroundColor:'transparent' , border:'1px solid white', borderRadius:'5px',padding:'15px' , margin:'10px'}}   /> <SearchIcon sx={{color:'#3468D1'}} /></div></Box>

         <Typography >
         <Link to='/login' style={{textDecoration:'none'}}><IconButton sx={{color:'grey' , fontSize:'0.8rem' , padding:'6px'}}>Login </IconButton></Link>
                       </Typography>
                       
         
                 
         
         
         <Typography >
         <Link to='/registration' style={{textDecoration:'none'}}><IconButton sx={{color:'grey' , fontSize:'0.8rem' , padding:'6px'}}> <User sx={{
                           fontSize:'18px'}} /> &nbsp;Sign Up</IconButton></Link>
         </Typography> */}

          <Box sx={{ display: { xs: 'none', sm: 'none' } }}>
            {' '}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                justifyContent: 'center',
              }}
            >
              <input
                type="text"
                onChange={''}
                placeholder="Explore New Coins..."
                style={{
                  height: '15px',
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  width: '120px',
                  borderRadius: '5px',
                  padding: '15px',
                  margin: '10px',
                }}
              />{' '}
              <SearchIcon sx={{ color: '#3468D1' }} />
            </div>
          </Box>

          <Typography>
            <Link to="" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: 'grey', fontSize: '0.8rem', padding: '6px' }}
              >
                {' '}
                {color === '#171B26' ? (
                  <Light
                    sx={{
                      fontSize: '18px',
                    }}
                    onClick={Theme}
                  ></Light>
                ) : (
                  <DarkModeOutlinedIcon
                    sx={{
                      fontSize: '18px',
                    }}
                    onClick={Theme}
                  />
                )}{' '}
              </IconButton>
            </Link>
          </Typography>

          <Typography>
            <Link to="" style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{ color: 'grey', fontSize: '0.8rem', padding: '6px' }}
              >
                ENG
              </IconButton>
            </Link>
          </Typography>
        </div>
      </Box>
    </>
  )
}

export default Header
