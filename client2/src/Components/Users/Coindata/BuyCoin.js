import React, { useContext, useEffect, useMemo } from 'react';
import { SellCoin } from './SellCoin';
import { Tabs, Tab } from 'react-bootstrap';
import './Css/buycoin.css'
import { useState } from 'react';
import axios from 'axios'
import { TextField, InputAdornment } from '@mui/material';
import { Container, Typography, Toolbar, IconButton, Button, Badge, Grid, Divider, Box, Slider, Alert } from '@mui/material'
import Context from '../../../hooks/useCoin';
import { Link } from 'react-router-dom';

function BuyCoin({ coins, coinChange, color, backCoin, coin }) {
  const context = useContext(Context)
  // console.log("BUY coin Render")

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
    // avbl();
  }



  useEffect(() => {
    if (context.symbol)
      avbl();
    // avblsell();

  }, [context])




  const [buyres, setBuyres] = useState(0);
  const [sellres, setSellres] = useState(0);





  const buy = () => {

    let buyamount = parseFloat(document.getElementById('buyamount').value)
    // console.log(buyamount)

    let postData = {
      // amount: buyamount,
      // symbol: context.symbol,
      // custom: context.custom,
      // Cprice: context.Cprice,
      // Price: context.Price,
      // backCoin: backCoin,
      // coin: coin


      amount: buyamount,
      symbol: context.symbol,
      isCustomCoin: context.custom,
      Cprice: context.Cprice,
      Price: context.Price,
      backedCoin: backCoin,
      coin: coin


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
  const buyLimit = () => {

    let buyamount = parseFloat(document.getElementById('buyamount').value)
    let limitprice = parseFloat(document.getElementById('limitprice').value)
    // console.log(buyamount)

    let postData = {
      amount: buyamount,
      symbol: context.symbol,
      custom: context.custom,
      Cprice: context.Cprice,
      Price: context.Price,
      limitprice: limitprice


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






  const [avblCoin, setavblCoin] = useState("");

  const avbl = () => {

    axios.post('/avbl', { symbol: context.symbol })
      .then((res) => {

        setavblCoin(res.data)
      })
      .catch((err) => {
        // console.log("AXIOS ERROR: ", err);
      })


  }





  const [amountBox, setamountBox] = useState("Amount");




  const onchangeBuy = (e) => {
    e.preventDefault()
    settesting(e.target.value);

    if (context.custom) {
      let n1 = parseFloat(e.target.value);
      let n4 = e.target.value;
      let n2 = parseFloat(context.price);
      let n5 = context.Cprice;
      setamountBox((n1 / n5).toFixed(4))

    }

    else {
      let n1 = parseFloat(e.target.value);
      let n4 = e.target.value;
      let n2 = parseFloat(context.price);
      let n5 = context.price;
      setamountBox((n1 / n2).toFixed(4))


    }



  }



  const [slider, setSlider] = useState(0);
  const [testing, settesting] = useState(0);

  const sliderX = (e) => {

    setSlider(e.target.value)

    let num = parseFloat(e.target.value)
    let num2 = parseFloat(avblCoin.msg)

    let newprice = (num2 * num) / 100;




    settesting(newprice)

    let n1 = parseFloat(newprice);
    let n4 = e.target.value;
    let n2 = parseFloat(context.price);
    let n5 = context.price;
    setamountBox((n1 / n2).toFixed(4))





  }






  // Limit Function
  const [limit, setlimit] = useState(0)
  const limitX = () => {



    setlimit(1)


  }
  // Market Function
  const market = () => {
    setlimit(0)
  }



  const QuantityBox = (e) => {

    const newValue = e.target.value

    setamountBox(newValue);


    if (context.custom) {
      settesting(newValue * context.Cprice)
    } else {
      settesting(newValue * context.price)
    }


  }



  return (

    <>

 



      <div id="buy">
        <div id="inputnSymbol"> <input  id='buyamount' pattern="[0-9]+" type="number" placeholder="Price" /> <span
          id="sidesymbol" class="responsive-font">USD</span>
        </div>

        <div id="inputnSymbol"> <input pattern="[0-9]+" type="number" placeholder="Amount" /> <span
          id="sidesymbol" class="responsive-font">BTC</span>
        </div>

        <div id="percentageBox">
          <span class="responsive-font" id="sidesymbol">25%</span>
          <span class="responsive-font" id="sidesymbol">50%</span>
          <span class="responsive-font" id="sidesymbol">75%</span>
          <span class="responsive-font" id="sidesymbol">100%</span>
        </div>


        <div id="marketdetailBox">

          <div class="responsive-font" id='marketdetails'>
            <div class="responsive-font">Avbl :</div>
            <div class="responsive-font"> 00.00BTC</div>
          </div>


          <div class="responsive-font" id='marketdetails'>
            <div class="responsive-font">Fee :</div>
            <div class="responsive-font"> 00.00BTC</div>
          </div>


        </div>

        <div><button onClick={buy} id="tradeBtn" class="responsive-font">Buy</button></div>

      </div>


























    </>

  )
}

export default BuyCoin