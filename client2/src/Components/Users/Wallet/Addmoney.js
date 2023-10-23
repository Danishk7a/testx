import React, { useEffect, useState } from 'react'
import { Container, Box, Button, TextField, InputLabel, Select, MenuItem, Typography, Input } from '@mui/material'
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
import PaymentPannel from './PaymentPannel';
import HeaderBox from '../HeaderBox'






const Addmoney = () => {
  const [age, setAge] = React.useState('');
  const [address, setAddress] = useState(0)
  const [inputValue, setinputValue] = useState(null)


  const handleChange = (event) => {
    setAge(event.target.value);
  };













  const addmn = async () => {



    const response = await axios.post('/addrstoreact', {
      amount: inputValue,
      currency: age
    }, {
      headers: { "Authorization": " Bearer Npk11wrM5snF7ScEidhYdyTxhVEzXu2xxsLqbhiV--C3itqF76Z3obt_tF" }
    }


    )

    setAddress(response.data.msg)
    // console.log(response.data)

    console.log(inputValue)

  }

  const [PaymentPage, setPaymentPage] = useState(0)
  const openPaymentPage = () => {

    addmn();
    setPaymentPage(1)





  }
  const closePaymentPage = () => {
    setPaymentPage(0)
  }






  return (
    <>
      {/* Payment Page popup  */}
      {/* Payment Page popup  */}

      <HeaderBox title="Deposite"/>

      {PaymentPage ? <PaymentPannel closePaymentPage={closePaymentPage} inputdata={inputValue} address={address} currency={age} /> : <></>}




      {/* Payment Page popup  */}
      {/* Payment Page popup  */}






      {PaymentPage ? <></> :
        <Container sx={{ background:'#ffffff',padding: { sm: '20px', xs: '10px' }, border: '1px solid #80808017' }}>
          {/* <div style={{position:'absolute' , top:'5', right:'5'}}><ClearIcon sx={{color:'black'}} /></div> */}
          {/* <div style={{padding:'20px'}}><Typography sx={{fontSize:{sm:'25px',xs:'12px'},color:'#7D8794'}}>Add Money</Typography></div> */}

          <Container style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>

              <Select MenuProps={{
                style: {
                  backgroundColor: '#171b268c',
                },
              }} style={{ height: '27px', width: '18%', marginRight: '1px', color: '#7D8794', border: '1px solid grey', backgroundColor: 'transparent' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >

                <MenuItem  sx={{ display: 'flex', alignItems: 'center', color: 'grey' }} value={"usdt"}> <img src="https://btccrypto.exchange/api/static/images/coinimage/USDT.png" height='15px' width='15px' alt="" />&nbsp; USDT </MenuItem >

                <MenuItem  sx={{ display: 'flex', alignItems: 'center', color: 'grey' }} value={"bnb"}><img src="https://btccrypto.exchange/api/static/images/coinimage/BNB.png" height='15px' width='15px' alt="" />&nbsp; BNB</MenuItem >
                <MenuItem  sx={{ display: 'flex', alignItems: 'center', color: 'grey' }} value={"busd"}><img src="https://btccrypto.exchange/api/static/images/coinimage/BUSD.png" height='15px' width='15px' alt="" />&nbsp; BUSD</MenuItem >

              </Select>
              <Box sx={{ width: '90%' }}> <input type='number' id="amountbox" onChange={(e) => { setinputValue(e.target.value) }} style={{ background: 'transparent', margin: '10px', height: '27px', width: '100%', input: { color: "grey" }, border: '1px solid grey', padding: '10px' }} size='small' placeholder='Amount' /></Box>

            </div>
            <div></div>
            <Button size='small' sx={{ marginTop: '10px', fontSize: { sm: '14px', xs: '11px' } }} onClick={openPaymentPage}
              variant='contained'>Add Money</Button>
          </Container>

        </Container>}




                <Container style={{fontSize:'18px', padding:'20px 0px 20px 0px'}}>Recent Deposits</Container>
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

export default Addmoney