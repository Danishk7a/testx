import React, { useEffect, useRef, useState } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import './css/CustomChart.css'
import axios from 'axios';
function CustomChart(props) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  const [data, setdata] = useState(0)

  
  useEffect(() => {
    axios.get('/customdata').then((res) => {

        setdata(res.data)

        })


  })
  
  
  useEffect(() => {
    if (!chartRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: props.size - 40,
        height: 350,
        layout: {
          
          // background: 'green',
          backgroundColor:'aqua',
    // borderColor: '#2C3141',
  // color:'purple',
    fill: true,
  // pointBorderColor:'yellow',
          textColor:'white'
        },
        grid: {
          vertLines: {
            color: '#363C4E',
          },
          horzLines: {
            color: '#363C4E',
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        rightPriceScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
        timeScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
      });

      const candleSeries = chartRef.current.addCandlestickSeries({
        upColor: '#089981',
        downColor: '#F23645',
        borderDownColor: '#F23645',
        borderUpColor: '#089981',
        wickDownColor: '#F23645',
        wickUpColor: '#089981',
      });

      

      candleSeries.setData([
	
        { time: '2019-03-01', open: 185.82, high: 186.56, low: 182.86, close: 185.17 },
        { time: '2019-03-04', open: 186.20, high: 186.24, low: 182.10, close: 183.81 },
        { time: '2019-03-05', open: 184.24, high: 185.12, low: 183.25, close: 184.00 },
        { time: '2019-03-06', open: 184.53, high: 184.97, low: 183.84, close: 184.45 },
        { time: '2019-03-07', open: 184.39, high: 184.62, low: 181.58, close: 182.51 },
        { time: '2019-03-08', open: 181.49, high: 181.91, low: 179.52, close: 181.23 },
        { time: '2019-03-11', open: 182.00, high: 183.20, low: 181.20, close: 182.44 },
        { time: '2019-03-12', open: 183.43, high: 184.27, low: 182.33, close: 184.00 },
        { time: '2019-03-13', open: 183.24, high: 183.78, low: 181.08, close: 181.14 },
        { time: '2019-03-14', open: 181.28, high: 181.74, low: 180.50, close: 181.61 },
        { time: '2019-03-15', open: 182.30, high: 182.49, low: 179.57, close: 182.23 },
        { time: '2019-03-18', open: 182.53, high: 183.48, low: 182.33, close: 183.42 },
        { time: '2019-03-19', open: 184.19, high: 185.82, low: 183.48, close: 184.13 },
        { time: '2019-03-20', open: 184.30, high: 187.12, low: 183.43, close: 186.10 },
        { time: '2019-03-21', open: 185.50, high: 190.00, low: 185.50, close: 189.97 },
        { time: '2019-03-22', open: 189.31, high: 192.05, low: 188.67, close: 188.75 },
        { time: '2019-03-25', open: 188.75, high: 191.71, low: 188.51, close: 189.68 },
        { time: '2019-03-26', open: 190.69, high: 192.19, low: 188.74, close: 189.34 },
        { time: '2019-03-27', open: 189.65, high: 191.61, low: 188.39, close: 189.25 },
        { time: '2019-03-28', open: 189.91, high: 191.40, low: 189.16, close: 190.06 },
        { time: '2019-03-29', open: 190.85, high: 192.04, low: 190.14, close: 191.89 },
        { time: '2019-04-01', open: 192.99, high: 195.90, low: 192.85, close: 195.64 },
        { time: '2019-04-02', open: 195.50, high: 195.50, low: 194.01, close: 194.31 },
        { time: '2019-04-03', open: 194.98, high: 198.78, low: 194.11, close: 198.61 },
    
    ]);
   
   
    // candleSeries.setData(data);
   
   
   
   
   
    }
  }, []);

  return <><div ref={chartContainerRef} /></>;
}

export default CustomChart;
