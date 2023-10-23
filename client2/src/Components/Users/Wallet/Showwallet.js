import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HeaderBox from '../HeaderBox'
import { Link, Outlet } from 'react-router-dom'
import { Typography, Button, Box, Container } from '@mui/material'
import Loading from '../../Loading'
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
      <div style={{ padding: '20px' }}>

        <HeaderBox title="Wallet"></HeaderBox>


        <div style={{ padding: '20px', color: 'black', paddingTop: '40px', background: 'white', display: 'flex' }}>

          <div>
            <div style={{ paddingBottom: '20px', fontSize: '16px' }} >Estimated Balance</div>


            <div style={{ display: 'flex' }}>
              {/* <div style={{ fontSize: '25px' }}>0.0000000 BTC </div> */}
              <div style={{ fontSize: '25px' }}> ${TotalAmount && TotalAmount} </div>
            </div>
            <div style={{ fontSize: '11px', color: '' }}>Your account does not currently have any assets, complete identity verification in order to make deposits to your account.</div>

          </div>

          <div style={{ display: 'flex', background: '', padding: '10px', width: '50%', justifyContent: 'flex-end' }}>
            <div>
              <Link to="/userpanel/addmoney" style={{
                textDecoration: 'none', background: '#5661ff', color: "white", padding: '20px', marginRight: '20px'
              }}>Deposite</Link>
            </div>

            <div>
              <Link to="/userpanel/withdraw" style={{
                textDecoration: 'none', background: '#5661ff', color: "white", padding: '20px'
              }} >Withdraw</Link>
            </div>
          </div>


        </div>

        {Array.isArray(walletdata.msg) ? (
          <Box>


            {/* ============================================================================== */}
            {/* <div style={{padding:'20px'}}><Typography sx={{fontSize:'20px',    display: 'flex',
           alignItems: 'center',
           height: '4vh' , color:'grey'}}>Wallet Balance</Typography></div> */}
            <Box sx={{ height: '2vh' }}></Box>


            <Box
              sx={{
                fontSize: { sm: '25px', xs: '16px' },
                background: 'white',
                padding: { sm: '25px', xs: '10px' },
                color: 'grey', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderBottom: '1px solid #e0e0e0'
              }}
            >


              <Box sx={{ width: '20%', color: 'black', fontSize: { sm: '14px', xs: '10px' } }}>
                Symbol
              </Box>
              <Box
                sx={{
                  color: 'black',
                  fontSize: { sm: '14px', xs: '10px' },
                  width: '30%',
                }}
              >
                Name
              </Box>

              <Box
                sx={{
                  color: 'black',
                  fontSize: { sm: '14px', xs: '10px' },
                  width: '30%',
                }}
              >
                Quantity
              </Box>



              <Box
                sx={{
                  color: 'black',
                  fontSize: { sm: '14px', xs: '10px' },
                  width: '30%',
                }}
              >
                Price (USD)
              </Box>

            </Box>

            {walletdata &&
              walletdata.msg.map((ele) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      padding: '20px',

                      borderBottom: '1px solid #e0e0e0'
                    }}
                  >
                    {/* {ele.type== 'credit'? :} */}
                    <div style={{ width: '20%' }}>
                      <img
                        src={`/static/images/coinimage/${ele.currency.toUpperCase()}.png`}
                        alt=""
                        height="30px"
                        width="30px"
                      />
                    </div>
                    <Box
                      sx={{
                        color: 'black',
                        fontSize: { sm: '13px', xs: '10px' },
                        width: '30%',
                      }}
                    >
                      {ele.currency.toUpperCase()}
                    </Box>
                    <Box
                      sx={{
                        color: 'black',
                        fontSize: { sm: '14px', xs: '10px' },
                        width: '30%',
                      }}
                    >
                      {ele.quantity}&nbsp;{ele.currency.toUpperCase()}
                    </Box>

                    <Box
                      sx={{
                        color: 'black',
                        fontSize: { sm: '14px', xs: '10px' },
                        width: '30%',
                      }}
                    >
                      <span style={{ color: 'black' }}> $</span>  {ele.quantity * (EachCoinPrice[ele.currency.toUpperCase()] === undefined ? bcex : EachCoinPrice[ele.currency.toUpperCase()].USD)}


                      {/* {EachCoinPrice[ele.currency.toUpperCase()] === undefined ?  "this is quantity of bcex " + ele.quantity * bcex:"ele.quantity"} */}
                    </Box>


                    {/* <div style={{ width: '20%' }}>
                    <Button
                      sx={{ fontSize: { sm: '13px', xs: '10px' } }}
                      size="small"
                    >
                      Widthraw
                    </Button>
                  </div> */}

                    {/* <div><img src= alt="" /></div> */}
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
      </div>
    </>
  )
}

export default Showwallet
