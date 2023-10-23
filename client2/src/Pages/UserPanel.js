import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import './css/UserPanel.css'



// components
import DashboardIcon from '@mui/icons-material/GridViewOutlined'
import Person4Icon from '@mui/icons-material/Person4Outlined';
import EqualizerIcon from '@mui/icons-material/SsidChartOutlined';
import RequestPageIcon from '@mui/icons-material/AssignmentOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import SecurityIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import TradeNow from '@mui/icons-material/GraphicEq'
import UserHeader from '../Components/Users/UserHeader'



// Icons
import Gridone1 from '@mui/icons-material/GridViewOutlined';
import Gridtwo2 from '@mui/icons-material/AccountCircleOutlined';
import Walletgrid from '@mui/icons-material/AccountBalanceWalletOutlined';
import InputIcon from '@mui/icons-material/Input';
import OutputIcon from '@mui/icons-material/Output';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


import EqualizerIconss from '@mui/icons-material/SsidChartOutlined';
import RequestPageIconss from '@mui/icons-material/AssignmentOutlined';
import ArticleIconss from '@mui/icons-material/ArticleOutlined';
import SecurityIconss from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonAddIconss from '@mui/icons-material/PersonAddAltOutlined';
import AccountBalanceWalletIconss from '@mui/icons-material/AccountBalanceWalletOutlined';
import PowerSettingsNewIconss from '@mui/icons-material/PowerSettingsNew'
import SsidChartIconss from '@mui/icons-material/SsidChart'
import TradeNowss from '@mui/icons-material/GraphicEq'


import {
  Container,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Grid,
} from '@mui/material'








const UserPanel = () => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;








  return (





    <>
      {/* <UserHeader /> */}





      <div style={{ display: 'flex', height: '100vh' }}>    
        {/* <header style={{ flex: '0 0 auto', backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
          Fixed Header
        </header> */}


   


        {!isMobile && (
          <div style={{ flex: '0 0 15%', background: '#ffffff', overflow: 'hidden' , flexDirection:'column' }}>

           
<Link  to="/" style={{padding:'20px', fontSize:'22px', color:'#5661ff', fontWeight:'500', textAlign:'center' , textDecoration:'none'}}> BCEX Exchange </Link>


<div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}} > <img src="/static/images/danish.jpeg" style={{borderRadius:'60px', border:'3px solid #5661ff',textAlign:'center'}} height={'90px'} width={'90px'} alt="" />
<div style={{fontSize:'16px', color:'grey', lineHeight:'3'}}>Danish Khan</div>

</div>


        <div style={{display:'flex' , justifyContent:'center'}}>  <hr  style={{width:'80%'}}/></div>
           
            <div id='menu'>



              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <Gridone1 sx={{color:'grey'}} /></div> <Link className='sidebarlogo' to="/userpanel/userdashboard">Dashboard</Link></div>




              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <Gridtwo2 sx={{color:'grey'}} /></div> <Link className='sidebarlogo' to="/userpanel/userkyc">Profile</Link></div>

              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <Walletgrid sx={{color:'grey'}}/></div>   <Link className='sidebarlogo' to="/userpanel/Wallet">Wallet</Link></div>

              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <InputIcon sx={{color:'grey'}} /></div>   <Link className='sidebarlogo' to="/userpanel/addmoney">Deposite</Link></div>

              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <OutputIcon sx={{color:'grey'}}/></div>   <Link className='sidebarlogo' to="/userpanel/withdraw">Withdraw</Link></div>

              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <EqualizerIconss  sx={{color:'grey'}}/></div> <Link className='sidebarlogo' to="/trade">Trade</Link></div>

              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <RequestPageIconss sx={{color:'grey'}}/></div> <Link className='sidebarlogo' to="/userpanel/tradehistory">History</Link></div>

    

              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <PersonAddIconss sx={{color:'grey'}}/></div> <Link className='sidebarlogo' to="/userpanel/referral">Referrals</Link></div>


              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <SettingsOutlinedIcon sx={{color:'grey'}}/></div> <Link className='sidebarlogo' to="/userpanel/security">Setting</Link></div>

              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <TradeNowss  sx={{color:'grey'}}/></div> <Link className='sidebarlogo' to="/technicalanalysis">Technical Analysis</Link></div>

              <div style={{ display: 'flex', gap: '', alignItems: 'center', padding: '10px' }}> <div> <PowerSettingsNewIcon sx={{color:'grey'}}/></div> <Link className='sidebarlogo' to="/logout">Log out</Link></div>








            </div>




          </div>
        )}
        <div style={{ flex: isMobile ? '1' : 'auto', overflowY: 'auto', backgroundColor: '#f2f2f2' }}>

          <Outlet />

        </div>

      </div>







      {/* mobo=============================================================== */}
      <Box
        sx={{
          display: {
            sm: 'none',
            xs: 'flex',
            position: 'fixed',
            bottom: 0,
            height: '55px',
            width: window.innerWidth,
            zIndex: 5,
            display: 'flex',
            backgroundColor: '#f9f9f9',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: 'rgb(105 50 151) 2px 1px 2px 0px',
            padding: '10px',
            borderTop: '1px solid #E7E7E8'

          },
        }}
      >
        <Box>
          {/* <DashboardIcon style={{ color: '#5442f2' }} /> */}
          <Link
            to="/userpanel/userdashboard"
            style={{ textDecoration: 'none' }}
          >
            <IconButton
              sx={{
                color: '#7D8794',
                fontSize: '1vw',
                padding: '10px',
              }}
            >
              <div> <DashboardIcon
                sx={{ color: '#7D8794', fontSize: '20px' }}
              />
                <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> Dashboard</div> </div>
            </IconButton>
          </Link>
        </Box>

        <Box>
          <Link
            to="/userpanel/userkyc"
            style={{ textDecoration: 'none' }}
          >
            <IconButton
              sx={{
                color: '#7D8794',
                fontSize: '1vw',
                padding: '10px',
              }}
            >

              <div> <Person4Icon
                sx={{ color: '#7D8794', fontSize: '22px' }}
              />
                <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> Profile</div> </div>
            </IconButton>
          </Link>
        </Box>
        <Box>
          <Link to="/trade" style={{ textDecoration: 'none' }}>
            <IconButton
              sx={{
                color: '#7D8794',
                fontSize: '1vw',
                padding: '10px',
              }}
            >

              <div> <TradeNow
                sx={{ color: '#7D8794', fontSize: '22px' }}
              />
                <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> Trades</div> </div>

            </IconButton>
          </Link>
        </Box>
        <Box>
          <Link
            to="/userpanel/wallet"
            style={{ textDecoration: 'none' }}
          >
            <IconButton
              sx={{
                color: '#7D8794',
                fontSize: '16px',
                padding: '10px',
              }}
            >
              <div> <AccountBalanceWalletIcon
                sx={{ color: '#7D8794', fontSize: '22px' }}
              />
                <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> Wallet</div> </div>


            </IconButton>
          </Link>
        </Box>
        <Box>
          <Link
            to="/userpanel/tradehistory"
            style={{ textDecoration: 'none' }}
          >
            <IconButton
              sx={{
                color: '#7D8794',
                fontSize: '16px',
                padding: '10px',
              }}
            >

              <div> <ArticleIcon
                sx={{ color: '#7D8794', fontSize: '22px' }}
              />
                <div style={{ color: 'grey', fontSize: '9px', fontWeight: '400' }}> History</div> </div>
            </IconButton>
          </Link>
        </Box>
      </Box>




    </>



  )
}

export default UserPanel




