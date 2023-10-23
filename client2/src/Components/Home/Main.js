import React, { useEffect } from 'react'
import { Container, Typography, Toolbar, IconButton, Button, Badge, Box, Item } from '@mui/material'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { fontWeight } from '@mui/system';
import CoinDatah from './CoinData/CoinDatah'
import SecurityIcon from '@mui/icons-material/Security';
import TaskIcon from '@mui/icons-material/Task';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import LaptopIcon from '@mui/icons-material/Laptop';
import WindowIcon from '@mui/icons-material/Window';

import WebhookIcon from '@mui/icons-material/Webhook';
import CoinData from '../Users/Coindata/CoinData';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';



const Main = (props) => {

  const texts = ['can trade directly with each other.', 'can Hold upto 350 Currencies', 'can instantly withdraw their money', 'and alot more '];

  const imgStyle = {
    height: "200px",
    transition: "height 0.5s ease",

    height: '350px', width: '350px', transition: '0.5',
    filter: ' drop-shadow(30px 10px 6px #4444dd)',
    transition: '0.5s',



  };


  const imgStyle2 = {
    height: "200px",
    transition: "height 0.5s ease",

    height: '350px', width: '350px', transition: '0.5',
    filter: ' drop-shadow(2px 9px 10px #4444dd)',
    transition: '0.5s',
    transform: "translateX(30px)"


  };


  const handleMouseOver = (event) => {
    event.target.style.transform = 'rotate(15deg)'
    event.target.style.transform = "translateY(-30px) rotate(-10deg)"
  };

  const handleMouseOver2 = (event) => {

    event.target.style.transform = "translateX(50px) "
  };

  const handleMouseOut = (event) => {
    event.target.style.transform = 'rotate(0deg) '





  };

  const handleMouseOut2 = (event) => {
    event.target.style.transform = "translateX(0px) "





  };









  return (
    <>
      <Box sx={{ backgroundColor: (props.color == '#ffffff' ? '#171b26' : 'white'), width: window.innerWidth, overflow: 'hidden' }}>
        <Box sx={{ height: { xs: '100vh', sm: '100vh' }, backgroundColor: (props.color === '#171B26' ? '#f2f2f2' : '#171B26'), padding: '20px' }}>

          <div style={{ backgroundColor: '' }}>
            <Container sx={{ backgroundColor: '', padding: '20px' }}>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: { xs: '60vh', sm: '100vh' }, alignItems: 'center', justifyContent: 'center', padding: '20px' }}>


                <Box sx={{ fontSize: { xs: '42px', sm: '80px' }, color: (props.color === '#171B26' ? 'grey' : 'white'), fontWeight: '900', fontFamily: 'roboto' }}>Buy & Sell Instantly And

                  <Box sx={{
                    fontSize: { xs: '42px', sm: '80px' }, color: 'white', fontWeight: '900', fontFamily: 'roboto', background: 'linear-gradient(to right,  #1B42FE, #EF0F4B)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'slide 1s linear infinite',
                  }}> Hold Crypto Coins</Box>




                  <Box sx={{ fontSize: { xs: '13px', sm: '16px' }, wordSpacing: '4', color: 'grey', fontWeight: '100', display: 'flex', gap: '2px', }}>BCEX Exchange is such a marketplace where people can hold upto 350+ Cryptocurrency
                  </Box>


                  <Button size='large' sx={{ backgroundColor: '#4239DE' }} variant='contained'>Explore</Button>


                </Box>

                {/* <img src='/static/images/header.png'></img> */}
                <Box>
                  <Box sx={{display:{sm:'block',xs:'none'}, cursor: 'pointer', padding: '70px', background: `url('https://btccrypto.exchange/api/static/images/laptop.png')` }} >
                    <img

                      style={imgStyle}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      onLoad={handleMouseOver}


                      src='https://btccrypto.exchange/api/static/images/rocket.png' ></img></Box>


                </Box>



              </Box>
            </Container>

            <div>

            </div>


          </div>



        </Box>

        <Box sx={{ padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: (props.color == '#ffffff' ? 'rgb(17, 20, 28)' : '#ffffff') }}>


          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>


            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="https://btccrypto.exchange/api/static/images/vox2/1.png" height='150px' width='300px' alt="" />
            </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="https://btccrypto.exchange/api/static/images/vox2/2.jpg" height='150px' width='300px' alt="" />
            </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="https://btccrypto.exchange/api/static/images/vox2/3.png" height='150px' width='300px' alt="" />
            </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="https://btccrypto.exchange/api/static/images/vox2/4.png" height='150px' width='300px' alt="" />
            </div>


          </div>


        </Box>









        <Container sx={{ backgroundColor: (props.color == '#ffffff' ? '#171b26' : 'white') }}>

          {/* <Container sx={{display:'flex' , alignItems:'center' , paddingTop:'100px'}}>

    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'' , gap:'20px'}}>
    <div style={{fontSize:'52px' , color:'#2A2A2D' , fontWeight:'900' , fontFamily:'Verdana'}}>Buy & Sell Instantly And Hold Cryptocurrency</div>
   
    <div style={{fontSize:'14px' ,color:'grey'}}>BCEX Exchange is such a marketplace where people can trade directly with each other.</div>
    <div><Button sx={{padding:'15px' , backgroundColor:'orange'}} variant='contained'>Register Now</Button></div>

    </Box>
    <Box>

      <img src="https://btccrypto.exchange/api/static/images/banner3.png" height="400px" width="400px"></img>



    </Box>
    </Container> */}
          {/* 
      <Box sx={{ display:'flex' , gap:'20px' , paddingTop:'80px'}}>

          <div><img src="https://btccrypto.exchange/api/static/images/vox/1.png" height="170px" width="300px" alt="" /></div>
          <div><img src="https://btccrypto.exchange/api/static/images/vox/2.jpg" height="170px" width="300px" alt="" /></div>
          <div><img src="https://btccrypto.exchange/api/static/images/vox/3.png" height="170px" width="300px" alt="" /></div>
          <div><img src="https://btccrypto.exchange/api/static/images/vox/4.png" height="170px" width="300px" alt="" /></div>
          </Box> */}




          <Box sx={{ paddingTop: '50px', paddingBottom: '50px', fontSize: '32px', color: 'grey', fontWeight: '600', textAlign: 'center', fontFamily: 'roboto' }}>Market Trend</Box>


          <Container style={{ paddingBottom: '40px' }}>
            <CoinDatah mainbg={props.color}></CoinDatah>
            {/* <CoinData on={0}></CoinData> */}
            {/* <CoinData on={1}></CoinData> */}

          </Container>






          {/* =====================================================end */}
        </Container>


        <Box sx={{ padding: { sm: '60px', xs: '10px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: (props.color == '#ffffff' ? 'rgb(17, 20, 28)' : '#F2F2F2'), flexDirection: { xs: 'column', sm: 'row' } }}>

          <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
            <h2 style={{
              fontSize: '35px', fontWeight: '600', paddingBottom: '30px', background: 'linear-gradient(to right,  #1B42FE, #EF0F4B)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'slide 1s linear infinite',
            }}>Welcome to BCEX </h2>
            <p style={{ color: 'grey', fontSize: '16px', fontWeight: '100', lineHeight: '2', wordSpacing: '4' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vel non ipsum harum iusto vero vitae consequatur, mollitia placeat! Inventore porro iusto nobis nesciunt, commodi unde fugiat illo officiis vero excepturi molestiae, autem deleniti cumque illum obcaecati voluptatibus repellendus ipsam suscipit vitae corporis eveniet sapiente!
            </p>


          </Box>
          <Box ><img style={imgStyle2} onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver2} src="https://btccrypto.exchange/api/static/images/frontpc.png" alt="" /></Box>

        </Box>





        <Box sx={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: (props.color == '#ffffff' ? '#171b26' : 'white') }}>



          <Box sx={{ padding: { sm: '60px', xs: '10px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: (props.color == '#ffffff' ? '#171b26' : 'white'), flexDirection: { xs: 'column', sm: 'row' } }}>

            <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
              {/* <h2 style={{
                fontSize: '35px', fontWeight: '600', paddingBottom: '30px', background: 'linear-gradient(to right,  #1B42FE, #EF0F4B)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'slide 1s linear infinite',
              }}>Welcome to BCEX </h2> */}



              <Box sx={{ padding: {sm:'40px',xs:'10px'} }}>


                <p style={{ color: 'grey', fontSize: '16px', fontWeight: '100', lineHeight: '2', wordSpacing: '4' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vel non ipsum harum iusto vero vitae consequatur, mollitia placeat! Inventore porro iusto nobis nesciunt, commodi unde fugiat illo officiis vero excepturi molestiae, autem deleniti cumque illum obcaecati voluptatibus repellendus ipsam suscipit vitae corporis eveniet sapiente!
                </p>

                <Box sx={{ width: '23%' }}></Box>

              </Box>








            </Box>

            <Box >


              <Box sx={{ display: { sm: 'flex', xs: 'none' }, flexDirection: 'column', gap: '40px', padding: '30px', alignItems: '', width: '500px', backgroundColor: '' }}>

                <Box sx={{ backgroundColor: (props.color == '#ffffff' ? '#1F2433' : '#f2f2f2'), borderRadius: '9px', display: 'flex', gap: '10px', padding: '20px' }}>
                  {/* <Icon1 sx={{ fill: '#3C6AF8', stroke: '', fontSize: '42px' }} /> */}
                  <img src='https://btccrypto.exchange/api/static/images/gift.png' height='50px' width='50px' />

                  &nbsp; <Box>
                    <Box sx={{ fontSize: '16px', color: props.color, marginBottom: '10px' }}>Win up to $100 in Welcome Rewards</Box>
                    <Box sx={{ color: '#4D4E59' }}>Complete Beginner Tasks & Win Awesome Prize</Box></Box>
                </Box>
                <Box sx={{ backgroundColor: (props.color == '#ffffff' ? '#1F2433' : '#f2f2f2'), borderRadius: '9px', display: 'flex', gap: '10px', padding: '20px' }}>
                  <img src='https://btccrypto.exchange/api/static/images/invite.png' height='50px' width='50px' />
                  {/* <Icon2 sx={{ fill: 'orange', stroke: '', fontSize: '42px' }} /> */}
                  &nbsp; <Box >
                    <Box sx={{ fontSize: '16px', color: props.color, marginBottom: '10px' }}>Invite Friends and Earn Rewards
                    </Box>
                    <Box sx={{ color: '#4D4E59' }}>Get trading fee discount and up to 40% commission with your friends
                    </Box></Box>
                </Box>
                <Box sx={{ backgroundColor: (props.color == '#ffffff' ? '#1F2433' : '#f2f2f2'), borderRadius: '9px', display: 'flex', gap: '10px', padding: '20px' }}>
                  <img src='https://btccrypto.exchange/api/static/images/reward.png' height='50px' width='50px' />
                  {/* <Icon3 sx={{ fill: '#F4C184', stroke: '', fontSize: '42px' }} /> */}
                  &nbsp; <Box>
                    <Box sx={{ fontSize: '16px', color: props.color, marginBottom: '10px' }}>Enjoy $5,000,000+ Prize Pools</Box>
                    <Box sx={{ color: '#4D4E59' }}>Participate in Activities to Win Mega Rewards</Box></Box>
                </Box>



              </Box>








            </Box>

          </Box>


        </Box>


        <Box sx={{ padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: (props.color == '#ffffff' ? 'rgb(17, 20, 28)' : '#f2f2f2') }}>


          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>


            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="https://btccrypto.exchange/api/static/images/vox2/1.png" height='150px' width='300px' alt="" />
            </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="https://btccrypto.exchange/api/static/images/vox2/2.jpg" height='150px' width='300px' alt="" />
            </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="https://btccrypto.exchange/api/static/images/vox2/3.png" height='150px' width='300px' alt="" />
            </div>
            <div style={{ width: '300px', height: '150px', backgroundColor: '', flexGrow: '1' }}>
              <img src="https://btccrypto.exchange/api/static/images/vox2/4.png" height='150px' width='300px' alt="" />
            </div>


          </div>


        </Box>



        {/* <Box sx={{backgroundColor:'#f9f2f2', border:'1px solid green'}}>
            
            <Box sx={{paddingTop:{sm:'50px',xs:'20px'},paddingBottom:{sm:'50px',xs:'20px'},fontSize:{sm:'32px',xs:'22px'}, color:'#2A2A2D',fontWeight:'800'}}>Trade Anywhere</Box>
            
            
          <Box sx={{display:'flex', justifyContent:'center', width:window.innerWidth}}>  <Box sx={{display:'flex',flexDirection:{xs:'column', sm:'row'}, alignItems:'center',backgroundColor:'#f2f2f2'}}>
           
           <div style={{ width: "50%" }}><img src="/static/images/trades.png" width="300px" height="300px" alt="" /></div>
          
          
           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: {sm:'500px',xs:'200px'}, flexDirection: 'column' }}>
           
           <Box sx={{height:{sm:'10vh',xs:'6vh'}}} >
           
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><AppleIcon/>&nbsp;Apple</IconButton>
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><GoogleIcon/>&nbsp;Google Play</IconButton>
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><LaptopIcon/>&nbsp;Mac Os</IconButton>
           </Box>
           
           <Box sx={{height:{sm:'10vh',xs:'6vh'}}} >
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><WindowIcon/>&nbsp;Windows</IconButton>
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><FlutterDashOutlinedIcon/>&nbsp; Linux</IconButton>
           <IconButton sx={{color:'#2A2A2D' , fontSize:{sm:'16px', xs:'12px'} , padding:'10px'}}><WebhookIcon/>&nbsp;APIs</IconButton>
           </Box>
           
           </Box>
           </Box></Box>
            </Box> */}

      </Box>
    </>

  )
}

export default Main