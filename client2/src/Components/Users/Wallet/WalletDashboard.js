import React, { useEffect, useState } from 'react'
import { Button, Box, Typography } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
const WalletDashboard = ({ bg }) => {
  const [walletdata, setwalletdata] = useState([])
  const [total, settotal] = useState(0)

  useEffect(() => {
    const config = {
      headers: {
        accessToken: sessionStorage.getItem('accessToken'),
      },
    }

    const url = '/showwallet'

    axios.get(url, config).then((res) => {
      setwalletdata(res.data)
      let totalbal = 0
      res.data.forEach((item) => {
        totalbal += item.quantity
      })
      settotal(totalbal)
    })
  }, [])

  return (
    <>
      {/* ============================================================================== */}
      <Box style={{ padding: '20px' }}>
        <Typography
          sx={{
            fontSize: '20px',
            display: { sm: 'flex', xs: 'none' },
            alignItems: 'center',
            height: '4vh',
            color: 'grey',
          }}
        >
          Wallet Balance
        </Typography>
      </Box>

      {Array.isArray(walletdata.msg) ?
        walletdata.msg.map((ele) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '20px',
              }}
            >
              {/* {ele.type== 'credit'? :} */}
              <Box style={{ width: '20%' }}>
                <img
                  src={`https://btccrypto.exchange/api/static/images/coinimage/${ele.currency.toUpperCase()}.png`}
                  alt=""
                  height="30px"
                  width="30px"
                />
              </Box>
              <Box
                sx={{
                  color: '#7D8794',
                  fontSize: { sm: '13px', xs: '10px' },
                  width: '30%',
                }}
              >
                {ele.currency.toUpperCase()}
              </Box>
              <Box
                sx={{ 
                  color: '#7D8794',
                  fontSize: { sm: '13px', xs: '10px' },
                  width: '30%',
                }}
              >
                {ele.quantity}&nbsp;{ele.currency.toUpperCase()}
              </Box>
              <Box sx={{ width: '20%' }}>
                <Link to='/userpanel/wallet/withdraw'
                  style={{ fontSize: { sm: '13px', xs: '10px' }, textDecoration: 'none', color:'#5661ff'}}
                  size="small"
                >
                  Widthraw
                </Link>
              </Box>

              {/* <div><img src= alt="" /></div> */}
            </div>
          )
        }) : <Box sx={{ marginTop: '20px', backgroundColor:'transparent' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '20px',
            backgroundColor: '#1B202E',
            color: 'grey',
            position: 'scroll',
            top: '20px',
          }}
        >
          <div style={{ width: '' }}>Coin</div>
          <div style={{ width: '' }}>Price</div>
          <div style={{ width: '' }}>Amount</div>
          <div style={{ width: '' }}>Type</div>
          <div style={{ width: '' }}>Date</div>

        </div>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey', padding: '20px', backgroundColor: '#1a1f2a' }}> Nothing to show</Box>
       
            <Box sx={{ height: '100vh', backgroundColor: 'transparent' }}></Box>
      </Box>
      
      
      
      }
    </>
  )
}

export default WalletDashboard
