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
const GraphWallet2 = () => {
 
    return (
      <>

<div style={{ backgroundColor: "#f9f9f9", display: 'flex',alignItems:'', flexDirection:'column' , padding:'20px' , borderRadius:'9px'}}>
          <Box sx={{display:{sm:'flex',xs:'none'}, justifyContent:'space-between', width:'50%'}}>

<WalletChart></WalletChart>
                </Box>
</div>                
      </>
  )
}

export default GraphWallet2