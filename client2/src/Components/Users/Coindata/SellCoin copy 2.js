import React, { useContext, useEffect } from 'react';
import { Input } from '@mui/material';
import './Css/buycoin.css'
import { useState } from 'react';
import axios from 'axios'
import { TextField , InputAdornment} from '@mui/material';
import {Container, Typography, Toolbar,IconButton, Button,Badge,Grid,Divider, Box, Slider,Alert} from '@mui/material'
import Context from '../../../hooks/useCoin';
import {Link} from 'react-router-dom';

export const SellCoin = ({coins,coinChange}) => {
    
    const context = useContext(Context)

    const [verified, setVerified] = useState(0)
    useEffect(() => {
            
          axios.get('/checkverified')
          .then(function (response) {
            
            // console.log(response);
            setVerified(response.data)
  
          })
  
  
        })
        useEffect(()=>{
        
          // avblsell();
          
           },[context])
          
  
           const [sellres, setSellres] = useState(0);



// Sellcoin function ------------------------------------------
const sell = ()=>{

  let sellamount = document.getElementById('sellamount').value ;
// console.log(sellamount)
let postData = {
  amount: sellamount,
  symbol: context.symbol,
  custom:context.custom,
  Cprice:context.Cprice,
  Price:context.Price

  
  };

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "accessToken": sessionStorage.getItem('accessToken'),
    }
  };
  

  axios.post('/sellcoin', postData, axiosConfig)
.then((res) => {

  setSellres(res.data)
  settesting2("")
  setamountBox2("")
  


})
.catch((err) => {
  // console.log("AXIOS ERROR: ", err);
})

// ------------------------------------------------------------------------------



  }
  
  
const [avblsellCoin,setavblsellCoin] = useState(0);
const avblsell = ()=>{

  axios.post('/avblsell', {symbol:context.symbol})
  .then((res) => {
  
    setavblsellCoin(res.data)
    console.log( "CONTETX SYNNPLS "+ context.symbol +"ye dekho data @@@ " + res.data.msg + 
    
      "Here is price also contegx " + context.price + 
    
      "HERE IS CPRICE ALSP " + context.Cprice)
    
      
  })
  .catch((err) => {
    // console.log("AXIOS ERROR: ", err);
  })
  

}




  
  // Sell change .....................................................................
  
  
  const hideResponse = () => {
  
    setSellres(0)
    avblsell();
}

  
  
  
  const [amountBox2 ,setamountBox2 ] = useState("Amount");
const onchangeSell = (e)=>{
    e.preventDefault()
    settesting2(e.target.value);

    if(context.custom){
      let n1 = parseFloat(e.target.value);
      let n4 = e.target.value;
      let   n2 = parseFloat(context.price);
      let   n5 = context.Cprice;
      setamountBox2((n1/n5).toFixed(4))
      return 0;
    }

   let n1 = parseFloat(e.target.value);
   let n4 = e.target.value;
   let   n2 = parseFloat(context.price);
   let   n5 = context.price;
   setamountBox2((n1/n2).toFixed(4))
   console.log("this is very big issue please fix it " + n1)
   console.log("this is very big issue please fix it " + n2)
   console.log("this is very big issue please fix it " + n4)
   console.log("this is very big issue please fix it " + n5)

      



}
  
const [slider2, setSlider2] = useState(0);
const [testing2, settesting2] = useState(0);

