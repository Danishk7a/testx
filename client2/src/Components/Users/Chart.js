import React from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Button } from '@mui/material';

const Chart = () => {
  
   

  
  
  
  

   
    return (
    <> <div style={{overFlow:'hidden'}}>

     <AdvancedRealTimeChart style={{zIndex:-2}} height={window.innerHeight} width={window.innerWidth}  symbol='ETHUSDT'   theme='dark' container_id='chart' ></AdvancedRealTimeChart>
    </div>
  
    </>
  )
}

export default Chart