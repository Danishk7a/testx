import React from 'react'
import Google2FA from './Google2FA'
import HeaderBox from './HeaderBox';
import { Box, Button } from '@mui/material'
import Security2 from '@mui/icons-material/VerifiedUser';
import XXSe from '@mui/icons-material/SecurityOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CryptoPriceList from './CryptoPriceList'
const Security = () => {
  return (
    <div>  
      
      <HeaderBox title="Setting"/>
      <CryptoPriceList/>
      
 </div>


  )
}

export default Security