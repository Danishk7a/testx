import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import SimpleLineChart from './SimpleLineChart'
import axios from 'axios'
import MobShortcuts from './MobShortcuts'
import WalletChart from './Wallet/WalletChart'
import EyeOpen from '@mui/icons-material/RemoveRedEyeOutlined'
import Eye2 from '@mui/icons-material/RemoveRedEye'
import Eye3 from '@mui/icons-material/VisibilityOff'





const FourBoxes = ({ bg }) => {



  const [walletdata, setwalletdata] = useState([])
  const [total, settotal] = useState(0)

  const [TotalAmount, setTotalAmount] = useState(0)
 const [TotalAmountBTC, setTotalAmuntBTC] = useState(0)


// Get BCEX COIN Price
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

    axios
      .get(url, config)
      .then((res) => {
        setwalletdata(res.data)
      
     
      })
      .catch((err) => console.log(err))
  }, [walletdata])



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
       
       
     
       
        TotalAmountArray.push( E.quantity * (EachCoinPrice[E.currency.toUpperCase()] === undefined ? (bcex).toFixed(3) : EachCoinPrice[E.currency.toUpperCase()].USD))



     console.log(   E.quantity * (EachCoinPrice[E.currency.toUpperCase()] === undefined ? (bcex).toFixed(3) : EachCoinPrice[E.currency.toUpperCase()].USD)
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












  const [showBal, setshowBal] = useState(1)
  const ToggleBal = () => {
    if (showBal) {
      setshowBal(0)
    } else {
      setshowBal(1)
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: '',
          gap: '20px',
          margin: { sm: '10px', xs: '0px' },
          padding: { xs: '20px' },
        }}
      >
        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#f7f7f7' : '#1C2230',
            display: { sm: 'flex', xs: 'none' },
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: '18px', xs: '16px' },
              color: 'cornflowerblue',
              paddingLeft: '',
              display: 'flex',
              alignItems: '',
              backgroundColor: '',
            }}
          >
            Estimated Balance &nbsp;
            {showBal ? (
              <Box
                sx={{ cursor: 'pointer', padding: 0, height: '1vh' }}
                onClick={ToggleBal}
              >
                <Eye2 sx={{ fontSize: '22px', color: 'grey' }} />
              </Box>
            ) : (
              <Box
                sx={{ cursor: 'pointer', padding: 0, height: '1vh' }}
                onClick={ToggleBal}
              >
                <Eye3 sx={{ fontSize: '22px', color: 'grey' }} />
              </Box>
            )}
          </Typography>
          {showBal ? (
            <Box sx={{ color: 'grey', fontSize: '20px' }}>
              {TotalAmount && TotalAmount} USDT
            </Box>
          ) : (
            <Box sx={{ color: 'grey', fontSize: '14px' }}>
            "***Balance hidden***"
          </Box>
          )}
          <Box sx={{ padding: '30px' }}>
            <SimpleLineChart bg={bg} />
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#f7f7f7' : '#1C2230',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                fontSize: { sm: '18px', xs: '16px' },
                color: 'cornflowerblue',
                paddingLeft: '',
                display: 'flex',
                justifyContent: 'flex-start',
                backgroundColor: '',
              }}
            >
              Estimated Balance &nbsp;
              {showBal ? (
                <Box
                  sx={{ cursor: 'pointer', padding: 0, height: '1vh' }}
                  onClick={ToggleBal}
                >
                  <Eye2
                    sx={{ fontSize: { sm: '22px', xs: '16px' }, color: 'grey' }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{ cursor: 'pointer', padding: 0, height: '1vh' }}
                  onClick={ToggleBal}
                >
                  <Eye3
                    sx={{ fontSize: { sm: '22px', xs: '16px' }, color: 'grey' }}
                  />
                </Box>
              )}
            </Box>
            {showBal ? (
              <Box sx={{ color: 'grey', fontSize: { sm: '20px', xs: '16px' } }}>
                {TotalAmount && TotalAmount} USDT
              </Box>
            ) : (
              <Box sx={{ color: 'grey', fontSize: '14px' }}>
                "***Balance hidden***"
              </Box>
            )}{' '}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}></Box>
          <Box sx={{ color: 'grey', fontSize: '20px', padding: '20px' }}></Box>
          <Box>
            <WalletChart />
          </Box>
        </Box>
      </Box>
      <MobShortcuts bg={bg} />
    </>
  )
}

export default FourBoxes
