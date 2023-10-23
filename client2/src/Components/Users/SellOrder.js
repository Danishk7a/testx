import React from 'react'
import {Box} from '@mui/material'
import { padding } from '@mui/system'

const SellOrder = ({bgcolor}) => {
  return (
    <>
    <div style={{overflow:'hidden'}}>
        <div style={{ fontSize: '14px', marginBottom: '10px', backgroundColor: (bgcolor == '#ffffff'?'#363BE6':'#1B202E'), padding:"10px", color:(bgcolor == '#ffffff'?'White':'grey')}}>Sell Order Book</div>
        <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between'}}>
            <div>Price</div>
            <div>Amount</div>
            <div>Total</div>

          </div>
          
{/* Raw Fake Data=================================================================================================================== */}




<div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div>

          <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

              </div>
              
              <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

              </div>
              
              <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

              </div>
              
              <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

              </div>
              

              <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

              </div>
              <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div>
          <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div> <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div> <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div> <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div> <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div> <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div> <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
            <div style={{color:'red'}}>1711.8</div>
            <div>0.8676</div>
            <div>2344.90</div>

          </div>

        


        







      {/* Raw Fake Data=================================================================================================================== */}




          {/* {orderdata && orderdata.map((e) => {
              return <>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>{orderdata.Price}</div>
            <div>{orderdata.amount}</div>
            <div>{orderdata.Total}</div>
                  </div>
              
              </>
          })} */}





  </div>


</>
  )
}

export default SellOrder