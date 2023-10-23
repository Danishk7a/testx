import React, { useState } from 'react'
import Addmoney from './Addmoney'
import Showwallet from './Showwallet'
import Withdraw from './Withdraw'
import WalletBalane from './WalletBalane'
import {Button,Backdrop, Container} from '@mui/material';
import { Link , Outlet} from 'react-router-dom'

const Wallet = () => {


  return (
  <>
   
  
   <div style={{padding:'40px' , display:'flex' , alignItems:'center' , justifyContent:'center' , gap:'50px'}}>

   <Link style={{textDecoration:'none', fontSize:'16px' , color:'grey'}} to='/userpanel/wallet/addmoney'>Wallet Balance</Link>
   <Link style={{textDecoration:'none', fontSize:'16px' , color:'grey'}} to='/userpanel/wallet/withdraw'>Add Money</Link>
   <Link style={{textDecoration:'none', fontSize:'16px' , color:'grey'}} to='/userpanel/wallet/withdraw'>Withdraw</Link>
  
   </div>
  
   <Container> <Outlet /></Container>
   
   
  
 

  </>
  
   
 
    )
}

export default Wallet