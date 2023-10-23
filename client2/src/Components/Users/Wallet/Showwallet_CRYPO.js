import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CSS/WalletNew.css'
import HeaderBox from '../HeaderBox'
import { Link, Outlet } from 'react-router-dom'
import { Typography, Button, Box, Container } from '@mui/material'
import Loading from '../../Loading'
import LockIcon from '@mui/icons-material/Lock';
const Showwallet = () => {

  const [walletdata, setwalletdata] = useState(0)
  const [total, settotal] = useState(0)

  const [TotalAmount, setTotalAmount] = useState(0)
  const [TotalAmountBTC, setTotalAmuntBTC] = useState(0)


  const [bcex, setbcex] = useState(0)
  useEffect(() => {

    const BCEX = async () => {


      const bcexcoin = await axios.get('/bcexprice');
      setbcex(bcexcoin.data)
      // console.log("this is Per BCEX Token " + bcexcoin.data)

    }
    BCEX()
  }, [])


  useEffect(() => {
    const config = {
      headers: {
        accessToken: sessionStorage.getItem('accessToken'),
      },
    }

    const url = '/showwallet'

    axios.get(url, config).then((res) => {
      setwalletdata(res.data)
      let totalbal = 0
      res.data.forEach((item) => {
        totalbal += item.quantity
      })
      settotal(totalbal)
    })
  }, [])

  const [EachCoinPrice, setEachCoinPrice] = useState(0)
  let currency = []






  useEffect(() => {


    if (Array.isArray(walletdata.msg)) {
      for (let x of walletdata.msg) {
        console.log(x.currency)
        currency.push(x.currency)
      }
      let StrCurrency = currency.toString()
      console.log(
        'this is string test ' +
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${StrCurrency.toUpperCase()}&tsyms=USD
`
      )

      async function fetchData() {


        const response = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${StrCurrency.toUpperCase()}&tsyms=USD
        `);

        console.log(response.data)
        setEachCoinPrice(response.data)

        console.log("Wallet Data is hERE ! " + walletdata.msg)
        console.log("Each Coin Price  is HERE ! " + EachCoinPrice)





      }

      fetchData();



      // console.log('this is each coin price' + EachCoinPrice.BTC.USD)






    }

  }, [walletdata])








  useEffect(() => {

    if (EachCoinPrice && Array.isArray(walletdata.msg)) {



      for (let e of walletdata.msg) {

        let symbol = e.currency.toUpperCase();

        // console.log(` ${symbol} ye jo haina ye wo hai complete ${e.currency}  ${e.quantity} space h Each coin :   ${(EachCoinPrice[e.currency.toUpperCase()] === undefined ? EachCoinPrice[symbol] : EachCoinPrice[symbol].USD)} `)

        // console.log(walletdata.msg)
        // console.log(EachCoinPrice)

      }


      // console.log(EachCoinPrice['BTC'].USD)
      let TotalAmountArray = []
      let total_sum = 0
      walletdata.msg.map((E) => {




        // TotalAmountArray.push(E.quantity * (EachCoinPrice[E.currency.toUpperCase()] === undefined ? (E.quantity * bcex).toFixed(3) : EachCoinPrice[E.currency.toUpperCase()].USD))


        TotalAmountArray.push(E.quantity * (EachCoinPrice[E.currency.toUpperCase()] === undefined ? (bcex).toFixed(3) : EachCoinPrice[E.currency.toUpperCase()].USD))



        console.log(E.quantity * (EachCoinPrice[E.currency.toUpperCase()] === undefined ? (bcex).toFixed(3) : EachCoinPrice[E.currency.toUpperCase()].USD)
        )
      })

      console.log(TotalAmountArray)





      for (let i in TotalAmountArray) {

        total_sum += TotalAmountArray[i]
      }

      console.log(total_sum)

      setTotalAmount(total_sum.toFixed(5))
      // setTotalAmuntBTC((total_sum/EachCoinPrice.['BTC'].USD).toFixed(8))



    }
  }, [EachCoinPrice])


  // console.log(" Single CR PR " + EachCoinPrice[0] )
  // console.log(" Wallet Data Fetch request " + walletdata[0] )




  return (
    <>

<HeaderBox title="Wallet"/>
      {/* <Box>    <div
        style={{
          padding: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          gap: '50px',
        }}
      >
        <Box
          sx={{
            '&:active': { color: 'red' },
            '&:hover': { color: 'green' },
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              fontSize: '12px',
              color: 'grey',
            }}
            to="/userpanel/wallet"
          >
            Wallet Balance
          </Link>
        </Box>
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '12px',
            color: 'grey',
          }}
          to="/userpanel/wallet/addmoney"
        >
          Add Money
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '12px',
            color: 'grey',
          }}
          to="/userpanel/wallet/withdraw"
        >
          Withdraw
        </Link>
      </div>

        <Container>
          {' '}
          <Outlet />
        </Container></Box> */}

      {Array.isArray(walletdata.msg) ? (
        <Box style={{ padding: '20px', background: '', height: '60vh', overflowY: 'scroll' }}>



          {walletdata &&
            walletdata.msg.map((ele) => {
              return (
                <div id='walletBox'

                >
                  {/* {ele.type== 'credit'? :} */}

                  <div id="walletRow">
                    <div id="img" style={{ width: '20%' }}>
                      <img
                        src={`/static/images/coinimage/${ele.currency.toUpperCase()}.png`}
                        alt=""
                        height="40px"
                        width="40px"
                      />
                    </div>


                    <div id="secondBox">
                      <Box id="symbol"
                      // sx={{
                      //   color: '#7D8794',
                      //   fontSize: { sm: '13px', xs: '10px' },
                      //   width: '30%',
                      // }}
                      >
                        {ele.currency.toUpperCase()}
                      </Box>

                      <Box id="name"
                      // sx={{
                      //   color: '#7D8794',
                      //   fontSize: { sm: '13px', xs: '10px' },
                      //   width: '30%',
                      // }}
                      >
                        {/* {ele.quantity}&nbsp;{ele.currency.toUpperCase()} */}
                        {"etherium"}
                      </Box>

                    </div>



                    <div id="thirdbox">
                      <div id="quantity"
                      // sx={{
                      //   color: '#7D8794',
                      //   fontSize: { sm: '13px', xs: '10px' },
                      //   width: '30%',
                      // }}
                      >
                        {ele.quantity}

                        {/* $ &nbsp; {ele.quantity * (EachCoinPrice[ele.currency.toUpperCase()] === undefined ?  bcex: EachCoinPrice[ele.currency.toUpperCase()].USD)} */}


                        {/* {EachCoinPrice[ele.currency.toUpperCase()] === undefined ?  "this is quantity of bcex " + ele.quantity * bcex:"ele.quantity"} */}
                      </div>




                      <div id="price">
                        <div style={{ display: 'flex', alignItems: 'center', fontWeight: '600', color: '#808080' }}>
                          <LockIcon sx={{ fontSize: '11px' }} /> &nbsp;
                          ${(ele.quantity * (EachCoinPrice[ele.currency.toUpperCase()] === undefined ? bcex : EachCoinPrice[ele.currency.toUpperCase()].USD)).toFixed(2)}

                        </div>



                      </div>



                    </div>

                    {/* <div><img src= alt="" /></div> */}
                  </div>
                </div>
              )
            })}
        </Box>
      ) : (
        walletdata.msg === 4 ?

          <Box sx={{ marginTop: '20px', backgroundColor: 'transparent' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '20px',
                backgroundColor: '#1B202E',
                color: 'grey',
                position: 'scroll',
                top: '20px',
              }}
            >
              <div style={{ width: '' }}>Coin</div>
              <div style={{ width: '' }}>Price</div>
              <div style={{ width: '' }}>Amount</div>
              <div style={{ width: '' }}>Type</div>
              <div style={{ width: '' }}>Date</div>

            </div>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey', padding: '20px', backgroundColor: '#1a1f2a' }}> Nothing to show</Box>

            <Box sx={{ height: '100vh', backgroundColor: 'transparent' }}></Box>
          </Box>

          : <Loading />
      )}
    </>
  )
}

export default Showwallet
