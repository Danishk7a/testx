import React, { Component  } from 'react';
import {Button} from '@mui/material'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
// import './Css/Chart.css'


function Chart() {
 


    var elem = document.getElementById("chart");

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

openFullscreen();



  
  
  return (
    <>
    
    <div id="chart">


    <AdvancedRealTimeChart   symbol="ETHUSDT"   theme='dark' ></AdvancedRealTimeChart>
    </div> 
    {/* <h1>Hello </h1> */}
    <Button onclick={openFullscreen} outlined>Full Mode</Button>
    </>
  )
}

export default Chart