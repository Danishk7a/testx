import React, { useState, useEffect } from 'react';
// import '../Pages/css/UserPanel.css'
import UserHeader from '../Components/Users/UserHeader';
import {Container, Typography, Toolbar,IconButton, Button,Badge, Grid} from '@mui/material'
import {
    Link, Outlet 
  } from "react-router-dom";

const AdminPanel = () => {
  
    return (
   
        <> 
        
        
        {/* <UserHeader /> */}
      <div style={{height:'8vh' , backgroundColor:'#171B26', color:'grey'}}></div>

       <div className="">
     
      
       <Container maxWidth="xl" style={{width:'300px', backgroundColor:'green', color:'grey', height:'100vh'}}>
         
     
         
         
        <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }} className='gridcontainer'>
    
       
        <Grid item xs={12} className='gridbox'>
       
       <Link style={{textDecoration:'none', color:'grey' , fontSize:'16px',marginLeft:'10px'}} to='/admin/admindashboard'>Dashboard</Link>
       </Grid>


       <Grid item xs={12} className='gridbox'>
       
       <Link style={{textDecoration:'none', color:'grey' , fontSize:'16px',marginLeft:'10px'}} to='/admin/allusers'>All Users</Link>
       </Grid>
     

       <Grid item xs={12} className='gridbox'>
       
       <Link style={{textDecoration:'none', color:'grey' , fontSize:'16px',marginLeft:'10px'}} to='/admin/airdrop'>Airdrop</Link>
       </Grid>
     
       <Grid item xs={12} className='gridbox'>
       
       <Link style={{textDecoration:'none', color:'grey' , fontSize:'16px',marginLeft:'10px'}} to='/admin/addcoin'>List Coin</Link>
              </Grid>
              <Grid item xs={12} className='gridbox'>
       
       <Link style={{textDecoration:'none', color:'grey' , fontSize:'16px',marginLeft:'10px'}} to='/admin/addfund'>Add Fund</Link>
       </Grid>
    
    
     </Grid>
     
     
     
       </Container>
          <Container maxWidth="xl" style={{
            backgroundColor: '#171B26', color:'grey'}} >
         <Container maxWidth="lg" style={{backgroundColor:'red', color:'grey'}}>
         <Outlet />
         </Container>
      
       </Container>
       </div>
    
        
        </>
  
  
    )
}

export default AdminPanel