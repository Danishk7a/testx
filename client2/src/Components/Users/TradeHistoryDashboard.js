import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Typography, Box} from '@mui/material'

const TradeHistoryDashboard = () => {
    const [tradedata,settradedata]  = useState(0)

    useEffect(()=>{
      const url = "/showtrade";
      axios.get(url, config)
        .then(res => {
          // console.log(res.data)
      settradedata(res.data)
      
      })
      .catch(err=> console.log(err))
  
    },[tradedata])
  
    const config = {
        // headers:{
        //   "accessToken":sessionStorage.getItem('accessToken')
        // }
      }
 
    return (
    
      <>
        <Box >

       
    
    <Box style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '20px', backgroundColor: '', color: 'grey', position: '', top:'10px', padding:'20px', justifyContent:'space-between'}}>


<div style={{width:''}}>Name</div>
<div style={{width:''}}> Purchased Amount</div>
<div style={{width:''}}>Coin</div>

</Box>
    
    
    
    
{tradedata && tradedata.map((ele)=>{

return <div style={{display:'flex', alignItems:'center',justifyContent:'space-around' , padding:'20px',backgroundColor:'#1C2230', justifyContent:'space-between'}}>
{/* {ele.type== 'credit'? :} */}
<div style={{width:'', display:'flex', alignItems:'center'}}><img src={`http://153.92.223.84/api/static/images/coinimage/${ele.currency.toUpperCase()}.png`} alt=""  height="20px" width="20px"/>&nbsp; &nbsp;<span style={{color:'#6F6A6D'}}>{ele.currency}</span></div>

  <div style={{ width: '', color: ((ele.type === 'credit') ? 'green' : 'red') }}>{"$ " + (ele.quantity * ele.amount).toFixed(3)}</div>
  
{ele.type === 'credit' ? <div><span style={{ color: 'green' }}>&nbsp;+&nbsp;{((ele.quantity * ele.amount) / ele.amount).toFixed(3)}&nbsp;{ele.currency}</span></div> : <div><span style={{ color: 'red' }}>&nbsp;-&nbsp;{((ele.quantity) / ele.amount).toFixed(3)}&nbsp;{ele.currency}</span></div>}


{/* <div><img src= alt="" /></div> */}

</div>

})}
           </Box>
    
    </>



  )
}

export default TradeHistoryDashboard