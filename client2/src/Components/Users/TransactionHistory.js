import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/system'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import { Typography, IconButton } from '@mui/material'
import Loading from '../Loading'



const TransactionHistory = () => {
  const [tradedata, settradedata] = useState(0)

  useEffect(() => {
    const url = '/ShowTransactionController'
    axios
      .get(url, config)
      .then((res) => {
        // console.log(res.data)
        settradedata(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const config = {

  }



  const [detail, setdetail] = useState(0)
  const showdetails = () => {
    if (detail == 0) {
      setdetail(1)
    } else {
      setdetail(0)
    }
  }






  return (

    <>
      {Array.isArray(tradedata.msg) ? (
        <Box>
          <div style={{ padding: '20px' }}>
            <Typography sx={{ fontSize: '20px', color: 'grey' }}>
              Trade History
            </Typography>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '20px',
              backgroundColor: '#1B202E',
              color: 'grey',
              position: 'scroll',
              top: '20px',
            }}
          >
            <div style={{ width: '10%' }}>ID</div>
            <div style={{ width: '20%' }}>Name</div>
            <div style={{ width: '30%' }}>Amount</div>
            <div style={{ width: '20%' }}>Coin Price</div>
            <div style={{ width: '10%' }}>Type</div>
            <Box sx={{ width: '30%', display: { xs: 'none', sm: 'block' } }}>
              Date
            </Box>
          </div>

          {tradedata &&
            tradedata.msg.map((ele) => {
              return (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
                    <div style={{ width: '', color: '#6F6A6D' }}>
                      {ele.coin}
                    </div>

                    <div style={{ width: '', color: '#6F6A6D' }}>
                      {ele.amount}
                    </div>

                    <div style={{ width: '', color: '#6F6A6D' }}>
                      {ele.hash}
                    </div>
                    <div style={{ width: '', color: '#6F6A6D' }}>
                      {ele.toaddsr}
                    </div>

                  </Box>


                </>
              )
            })}
        </Box>
      ) : (tradedata.msg === 4 ?
        <Box sx={{ marginTop: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '20px',
              backgroundColor: '#1B202E',
              color: 'grey',
              position: 'scroll',
              top: '20px',
            }}
          >
            <div style={{ width: '' }}>ID</div>
            <div style={{ width: '' }}>Name</div>
            <div style={{ width: '' }}>Amount</div>
            <div style={{ width: '' }}>Coin Price</div>
            <div style={{ width: '' }}>Type</div>

          </div>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey', padding: '20px', backgroundColor: '#1a1f2a' }}> Nothing to show</Box>
          <Box sx={{ height: '100vh', backgroundColor: 'transparent' }}></Box>
        </Box>





        : <Loading />

      )}
    </>


  )
}

export default TransactionHistory