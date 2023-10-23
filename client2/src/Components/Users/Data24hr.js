import React, { useEffect, useState, useContext } from 'react'
import { connection, w3cwebsocket as W3CWebSocket } from "websocket";
import {Box, Container} from '@mui/material'
import Context from '../../hooks/useCoin';

// const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');



const Data24hr = ({coins,coinChange, color}) => {
    const context = useContext(Context)
  
    const [client,setClient] = useState(new W3CWebSocket(`wss://stream.binance.com:9443/ws/${(context.symbol).toLowerCase()}@ticker`))
    
    const [coin,setcoin] = useState(0);
    
    // client.onmessage = (message) => {
    //     // console.log(message.s)
    //     // console.log(message.data) 
        
    //     let x = JSON.parse(message.data)
    //     setcoin(x)
    // }

    
    
    useEffect(()=>{
        if(client._bufferedAmount>0){

            const readText = client.readText()
            readText.read()


        }
        client.close()
        setClient(new W3CWebSocket(`wss://stream.binance.com:9443/ws/${(context.symbol).toLowerCase()}@ticker`));
        
        

        // console.log(context.symbol)


    },[context.symbol])
    
    useEffect(()=>{
       
        client.onmessage = (message) => {
            // console.log(message.s)
            // console.log(message.data) 
            // console.log("Hii")
            let x = JSON.parse(message.data)
            setcoin(x)
        }
    },[client])



  return (
    
    
      <>
  
          
          <Box sx={{display:{xs:'none', sm:'block'}}}>
                      
    <Box sx={{backgroundColor:color}}>


<Container sx={{backgroundColor:(color == '#ffffff'?'#ebedef':'#171b26') , color:(color =='#ffffff'?'grey':'white') , height:{sm:'10vh',xs:'7vh'} , display:'flex' , alignItems:'center', justifyContent:'space-between'}}>

<Box sx={{display:'flex', flexDirection:'column' , padding:{sm:'10px',xs:'0px'}}}>
<div style={{color:'grey', fontSize:{sm:'11px',xs:'9px'}}}>Symbol</div>
    <Box sx={{fontSize:{sm:'16px',xs:'12px'}}}>
    {context.symbol}
    </Box>
</Box>


<Box sx={{display:'flex', flexDirection:'column' ,  padding:{sm:'10px',xs:'0px'}}}>
<div style={{color:'grey', fontSize:{sm:'11px',xs:'9px'}}}>24h Change</div>
    <Box sx={{fontSize:{sm:'16px',xs:'12px'}}}>
    {coin.P}
    </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' ,  padding:{sm:'10px',xs:'0px'}}}>
<div style={{color:'grey',  fontSize:{sm:'11px',xs:'9px'}}}>24h high</div>
    <Box sx={{fontSize:{sm:'16px',xs:'12px'}, color:'#089981'}}>
    {(Number(coin.h))}
    </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' ,  padding:{sm:'10px',xs:'0px'}}}>
<div style={{color:'grey', fontSize:'11px'}}>24h Low</div>
    <Box sx={{fontSize:{sm:'16px',xs:'12px'},color:'#F23645'}}>
    {(Number(coin.l))}
    </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' , padding:'10px'}}>
<div style={{color:'grey', fontSize:'11px'}}>24h Volume</div>
    <Box sx={{fontSize:{sm:'16px',xs:'12px'}}}>
    {Number(coin.v)}
    </Box>
</Box>







</Container>



      </Box>
      

          </Box>
          
          
          
          
          
          
          
          
          
          
          
{/*Mobo for==========================================================================================================  */}
{/*Mobo for==========================================================================================================  */}



          <Box sx={{ display: { xs:'none', sm:'none'}}}>
              
          <Box sx={{
              backgroundColor: '#171B26', width: {xs:window.innerWidth -20}
          }}>


    <Container sx={{backgroundColor:'#171B26' , color:'white' , height:{sm:'10vh',xs:'7vh'} , display:'flex' , alignItems:'center', justifyContent:'space-between'}}>

<Box sx={{display:'flex', flexDirection:'column' , padding:{sm:'10px',xs:'0px'}}}>
    <div style={{color:'grey', fontSize:{sm:'11px',xs:'9px'}}}>Symbol</div>
        <Box sx={{fontSize:{sm:'16px',xs:'12px'}}}>
        {context.symbol}
        </Box>
</Box>


<Box sx={{display:'flex', flexDirection:'column' ,  padding:{sm:'10px',xs:'0px'}}}>
    <div style={{color:'grey', fontSize:{sm:'11px',xs:'9px'}}}>24h Change</div>
        <Box sx={{fontSize:{sm:'16px',xs:'12px'}}}>
        {coin.P}
        </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' ,  padding:{sm:'10px',xs:'0px'}}}>
    <div style={{color:'grey',  fontSize:{sm:'11px',xs:'9px'}}}>24h high</div>
        <Box sx={{fontSize:{sm:'16px',xs:'12px'}, color:'#089981'}}>
        {(Number(coin.h)).toFixed(3)}
        </Box>
</Box>



<Box sx={{display:'flex', flexDirection:'column' ,  padding:{sm:'10px',xs:'0px'}}}>
    <div style={{color:'grey', fontSize:'11px'}}>24h Low</div>
        <Box sx={{fontSize:{sm:'16px',xs:'12px'},color:'#F23645'}}>
        {(Number(coin.l)).toFixed(3)}
        </Box>
</Box>






 

    </Container>
    
   
    
          </Box>

</Box>





{/*Mobo for==========================================================================================================  */}
{/*Mobo for==========================================================================================================  */}


    </>
  )
}

export default Data24hr