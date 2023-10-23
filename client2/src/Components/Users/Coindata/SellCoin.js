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
 
        


 <div id="sell">
                    <div id="inputnSymbol"> <input pattern="[0-9]+" type="number" placeholder="Price"/> <span
                            id="sidesymbol" class="responsive-font">USD</span>
                    </div>
                    <div id="inputnSymbol"> <input pattern="[0-9]+" type="number" placeholder="Amount"/> <span
                            id="sidesymbol" class="responsive-font">BTC</span>
                    </div>

                    <div id="percentageBox">
                        <span id="sidesymbol" class="responsive-font">25%</span>
                        <span id="sidesymbol" class="responsive-font">50%</span>
                        <span id="sidesymbol" class="responsive-font">75%</span>
                        <span id="sidesymbol" class="responsive-font">100%</span>
                    </div>
                    <div id="marketdetailBox">

                        <div id='marketdetails'>
                            <div class="responsive-font">Avbl :</div>
                            <div class="responsive-font"> 00.00BTC</div>
                        </div>


                        <div class="responsive-font" id='marketdetails'>
                            <div class="responsive-font">Fee :</div>
                            <div class="responsive-font"> 00.00BTC</div>
                        </div>


                    </div>


                    <div><button id="tradeBtn2" class="responsive-font">Sell</button></div>

                </div>




      
      </>
  )
}
