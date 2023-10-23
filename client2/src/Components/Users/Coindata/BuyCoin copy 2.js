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
      amount: buyamount,
      symbol: context.symbol,
      custom: context.custom,
      Cprice: context.Cprice,
      Price: context.Price,
      backCoin: backCoin,
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










      <Box className="coin" sx={{ display: { sm: 'block ', xs: 'block ' }, backgroundColor: '', width: '50%', zIndex: '2' }}>

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





        <Box sx={{ display: 'flex', gap: '20px', justifyContent: '', alignItems: 'center', padding: '10px', width: '100%' }}>


          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', width: '100%' }}>


              <div style={{ width: '100%' }}>

                <input type="number" disabled placeholder={"USD" + " " + ": " + (avblCoin.msg == undefined ? 'Log in ' : " " + avblCoin.msg)} style={{ background: 'transparent', padding: '15px', width: '80%', margin: '10px', border: (color == '#ffffff' ? '1px solid #E7E7E8' : '1px solid grey') }} />
                <span>USD </span>
              </div>

              {limit ? <div style={{ width: '100%' }}>

                <input type="number" id="limitprice" placeholder={"Price"} style={{ background: 'transparent', padding: '15px', width: '90%', margin: '10px', border: (color == '#ffffff' ? '1px solid #E7E7E8' : '1px solid grey') }} />

              </div> : <span></span>}

              <div style={{ width: '100%' }}>

                <input type="number" min="1" max='2400' onwheel="this.blur()" id="buyamount" value={testing ? testing : ""} onChange={onchangeBuy} placeholder={"USD"} style={{ background: 'transparent', padding: '15px', width: '80%', margin: '10px', border: (color == '#ffffff' ? '1px solid #E7E7E8' : '1px solid grey') }} /><span>{"USD"} </span>
              </div>

              <div style={{ width: '100%' }}>

                <input type="number" onChange={QuantityBox} value={amountBox} placeholder={context.symbol} style={{ background: 'transparent', margin: '10px', padding: '15px', width: '80%', border: '1px solid grey' }} /><span>{context.symbol} </span>
              </div>


              <Slider size='small'
                aria-label="Temperature"
                defaultValue={0}
                value={slider}
                getAriaValueText={""}
                valueLabelDisplay="auto"
                step={25} onChange={sliderX}
                marks
                min={0}
                max={100} color="success"
                sx={{ width: '85%' }}
              />
              <div style={{ width: '100%' }}>



                {!limit ? <span style={{ width: '100%' }}><Button size='small' disabled={testing == 0} onClick={buy} sx={{
                  width: '95%', "&.Mui-disabled": {
                    background: "#1e3d29",
                    color: "#c0c0c0",
                    width: '95%',
                  }
                }} color="success" variant="contained">{verified ? 'Buy' : 'Verify yourself'} &nbsp;{context.symbol}</Button></span> : <span></span>}


                {limit ? <span style={{ width: '100%' }}> <Button size='small' onClick={buyLimit} sx={{ width: '95%' }} color="success" variant="contained">{verified ? "Limit" : 'Verify yourself'} &nbsp;{context.symbol}</Button></span> : <span></span>}


                {/* <div>{buyres? <div style={{color:'grey',fontSize:'14px'}}>{buyres.msg}</div>:<div></div>}</div> */}
                {buyres ? <div style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', height: '100vh', backgroundColor: 'rgb(23 27 38 / 85%)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', zIndex: '10' }}>


                  <Alert sx={{ backgroundColor: '#1B202E', color: 'white', padding: '20px', boxShadow: '1px 1px -2px ', display: 'flex', flexDirection: 'column' }} severity="success">
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