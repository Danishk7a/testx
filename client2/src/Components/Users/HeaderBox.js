import React, { useState } from 'react'

import User6 from '@mui/icons-material/AccountCircle'


import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  IconButton,
  Button,

} from '@mui/material'
const HeaderBox = (props) => {



    const [showProfilestate, setshowProfile] = useState(0)

    const showProfile = () => {
      setshowProfile(1)
  
    }
  
    const closeProfile = () => {
  
      setshowProfile(0)
    }
  
return (
<>

{showProfilestate ? <div onClick={closeProfile} style={{ position: 'fixed', background: 'transparent', height: '100vh', width: '100%', zIndex: '789' }}>

<div style={{ background: '#f9f9f9', borderRadius: '9px', width: '200px', height: '300px', position: 'fixed', right: '40px', top: '50px' }}>

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: '', gap: '10px', paddingTop: '10px' }}>

    <div onClick={closeProfile} style={{ textAlign: 'right', paddingRight: '20px', cursor: 'pointer' }}>X</div>
    <div style={{ textAlign: 'center' }}><img src="/static/images/danish.jpeg" style={{borderRadius:'60px', border:'3px solid white'}} height={'80px'} width={'80px'}  alt="" /></div>

    <div style={{ textAlign: 'center' }}><strong>Danish Khan</strong></div>

    <div style={{ textAlign: 'center' }}>danishk7a@gmail</div>
    <hr />

    <div className='hoverClass'><Link to="/userpanel/userkyc">My Profile</Link></div>

    <div className='hoverClass'><Link to="/userpanel/wallet">Wallet</Link></div>

    <div onClick={""} className='hoverClassLogout'>Log out</div>

  </div>

</div>

</div> : <></>}




<div
          style={{
            backgroundColor: '#5661FF' ,
            color: 'white',

            width: 'auto',
            position:'sticky',
            top:'0px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // gap: { sm: '20px', xs: '10px' },
            // gap:'30px',
            padding:'20px',
            width:'100%',
            // display: { xs: 'none', sm: 'flex' },
          }}
        >

         



<div style={{color:'white', fontSize:'18px'}}>{props.title}</div>


<Box style={{ textDecoration: 'none' }}
>
<IconButton onClick={showProfile}
  sx={{ color: '#7D8794', fontSize: '16px', padding: '10px' }}
>
  {/* <AccountCircleOutlinedIcon
    sx={{ color: 'white', fontSize: '30px' }}
  /> */}

  <img src="/static/images/danish.jpeg" style={{borderRadius:'60px', border:'3px solid white'}} height={'50px'} width={'50px'} alt="" />

</IconButton>

</Box>


</div>



</>
  )
}

export default HeaderBox