import React, { useContext, useEffect } from 'react';
import { SellCoin } from './SellCoin';

import './Css/buycoin.css'
import { useState } from 'react';
import axios from 'axios'
import { TextField , InputAdornment} from '@mui/material';
import {Container, Typography, Toolbar,IconButton, Button,Badge,Grid,Divider, Box, Slider,Alert} from '@mui/material'
import Context from '../../../hooks/useCoin';
import {Link} from 'react-router-dom';

function BuyCoin({coins,coinChange,color}) {
  const context = useContext(Context)
console.log("BUY coin Render")

  const [verified, setVerified] = useState(1)
  useEffect(() => {
          
        axios.get('/checkverified')
        .then(function (response) {
          
          // console.log(response); 
          setVerified(response.data)

        }) 


      })

  const hideResponse = () => {
  
    setBuyres(0)
}



 useEffect(()=>{
avbl();
// avblsell();

 },[context])

 


const [buyres, setBuyres] = useState(0);
const [sellres, setSellres] = useState(0);








 const buy = ()=>{
  
let buyamount = parseFloat(document.getElementById('buyamount').value) 
// console.log(buyamount)

let postData = {
  amount: buyamount,
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



axios.post('/pay', postData, axiosConfig)
.then((res) => {

  setBuyres(res.data)
  settesting("")
  setamountBox("")
  


})
.catch((err) => {
  // console.log("AXIOS ERROR: ", err);
})



 } 
  // Buy Limit Function =-------------------------------------------------
  const buyLimit = ()=>{
  
    let buyamount = parseFloat(document.getElementById('buyamount').value) 
    let limitprice = parseFloat(document.getElementById('limitprice').value) 
    // console.log(buyamount)
    
    let postData = {
      amount: buyamount,
      symbol: context.symbol,
      custom:context.custom,
      Cprice:context.Cprice,
      Price:context.Price,
      limitprice:limitprice
    
      
    };
    
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "accessToken": sessionStorage.getItem('accessToken'),
      }
    };
    
    
    
    axios.post('/limit', postData, axiosConfig)
    .then((res) => {
    
      // setBuyres(res.data)
    })
    .catch((err) => {
      // console.log("AXIOS ERROR: ", err);
    })
    
    
    
     } 
      


// Sellcoin function ------------------------------------------
 

const [avblCoin , setavblCoin] = useState("");

const avbl = ()=>{

  axios.post('/avbl', {symbol:context.symbol})
  .then((res) => {
  
    setavblCoin(res.data)
  })
  .catch((err) => {
    // console.log("AXIOS ERROR: ", err);
  })
  

}
const [avblsellCoin,setavblsellCoin] = useState(0);
const avblsell = ()=>{

  axios.post('/avblsell', {symbol:context.symbol})
  .then((res) => {
  
    setavblsellCoin(res.data)
  })
  .catch((err) => {
    // console.log("AXIOS ERROR: ", err);
  })
  

}





const [amountBox ,setamountBox ] = useState("Amount");
const onchangeBuy = (e)=>{
    e.preventDefault()
    settesting(e.target.value);

    if(context.custom){
      let n1 = parseFloat(e.target.value);
      let n4 = e.target.value;
      let   n2 = parseFloat(context.price);
      let   n5 = context.Cprice;
      setamountBox((n1/n5).toFixed(4))
      return 0;
    }

   let n1 = parseFloat(e.target.value);
   let n4 = e.target.value;
   let   n2 = parseFloat(context.price);
   let   n5 = context.price;
   setamountBox((n1/n2).toFixed(4))
   console.log("this is very big issue please fix it " + n1)
   console.log("this is very big issue please fix it " + n2)
   console.log("this is very big issue please fix it " + n4)
   console.log("this is very big issue please fix it " + n5)

      



}
  
const [slider, setSlider] = useState(0);
const [testing, settesting] = useState(0);

const sliderX = (e)=>{

      setSlider(e.target.value)

    let num = parseFloat(e.target.value)
    let num2 = parseFloat(avblCoin.msg)
    
  let newprice = (num2 * num) / 100;
  


      
  settesting(newprice)
  
  let n1 = parseFloat(newprice);
  let n4 = e.target.value;
  let   n2 = parseFloat(context.price);
  let   n5 = context.price;
  setamountBox((n1/n2).toFixed(4))
  
  



}

  
  // Sell change .....................................................................
  
  
  
  
  
  
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
  
  
  
  
  
  
  
  
  
  // Sell change .....................................................................
  
  

