import React,{useState, useEffect} from 'react'
import { Box } from '@mui/material'
import axios from 'axios'
const TwoBoxes = ({ bg }) => {
  
  
  // BOX 1
  
  const [Data, setData] = useState(0)
  useEffect(() => {
  


    const getinoutdata = async () => {
      
      const result = await axios.get('/getinout')
      
      
      
      setData(result.data.msg)

      console.log(result.data)
      

    }


getinoutdata()


},[])  
  
  
  
  
  
  




  // BOX 2




  const [Data2, setData2] = useState(0)
  useEffect(() => {
  


    const getinoutdata2 = async () => {
      
      const result2 = await axios.get('/getout')
      
      
      
      setData2(result2.data.msg)

      console.log(result2.data)
      

    }


    getinoutdata2()


},[])  
  
  








  // BOX 3

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






  // Box 4
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <>
      <Box
        sx={{
          display: { sm: 'flex', xs: 'none' },
          justifyContent: '',
          gap: '20px',
          padding: { xs: '20px' },
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
        }}
      >
        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#321fdb' : '#1C2230',
            display: 'flex',
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '9px',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: (bg == '#ffffff'?'#ffffff':'cornflowerblue'),
              fontSize: '16px',
              paddingBottom: '10px',
            }}
          >
            {' '}
            Total Desposit
          </Box>
          <Box sx={{ color: (bg == '#ffffff'? '#ffffff':'grey'), fontSize: '16px' }}>  {Data && Data}</Box>
        </Box>

        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#3399ff' : '#1C2230',
            display: 'flex',
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '9px',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: (bg == '#ffffff'?'#ffffff':'cornflowerblue'),
              fontSize: '16px',
              paddingBottom: '10px',
            }}
          >
            {' '}
            Total Withdraw
          </Box>
          <Box sx={{ color: (bg == '#ffffff'? '#ffffff':'grey'), fontSize: '16px' }}> {Data2 && Data2}</Box>
        </Box>

        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#f9b116' : '#1C2230',
            display: 'flex',
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '9px',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: (bg == '#ffffff'?'#ffffff':'cornflowerblue'),
              fontSize: '16px',
              paddingBottom: '10px',
            }}
          >
            {' '}
            Total Balance
          </Box>
          <Box sx={{ color:(bg == '#ffffff'? '#ffffff':'grey'), fontSize: '16px' }}> $ {TotalAmount && TotalAmount}   </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: bg == '#ffffff' ? '#E55352' : '#1C2230',
            display: 'flex',
            alignItems: '',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '9px',
            boxShadow: '1px 2px 9px -5px black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              color: (bg == '#ffffff'?'#ffffff':'cornflowerblue'),
              fontSize: '16px',
              paddingBottom: '10px',
            }}
          >
            {' '}
            Total Profit
          </Box>
          <Box sx={{ color: (bg == '#ffffff'? '#ffffff':'grey'), fontSize: '16px' }}> 0.00%</Box>
        </Box>
      </Box>
    </>
  )
}

export default TwoBoxes
