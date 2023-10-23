import React from 'react'
import Signal from '@mui/icons-material/SignalCellularAlt';
import { Box } from '@mui/material';
const StableConnection = () => {
  return (

      <>
      
          <Box sx={{ position: 'fixed', bottom: '0px', height: '3vh', backgroundColor: '#131722', width: window.innerWidth, borderTop: '1px solid #363c4e', paddingLeft: '20px', display: {sm:'flex',xs:'none'}, alignItems: 'center' , zIndex:15 }}>
              
             <div style={{display:'flex', alignItems:'center'}}> <Signal sx={{ color: '#0C857C', fontSize: "16px" }} />&nbsp; <span style={{ color: 'grey' }}>Stable Connection....</span></div>
             
              <div style={{paddingLeft:'20px' ,  width:'80%'}}><marquee attribute_name = "attribute_value" style={{color:'grey', fontSize:'9px'}}>
  ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC ETH BTC SOL USDT DOGE LUNA BCEX BNB XRP ADA LTC 
              </marquee></div>
              
              <div style={{paddingLeft:'20px' , color:'grey', fontSize:'12px'}} >&copy; BCEX</div>
          
          
          </Box>
      </>
      
      
  )
}

export default StableConnection