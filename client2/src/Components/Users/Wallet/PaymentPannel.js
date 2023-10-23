import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import axios from 'axios'
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
const PaymentPannel = ({ closePaymentPage, address, inputdata, currency }) => {

  const [response, setresponse] = useState(0)
  const navigate =  useNavigate() 

  const usdtAddress = address;
  const network = 'BSC'; // Replace with the appropriate network (e.g., BSC, ETH, etc.)
  const cryptoURI = `${network}:${usdtAddress}`;
  const checkingPaymentLoop = async () => {

    const response = await axios.post(`/checkpaymentloop`, {
      address,
      inputdata,
      currency

    });

    setresponse(response.data.msg);





  }






// ================================Timer==============================

const [showComponent, setShowComponent] = useState(true);
const [remainingTime, setRemainingTime] = useState(5 * 60); // 5 minutes in seconds

useEffect(() => {
  const timer = setInterval(() => {
    setRemainingTime((prevTime) => prevTime - 1);
  }, 1000); // Update every second

  return () => {
    clearInterval(timer);
  };
}, []);

useEffect(() => {
  if (remainingTime <= 0) {
    setShowComponent(false);
  }
}, [remainingTime]);

if (!showComponent) {
  return null; // Render nothing when showComponent is false
}

const minutes = Math.floor(remainingTime / 60);
const seconds = remainingTime % 60;



// ================================Timer==============================









  // console.log("this is inside pymnt page " + address)



// useEffect(() => {
  
//   checkingPaymentLoop();


// },[seconds])


//   useEffect(() => {
  
//     if (response) {
//       console.log("MSG HERE !! " + response)
//       navigate('/trade')

// }

// },[response])



  return (
    <div> <Box sx={{
      height: '', backgroundColor: '', border: '0.1px solid grey'
      , padding: '30px'
    }}>


      <Box sx={{ backgroundColor: '', color: 'grey', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '20px', cursor: 'pointer' }} onClick={closePaymentPage}>X</Box>


      <Box sx={{ color: 'grey', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Amount : {inputdata +" "+ currency}</Box>

      <Box sx={{ backgroundColor: '', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        {/* <img src="/static/images/qrcode.png"  alt="" /> */}
        <QRCode value={address} />


      </Box>
      <Box sx={{ color: 'grey', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}><Box sx={{ color: '#5661ff' }}>{currency.toUpperCase()}&nbsp;Address : {address}</Box></Box>



      <Box sx={{
        color: 'grey', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'
      }}>




        {currency == 'usdt' ? <Box sx={{ color: '#5661ff' }}>Please send BEP20 USDT only and&nbsp; </Box> : null}  click on the proceed button and make payment

      </Box>


      <Box x={{
        color: 'grey', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', alignItems: 'center'
      }}></Box>



      <Box sx={{ color: 'grey', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>

        note : dont not close or refresh the window while payment is in proccess.<div>Remaining Time: {minutes} minutes {seconds} seconds</div>


      </Box>

      <Box sx={{ color: 'grey', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}> <Button sx={{
        backgroundColor: 'transparent'
        , color: 'grey'
      }} size='small' variant='contained' onClick={closePaymentPage}>cancel</Button>  <Button variant='contained' sx={{ backgroundColor: '#5661ff' }} size='small' onClick={checkingPaymentLoop}>proceed</Button></Box>




    </Box></div>
  )
}

export default PaymentPannel