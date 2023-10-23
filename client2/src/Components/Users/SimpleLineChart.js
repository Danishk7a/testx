import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'
import { Box } from '@mui/material'
import { Chart } from 'chart.js'
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const SimpleLineChart = ({ bg }) => {
  const data = {
    labels: ['9-2', '10-3', '12-9', '7-09', '8-02'],
    datasets: [
      {
        labels: '',
        data: [4, 5, 9, 2, 5, 8, 7],
        backgroundColor: '#3F7FED',
        borderColor: '#2C3141',
        color: 'purple',
        fill: true,
        // pointBorderColor:'yellow',
        tension: 0.4,
      },
    ],
  }

  const options = {
    plugins: {
      legend: false,
    },
    scales: {},
    interactivity: {
      mode: 'index',
      intersect: false,
      filter: false,
    },
  }
  return (
    <>
      <Box sx={{ width: { sm: '100%', xs: '100%' } }}>
        <Line data={data} options={options}></Line>
      </Box>
    </>
  )
}

export default SimpleLineChart
