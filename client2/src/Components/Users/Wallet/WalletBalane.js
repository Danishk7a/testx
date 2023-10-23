import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Typography,Button, Box, IconButton} from '@mui/material'
import {Chart as ChartJS,LineElement, CategoryScale, LinearScale,PointElement ,ArcElement,Legend, Tooltip} from 'chart.js'
import { Line } from 'react-chartjs-2';
import EyeOpen from '@mui/icons-material/RemoveRedEyeOutlined';
import Eye2 from '@mui/icons-material/RemoveRedEye';
import Eye3 from '@mui/icons-material/VisibilityOff';
import Arrow1 from '@mui/icons-material/ArrowDropDown';
import SimpleLineChart from '../SimpleLineChart';
import WalletChart from '../Wallet/WalletChart'

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale,PointElement)

const WalletBalance = () => {
    const [walletdata,setwalletdata]  = useState([])
    const [total, settotal] = useState(0);
  
  
  useEffect(()=>{

    const config = {
      headers:{
        "accessToken":sessionStorage.getItem('accessToken')
      }
    }
   
    const url = "/showwallet";
  
  
    axios.get(url, config)
    .then(res=>{ 
    setwalletdata(res.data)
    let totalbal = 0;
      res.data.forEach(item=>{
        
        
        totalbal += item.quantity; 
      })
      settotal(totalbal);
      

    })
    .catch(err=> console.log(err))


   


  },[walletdata])



  // Chart js

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  
  const [showBal, setshowBal] = useState(1)
  const ToggleBal = () => {
    if (showBal) {
       setshowBal(0)
    } else {
      setshowBal(1)
     }


   }
    
  
  return (
      <div style={{display:'flex', flexDirection:'column'}}>
       {/* <div style={{width:'30%'}}> <Line data={data} options={options} /></div> */}
    
      <div style={{ backgroundColor: "#1C2230", display: 'flex',alignItems:'', flexDirection:'column' , padding:'20px' , borderRadius:'9px',boxShadow:'1px -2px 14px -1px black'}}>
       
        <Box sx={{display:'flex', justifyContent:'space-between', backgroundColor:'', marginBottom:'10px'}}>
          
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '' }}>
          
        
          <Typography sx={{ fontSize: { sm: '25px', xs: '16px' }, color: 'cornflowerblue', height: '5vh', paddingLeft: '', display: "flex", alignItems: '', backgroundColor:''}}>Estimated Balance &nbsp;{showBal?<Box sx={{cursor:'pointer',padding:0,height:'1vh'}} onClick={ToggleBal}><Eye2 sx={{fontSize:'22px', color:'grey'}} /></Box>:<Box sx={{cursor:'pointer', padding:0, height:'1vh'}} onClick={ToggleBal}><Eye3 sx={{fontSize:'22px', color:'grey'}} /></Box>}</Typography>

          <Box sx={{ fontSize: { sm: '18px', xs: '14px' }, color: "white", display: 'flex', justifyContent: '', paddingLeft:'',fontWeight: '100' }}>
  
  {showBal?<Box sx={{ fontSize: { sm: '18px', xs: '14px' }, color: "grey", display: 'flex', justifyContent: 'center', fontWeight: '100' }}>{total && "$ " + total.toFixed(4) }<Arrow1 sx={{fontSize:'22px', color:'grey'}}/></Box>:"***Balance hidden***"} 
  
          </Box>
        </Box>
       
        <Box sx={{ display: 'flex', gap: '50px', alignItems: 'center', height: '10vh', padding: '' }}>
         
          
<Box sx={{display:{sm:'flex', xs:'none'}, gap:'20px'}}>
<Button sx={{padding:'2px', fontSize:'10px', backgroundColor:'' }} variant="contained" size="small">Deposite</Button>
<Button sx={{padding:'2px', fontSize:'10px', backgroundColor:'' }} variant="contained" size="small">Withdraw</Button>
<Button sx={{padding:'2px', fontSize:'10px', backgroundColor:'' }} variant="contained" size="small">Buy Crypto</Button>
</Box>
        </Box>
        
       </Box>
        
        <Box sx={{display:{sm:'flex',xs:'none'}, justifyContent:'space-between'}}>

        <SimpleLineChart />
        <WalletChart></WalletChart>
        </Box>
     
     
        <Box sx={{ display: { sm: 'none', xs: 'flex' } }}>

<SimpleLineChart />

</Box>


   
</div>
      </div>
  )
}

export default WalletBalance