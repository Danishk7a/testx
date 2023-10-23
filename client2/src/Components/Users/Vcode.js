import React, { useState } from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PasswordIcon from '@mui/icons-material/Password';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button,Checkbox , Divider } from '@mui/material';
import axios from 'axios';



export default function Vcode(props) {
 
 const [vvcode, setvvcode]=useState()

  const navivcode =  useNavigate() 

  const redirectcode =()=>{
  
    
  }
  
  


 
const Login = async ()=>{

let vcode = document.getElementById('xyzlemail').value; 



const codeData = {

  code:vcode
 
  }
 



  
 
   const response = await axios.post('/verifyuser',{codeData})
  setvvcode(response)
  console.log(response)

if(vvcode.status === 200){
  
  navivcode('/userpanel/userdashboard')
  
    
  
  }
  







}

// -----------------------------------------------handle Changes-------------------------------------------------------z




  return (
  
  
    <>
    <div className="Registration">
        
        
        
        
       
        <div className="regbox0" style={{flexDirection:'column'}}>

      
           <div className="img">

               
              </div>

       <div className="regbox1">

           
          
         
           <div className="heading" style={{color:'#5661FF'}}>Verify</div>
          
           <div id="regbox">
                   
                     
               <div className="aligndiv">
               <p style={{lineHeight:3 , fontSize:'13px' , color:'#5E5E5E'}}>We've Sent the Code to your Email address.{props.email}</p>
               <TextField 
        id="xyzlemail" fullWidth placeholder='Code' margin='dense' 
        label="Email" size="small" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon style={{color:'#30CFD0'}} />
            </InputAdornment>
          ),type:"number"
        }}variant="outlined"/>
 </div>

               <Button sx={{m:1}} variant="outlined" onClick={Login} style={{backgroundColor:'#5661FF', color:'white'}} endIcon={<KeyboardArrowRightOutlinedIcon />}>Submit</Button>
               <Button sx={{m:1}} variant="outlined" onClick={props.register} style={{backgroundColor:'#5661FF', color:'white'}}  >Resend</Button>

           </div>
       </div>

   </div>  
<Divider></Divider>

</div>

    </>




  )
}
