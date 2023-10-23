import React, {useState} from 'react'
import {Typography,Button,TextField,Select,MenuItem,Container} from '@mui/material'
import axios from 'axios';
import HeaderBox from '../HeaderBox';

import ValidateEmail from './ValidateEmail';

// import {Container, Typography, Toolbar,IconButton, Button,Badge,Grid,Divider, Box, Slider,} from '@mui/material'
const Withdraw = () => {
  
  const [coin, setcoin] = useState("");
  
  const [response, setresponse] = useState(0)
  const handleChange = (event) => {
    setcoin(event.target.value);
  };
 
  
  const inwithdraw = ()=>{
let wamount = document.getElementById('wamount').value;
let wemail = document.getElementById('wemail').value;

let data = {

   amount:amount, 
    email:email,
    wcoin:coin,

}
axios.post('/emailvalidate',data).then((res)=>{
    // console.log("yayha dekh  !!!!!!!@@" + res.data.msg)
    setresponse(res.data)
})



  

  }


  const [amount, setAmount] = useState("")  
  const Amount = (e) => {
      setAmount(e.target.value)

  }

  const [email, setEmail] = useState("")
  const Email = (e) => {
    setEmail(e.target.value)


  }

  const hideResponse = () => {
  
    setresponse(0)
}

  const [hideW, sethideW] = useState(0)
  const hidewithdraw = () => {

    if (!(email && amount == "")) {
      
      sethideW(1)
      inwithdraw()
    } else {
      
    }

  }

  
    return (
   
    <>

<HeaderBox title="Withdraw"/>


        {hideW ? <ValidateEmail coin={ coin} email={email} amount={amount} />:<div style={{border:'1px solid #80808017', padding:'30px'}}>
  
    <div style={{padding:"20px" , display:'flex' ,justifyContent:'space-between',alignItems:'center', backgroundColor:'#ffffff'}}>
{/* <h3>Internal Transfer</h3> */}
<Select style={{height:'27px' ,border:'1px solid grey', width:'18%', color:'grey',marginRight:'1px', backgroundColor:'none'}} id="coin" value={coin} defaultValue="coins"  onChange={handleChange} >  
<MenuItem sx={{color:'grey', display:'flex', alignItems:'center'}} value="ETH"><img src="/static/images/coinimage/ETH.png"  height='15px' width='15px' alt="" />&nbsp;ETH</MenuItem>  
<MenuItem   sx={{color:'grey', display:'flex', alignItems:'center'}} value="USDT"><img src="/static/images/coinimage/USDT.png"  height='15px' width='15px' alt="" />&nbsp;USDT</MenuItem>  
<MenuItem  sx={{color:'grey', display:'flex', alignItems:'center'}} value="BTC"><img src="/static/images/coinimage/BTC.png"  height='15px' width='15px' alt="" />&nbsp;BTC</MenuItem>  
<MenuItem   sx={{color:'grey', display:'flex', alignItems:'center'}} value="DOGE"><img src="/static/images/coinimage/DOGE.png"  height='15px' width='15px' alt="" />&nbsp;DOGE</MenuItem>  
</Select> 

<input small type="number" min='1' id='wamount' onChange={Amount} placeholder='Amount' style={{background:'transparent',margin:'10px',height:'27px' ,input:{color:"grey"}, width:'74%',border:'1px solid grey', padding:'10px'}}/>

<input id='wemail' onChange={Email} placeholder='Email Address'style={{background:'transparent',margin:'10px',height:'27px' ,input:{color:"grey"}, width:'74%',border:'1px solid grey', padding:'10px'}}/>

<Button size='small' sx={{ fontSize:{sm:'11px',xs:'11px'}}} variant="contained" onClick={hidewithdraw}>Withdraw</Button>
</div>

        </div>
        }
        

{/* 


        {response.msg ? <div style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', height: '100vh',  backgroundColor: 'rgb(23 27 38 / 85%)', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column', zIndex:'10' }}>
                  
                  
                  <Alert sx={{ backgroundColor: '#1B202E', color: 'white', padding: '20px', boxShadow: '1px 1px -2px ', display:'flex', flexDirection:'column' }} severity="success">
                    <div>{response.msg}</div>
                  <Button size='small' variant='contained' onClick={hideResponse}>OK</Button>
                  
                  </Alert>

                  
                
                </div> : <></>} */}


<Container style={{fontSize:'18px', padding:'20px 0px 20px 0px'}}>Recent Withdrawals</Container>
              <Container style={{backgroundColor:'#ffffff',padding:'20px',fontSize:'16px', display:'flex', justifyContent:'space-around', color:'grey'}}>

                <div>Name</div>
                <div>Date</div>
                <div>Amount</div>
                <div>Address</div>
                <div>status</div>
                <div>Date</div>

              </Container>

    
    </>
  
  
  
    )
}

export default Withdraw