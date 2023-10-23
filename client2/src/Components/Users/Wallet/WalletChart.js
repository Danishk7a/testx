import React, {useState, useEffect } from 'react'
import {Chart as ChartJS, ArcElement,Legend, Tooltip} from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2';
import { Box } from '@mui/system';
import axios from 'axios'
import WWWs from '@mui/icons-material/Equalizer';


const WalletChart = () => {

    const [walletdatas, setWalletdatas] = useState(0)

   

  
  useEffect(() => {
  

    const config = {
      headers: {
        accessToken: sessionStorage.getItem('accessToken'),
      },
    }

    const url = '/showwallet'

    axios.get(url, config).then((res) => {
      setWalletdatas(res.data)
      
    })
    console.log("JHEHHEKHKE " , walletdatas)

},[])
 


    // Chart
const data = {
    // labels: ['USDT', 'ETH', 'XRP' ],
    labels: ['ETH', 'BTC', 'USDT' ],
    datasets: [
      {
        data: [120, 40, 40, 40],
        // data: ['not Connected to Wallet', 'not Connected to Wallet', 'not Connected to Wallet', 'not Connected to Wallet'],
         
            backgroundColor: [ '#5442F2', '#19B6A4'],
            // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#990033', '#FF9000', '#5442F2', '#19B6A4'],
            borderWidth: 0
      }
    ]
  };
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
   
    plugins:{
     
      legend: {
        position: 'right'
      }
    
    }
  };
  
    return (
  
  
  
      <Box sx={{ backgroundColor: '', width: { sm: '250px', xs: '300px' }, height: { sm: '250px', xs: '300px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        
        <Doughnut data={data} options={options} />

      
        {/* <Box sx={{ color: 'grey', display: 'flex', justifyContent: 'flex-start', alignItems:'flex-start',}}><WWWs sx={{fontSize:'22px', color:'grey'}}/>   &nbsp;Wallet Overview </Box> */}
      
      </Box>
  )
}

export default WalletChart