// Limit Function
const [limit, setlimit] = useState(0)
const limitX = ()=>{

    

        setlimit(1)
    

}
  // Market Function
  const market = ()=>{
    setlimit(0)
  }
   
  
  return (
   
  <>
   <Box className="coin" sx={{display:{sm:'block ',xs:'block '},backgroundColor:'', zIndex:'2'}}>

    <div style={{paddingLeft:'30px',paddingTop:'20px' , display:'flex', gap:'10px', alignItems:'center'}}>
    <Typography>

<Link onClick={limitX} style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Limit</Link>
</Typography>

<Typography>
<Link onClick={market} style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Market</Link>
</Typography>


<Typography>
<Link style={{textDecoration:'none', color:'orange' , fontSize:'13px', padding:'10px'}} to=''>Stop-Limit</Link>
</Typography>


       </div>


        
        
        
        
        
        
        
        
        
        
        <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>


<div>  
<div style={{display:'flex', flexDirection:'column' , justifyContent:'start', alignItems:'center'}}>


<div>

<input type="number" disabled  placeholder={"Avbl" + " " + ": " +(avblCoin.msg == undefined?'Log in ':"$ "+avblCoin.msg)} style={{background:'transparent',padding:'15px',width:'38ch' ,margin:'10px', border:(color =='#ffffff'? '1px solid #E7E7E8':'1px solid grey')}} />
</div>
         
         {limit? <div>

<input type="number" id="limitprice"  placeholder={"Price"} style={{background:'transparent',padding:'15px',width:'38ch' ,margin:'10px', border:(color =='#ffffff'? '1px solid #E7E7E8':'1px solid grey')}} />
</div>:<span></span>}
          
          <div>

          <input type="number" min="1" max='2400' onwheel="this.blur()" id="buyamount" value={testing?testing:""} onChange={onchangeBuy} placeholder={"Amount"} style={{background:'transparent',padding:'15px',width:'38ch' ,margin:'10px', border:(color =='#ffffff'? '1px solid #E7E7E8':'1px solid grey')}} />
          </div>

          <div>

<input type="number"  value={amountBox} placeholder={context.symbol} style={{background:'transparent',margin:'10px',padding:'15px' ,width:'38ch', border:'1px solid grey'}} />
</div>
      
    
      <Slider  size='small'
  aria-label="Temperature"
  defaultValue={0}
  value={slider}
  getAriaValueText={""}
  valueLabelDisplay="auto"
  step={25} onChange={sliderX}
  marks
  min={0}
  max={100} color="success"
  sx={{width:'40ch'}}
              />
<div>



                {!limit ? <span><Button size='small' onClick={buy} sx={{ width: '40ch' }} color="success" variant="contained">{verified?'Buy':'Verify yourself' } &nbsp;{ context.symbol}</Button></span>:<span></span>}


{limit ? <span> <Button size='small' onClick={buyLimit} sx={{width:'40ch'}} color="success" variant="contained">{verified?"Limit":'Verify yourself'} &nbsp;{ context.symbol}</Button></span>:<span></span>}


{/* <div>{buyres? <div style={{color:'grey',fontSize:'14px'}}>{buyres.msg}</div>:<div></div>}</div> */}
                {buyres ? <div style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', height: '100vh',  backgroundColor: 'rgb(23 27 38 / 85%)', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column', zIndex:'15' }}>
                  
                  
                  <Alert sx={{ backgroundColor: '#1B202E', color: 'white', padding: '20px', boxShadow: '1px 1px -2px ', display:'flex', flexDirection:'column' }} severity="success">
                    <div>{buyres.msg}</div>
                  <Button size='small' variant='contained' onClick={hideResponse}>OK</Button>
                  
                  </Alert>

                  
                
                </div> : <></>}
</div>
        
        </div>
</div>



</Box>



   



</Box>

      

























  
  </>
  
  )
}

export default BuyCoin