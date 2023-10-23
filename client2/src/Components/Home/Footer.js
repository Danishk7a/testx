import React from 'react'
// import './css/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import Telegram from '@mui/icons-material/SendOutlined';
import Twiiter from '@mui/icons-material/ThumbUpAltOutlined';
const Footer = (props) => {
  return (
    <>
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#5661FF',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              width: { sm: '200px', xs: '100px' },
              height: { sm: '200px', xs: '100px' },
              backgroundColor: '',
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div class="col" style={{ padding: '20px' }}>
              <h4 style={{ color: 'white', fontSize: '16px', lineHeight: 3 }}>Company</h4>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>About us</p>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>Need Help?</p>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>Crypto Exchange</p>
            </div>
          </Box>

          <Box
            sx={{
              width: { sm: '200px', xs: '100px' },
              height: { sm: '200px', xs: '100px' },
              backgroundColor: '',
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div class="col" style={{ padding: '20px' }}>
              <h4 style={{ color: 'white', fontSize: '16px', lineHeight: 3 }}>Trading</h4>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>Spot Wallet</p>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>Margin Wallet</p>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>Future Trading</p>
            </div>
          </Box>
          <Box
            sx={{
              width: { sm: '200px', xs: '100px' },
              height: { sm: '200px', xs: '100px' },
              backgroundColor: '',
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div class="col" style={{ padding: '20px' }}>
              <h4 style={{ color: 'white', fontSize: '16px', lineHeight: 3 }}>Listing</h4>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>
                Create New Token
              </p>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>Earn with us</p>
              <p style={{ fontSize: '10px', color: 'white', lineHeight: '2' }}>Others</p>
            </div>
          </Box>

          <Box
            sx={{
              width: { sm: '200px', xs: '100px' },
              height: { sm: '200px', xs: '100px' },
              backgroundColor: '',
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div class="col" style={{ padding: '20px' }}>
              <h4 style={{ color: 'white', fontSize: '16px', lineHeight: 3 }}>Comunity</h4>
              <a href='https://t.me/BitcoinCryptoExchange' style={{ fontSize: '10px', color: 'white', lineHeight: '2', textDecoration:'none' }}> <Box sx={{ display: 'flex', alignItems: 'center' }} ><Telegram sx={{ color: 'white' }} /> &nbsp; Telegram</Box> </a>
              <a   href='https://youtube.com/@bcexcryptoexchange53' style={{ fontSize: '10px', color: 'white', lineHeight: '2' , textDecoration:'none'}}> <Box sx={{ display: 'flex', alignItems: 'center' }}><YouTubeIcon sx={{ color: '#FF707A' }} />&nbsp;Youtube</Box> </a>
              <a href='https://twitter.com/SwapBitcoin/status/1651328483145170945?t=Ryv67IwIn8itqf0R_481Gw&s=08' style={{ fontSize: '10px', color: 'white', lineHeight: '2', textDecoration:'none' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img src='/static/images/tw.png' height={20}  />&nbsp; Twiiter</Box> </a>
            </div>
          </Box>


        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '7vh',
          backgroundColor: '#f2f2f2',
      padding:'20px' }}
      >
        <p style={{ fontSize: '10px', color: 'white' }}>
          {' '}
          Copyright © 2023 BCEX Crypto Exchange. All rights reserved.
        </p>

        <p style={{ fontSize: '10px', color: 'white' }}>
          {' '}
          Contact us Support@btccrypto.exchange
        </p>
      </Box>

      {/*         
   <Box sx={{width:window.innerWidth, backgroundColor:''}}>
   <Box sx={{backgroundColor:'#171B26',padding: {sm:'60px',xs:'10px'} ,display:'flex', alignItems:'center', justifyContent:'center'}}>

   
  <Box  sx={{ display:'flex',flexDirection:'row', alignItems:'center', gap:'20px', flexWrap:'wrap' }}>
    
    
    
   
    


   
  






         <div class="col"  style={{padding:'20px' }}>
        <h4 style={{ color:'white', fontSize:'14px'}}>Analysis</h4>
        <p style={{fontSize:'10px' , color:'white'}}>CandleStick Chart</p>
        <p style={{fontSize:'10px' , color:'white'}}>Need help</p>
        <p style={{fontSize:'10px' , color:'white'}}>Tutorial</p>
        
    </div>



</Box>
</Box>
  

   
  
    </Box> */}
    </>
  )
}

export default Footer