const sliderX2 = (e)=>{

      setSlider2(e.target.value)

    let num = parseFloat(e.target.value)
    let num2 = parseFloat(avblsellCoin.msg*context.price)
    
    let newprice = (num2*num)/100;
    
      
  settesting2(newprice)
  
  let n1 = parseFloat(newprice);
  let n4 = e.target.value;
  let   n2 = parseFloat(context.price);
  let   n5 = context.price;
  setamountBox2((n1/n2).toFixed(4))
  
  



}
  
  
  
  
// Limit Function
const [limit, setlimit] = useState(0)
const limitX = ()=>{

    

        setlimit(1)
    

}
  // Market Function
  const market = ()=>{
    setlimit(0)
  }



  
  const QuantityBox2 = (e) => {
   
    setamountBox2(e.target.value);
  
  
    
    
    if(context.custom) {
      settesting2(e.target.value * context.Cprice)
    } else {
      settesting2(e.target.value * context.price)
    }




  }
  

  
  
  
  
    return (
      <>
        <Box sx={{display:{sm:'block ',xs:'block '},backgroundColor:'',width:'50%',zIndex:'2'}}>
          
    
        {/* ===============================================Sell ======================================= */}
        {/* <div style={{paddingLeft:'30px',paddingTop:'20px' , display:'flex', gap:'10px', alignItems:'center'}}>
    <Typography>

<Link onClick={limitX} style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Limit</Link>
</Typography>

<Typography>
<Link onClick={market} style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Market</Link>
</Typography>


<Typography>
<Link style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Stop-Limit</Link>
</Typography>


       </div> */}


<div style={{display:'flex', flexDirection:'column',padding:'10px'  ,justifyContent:'',width:'100%', alignItems:'center'}}>

<div style={{width:'100%'}}>                                                                           

<input type="number" disabled  placeholder={"Token" + " " + ": " +      (context.custom?avblsellCoin.msg*1:avblsellCoin.msg*1).toFixed(3) } style={{background:'transparent',padding:'15px',width:'90%' ,margin:'10px', border:'1px solid grey'}} />
</div>
{limit? <div>

<input type="number" id="limitsellprice"  placeholder={"Price"} style={{background:'transparent',padding:'15px',width:'38ch' ,margin:'10px', border:'1px solid grey'}} />
</div>:<span></span>}
<div style={{width:'100%'}}>

<input type="number" id="sellamount" placeholder={"USD"}  value={testing2?testing2:""}   onChange={onchangeSell} style={{background:'transparent',margin:'10px',width:'90%',padding:'15px' , m:"1", border:'1px solid grey'}} />
</div>

<div style={{width:'100%'}}>

<input type="number"  onChange={QuantityBox2}  placeholder={context.symbol} value={amountBox2}  style={{background:'transparent',padding:'15px' ,margin:'10px',width:'90%', border:'1px solid grey'}} />
        </div>
       
    
  <Slider size='small'
aria-label="Temperature"
defaultValue={0} value={slider2}
getAriaValueText={""}
valueLabelDisplay="auto"
step={25}
marks onChange={sliderX2}
min={0}
max={100} color="error"
sx={{width:'85%'}}
/>

<div style={{width:'100%'}}>

{/* <Button size='small' onClick={sell} sx={{width:'52ch'}} color="error" variant="contained">Sell</Button> */}
{!limit ? <span style={{width:'100%', display:'flex', justifyContent:'center'}}><Button size='small' onClick={sell}  disabled={testing2 == 0} sx={{width:'95%',"&.Mui-disabled": {
          background: "#5a2027",
          color: "#c0c0c0"
        }}} color="error" variant="contained">{verified?'sell':'Verify yourself' }  &nbsp;{ context.symbol}</Button></span>:<span></span>}


{limit ? <span style={{width:'100%'}}> <Button size='small' sx={{width:'95%'}} color="error" variant="contained">{verified?'limit':'Verify yourself' } &nbsp;{ context.symbol}</Button></span>:<span></span>}


          {/* <div>{sellres && sellres.msg}</div> */}
          
              {sellres ? <div style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', height: '100vh', zIndex: '10', backgroundColor: 'rgb(23 27 38 / 85%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
                
                
                <Alert sx={{ backgroundColor: '#1B202E', color: 'white', padding: '20px', boxShadow: '1px 1px -2px ',display:'flex', flexDirection:'column' }} severity="success"> <div>{sellres.msg}</div>
                <Button size='small' variant='contained' onClick={hideResponse}>OK</Button>
                
                </Alert></div> : <></>}
</div>
    
    </div>    
      
      
    </Box>
      
      </>
  )
}
