import React from 'react'
import Success from '@mui/icons-material/CheckCircleOutlineOutlined';
import Error from '@mui/icons-material/ReportGmailerrorredOutlined';
import Pending from '@mui/icons-material/InfoOutlined';
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'


const OpenOrder = () => {
  
    const [OrderBook,setOrderBook]  = useState(0)

    useEffect(()=>{
      const url = "/openorder"; 
      axios.get(url, config)
        .then(res => {
          // console.log(res.data)
      setOrderBook(res.data)
      
      })
        .catch(err =>
          console.log(err)
        
          )
  
    },[OrderBook])
  
  
    const config = {
      // headers:{
      //   "accessToken":sessionStorage.getItem('accessToken')
      // }
    }
   
    
    
    return (
      <>
        
        
        
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width:'50%' , padding:'20px'}}>
          <div>order id</div>
          <div>Coin</div>
          <div>Price</div>
          <div>Amount</div>
          <div>date</div>
          <div>Status</div>
  
  
          </div>
    
        
          {OrderBook && OrderBook.map((ele) => {
          return <>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width:'50%' , padding:'20px'}}>
              <div>{ ele.orderid}</div>
          <div>{ele.currency}</div>
              <div>{ ele.price}</div>
              <div>{ ele.amount}</div>
              <div>{ ele.dt}</div>
          <IconButton sx={{fontSize:'12px',color:'grey'}}>{ele.status}&nbsp;{ele.status === 'Pending'?<Pending  sx={{color:'orange',fontSize:'18px' }}/>:<Success  sx={{color:'green',fontSize:'18px' }}/>}</IconButton>
  
  
  
        </div>
        
  
          
          </>
        })}
      
          
        
  
  
  
  
  </>
  
  
    )
  }

export default OpenOrder