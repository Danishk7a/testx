import React, { useEffect, useState } from 'react'
import Facebook from '@mui/icons-material/FacebookOutlined';
import { Button, Alert, Box ,Container} from '@mui/material'
import Gift from '@mui/icons-material/CardGiftcard';
import Gift2 from '@mui/icons-material/CardGiftcardTwoTone';
import { useRef } from 'react';
import HeaderBox from './HeaderBox';
import { borderRadius } from '@mui/system';
import axios from 'axios'
const Referral = () => {

  const inputRef = useRef(null);


  const [show, setShow] = useState(0)
  const [ReferralData, setReferralData] = useState(0)
  const [Allusers, setAllusers] = useState(0)
  const [Token, setToken] = useState(0)

  useEffect(() => {

    const getAllReferrals = async () => {

      const getAllReferralsUsers = await axios.get(`/showmyreferrals`);
      setAllusers(getAllReferralsUsers.data)

      console.log("This is your Referral Data " + Allusers)

    }

    getAllReferrals()



  }, [])





  function myFunction() {

    var copyText = document.getElementById("myInput");


    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // alert("Copied the text: " + copyText.value);

    setShow(1)
    setTimeout(() => {
      setShow(0)
    }, 1000);


  }


  useEffect(() => {

    const getdata = async () => {

      const response = await axios.get(`/getreferraldata`);
      console.log(response.data)
      setReferralData(response.data)

    }

    getdata()



  }, [])




  useEffect(() => {

    const BCEXToken = async () => {

      const result = await axios.get('/showtotalreferralbonus')
      setToken(result.data.msg)



    }

    BCEXToken()

  }, [])



  return (

    <>
    <HeaderBox title="Referral Dashboard"/>



      <div style={{  display: 'flex', alignItems: 'center', paddingLeft:'30px',justifyContent: '', overflow: 'none', flexDirection: 'row', gap: '30px' , backgroundColor:'#ffffff', margin:'30px'}}>



      <div>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}} > <img src="/static/images/coinimage/BCEX.png" style={{borderRadius:'60px', border:'3px solid #5661FF',textAlign:'center'}} height={'80px'} width={'80px'} alt="" />

</div>
          <div style={{ fontSize: '10px', color: 'grey', lineHeight: 3 }}>Referral Bonus (BCEX)</div>

          <div style={{ fontSize: '18px', color: 'grey' }}>{Token && Token} BCEX</div>

        </div>



        <div style={{ display: "flex", alignItems: '', justifyContent: '', flexDirection: 'column', padding: '30px' ,backgroundColor:''}}>
         
          <div style={{ fontSize: '20px', color: 'grey', padding: '20px' }}>

            Refer and Earn Upto <span style={{ color: '#5661FF' }}> 10 BCEX Token to start trade </span>
          </div>

          <div style={{ fontSize: '14px', color: 'grey', padding: '10px', display: 'flex', flexDirection: 'column' }}>

            <input type="text" id="myInput" disabled value={ReferralData && "http://localhost:3000/registration/" + ReferralData[0].yourcode} style={{ background: 'transparent', padding: '10px', border: '1px solid #5661FF' , width:'100%'}} />

            <Button id="copy" onClick={myFunction} sx={{ background: '#5661FF', padding: '5px', color: 'white', borderRadius: '0px' }} >Copy Code</Button>


          </div>



          {/* <div style={{ display: 'flex', gap: '10px' }}>




            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="https://api.whatsapp.com/send?phone=+919810946956&text=Join BCEX using this link : https://bcex.com/newuser?!" target="_blank">
                <Button size='small' sx={{ backgroundColor: '#EA661C' }} variant="contained">WhatsApp</Button>
              </a>
            </div>


            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.facebook.com/sharer/sharer.php?" target="_blank">
                <Button size='small' sx={{ backgroundColor: '#EA661C' }} variant="contained">FaceBook</Button>
              </a>
            </div>


            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="https://t.me/mytelegramaccount" target="_blank">
                <Button size='small' sx={{ backgroundColor: '#EA661C' }} variant="contained">Telegram</Button>
              </a>
            </div>
          </div> */}



          {show ? <div style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', backgroundColor: 'rgb(23 27 38 / 85%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Alert sx={{ backgroundColor: '#1B202E', color: 'white', padding: '20px', boxShadow: '1px 1px -2px ' }} severity="success">Referral Code Copied !</Alert></div> : <></>}




        </div>


        {/* <Box
          sx={{
            fontSize: { sm: '25px', xs: '16px' },
            background: '#1B202E',
            padding: { sm: '25px', xs: '10px' }, height: '80vh',
            color: 'grey', display: 'flex', justifyContent: 'flex-start', alignItems: 'start'
          }}
        >

          <div>
            <div style={{ fontSize: '10px', color: '#a9a9a9', lineHeight: 3 }}>All Referrals</div>
            <div style={{ fontSize: '18px', color: 'White' }}> Bonus  &nbsp;Name &nbsp;Email   </div>
            {Allusers && Allusers.map((e) => {
              return <div style={{ fontSize: '18px', color: 'grey' }}> {'10 BCEX'} &nbsp; {e.name} &nbsp;{e.email}  </div>
            })}

          </div>





        </Box> */}



      </div>


      <Container style={{fontSize:'18px', padding:'20px 0px 20px 0px'}}>Recent Refferals</Container>
            
              <Container style={{backgroundColor:'#ffffff',padding:'20px',fontSize:'16px', display:'flex', justifyContent:'space-around', color:'grey'}}>

                <div>Name</div>
                <div>Email</div>
                <div>Bonus</div>
                <div>status</div>
                <div>Date</div>
                

              </Container>

              {Allusers && Allusers.map((e) => {
              return <Container style={{backgroundColor:'#ffffff',padding:'20px',fontSize:'16px', display:'flex', justifyContent:'space-around', color:'grey'}}> 

              <div>{e.name}</div>
                <div>{e.email}</div>
                <div>{"10 BCEX"}</div>
                <div>{"success"}</div>
                <div>{e.dt}</div>
                
              
              </Container>
            })}



    </>



  )
}

export default Referral