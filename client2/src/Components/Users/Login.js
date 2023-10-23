import React, { useState , useReducer} from 'react';
// import './css/Login.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button,Checkbox , Divider } from '@mui/material';
import Header from '../Home/Header'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Security from '@mui/icons-material/VerifiedUser';
import { Link } from 'react-router-dom';
import Context from '../../hooks/useTheme';
export default function Login() {
 
  const reducer = (state, action) => {

    switch(action.type){

        case "update":
            return action.payload
        default:
            throw new Error()
    }


}

const [state,dispatcher] = useReducer(reducer,{color:'#171B26'})


  const [logined, setlogined] = useState({})
 
  const navilogin =  useNavigate() 

  const redirectlogin =()=>{
  
    navilogin('/userpanel/userdashboard')
  }
  
  if(logined.status === 200){
  

    redirectlogin();

    
  
  } if (logined.status === 700) {
    
    navilogin('/vcode')
  }
  


  
const Login = ()=>{

let email = document.getElementById('xyzlemail').value; 
let pass = document.getElementById('xyzlpass').value; 


const loginData = {

  email:email,
  password:pass,
  }
 


// fetch('https://btccrypto.exchange/api/login', {
fetch('/login', {
  method: 'POST',
  body:JSON.stringify(loginData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }, 
})
  .then((response) => response.json())
  .then((json) => { 
    setlogined(json)
    sessionStorage.setItem("accessToken",json.accesstoken) });





}

// -----------------------------------------------handle Changes-------------------------------------------------------
const handleChangeEmail = (e) =>{

 
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(e.target.value.match(mailformat))
{
// console.log("Valid email address!");

}
else
{
// console.log("You have entered an invalid email address!");

}









}




  return (
  
  
    <>
      
    <Context.Provider value={{
      color:state.color,
      dispatcher : dispatcher
  }}>
      <Box sx={{ overflow: 'hidden' }}>
      <Header />
      <Box sx={{ display: 'flex', height: '4vh', color: 'grey', fontSize: '11px', justifyContent:'center', alignItems:'center', backgroundColor:''}}>
        <Box sx={{display:'flex', alignItems:'center'}}><Security sx={{color:'#5661FF', fontSize:'16px'}} />&nbsp;Official website: https://btccrypto.exchange/</Box>
 
      </Box>
    <Box className="Registration" sx={{
      // background:`url("/static/images/reg.jpg")`,
      backgroundSize:'cover',height:'80vh',backgroundPosition:'center',padding:{xs:'20px'}}}>
        
        
        
        
       
        <div  className="regbox0" style={{ display:'flex',gap:'20px', alignItems:'center', padding:'10px'}}>

      
           <div className="img">
   
               
              </div>

       <div className="regbox1" style={{background:'white'}}>

           
          
         
           <Box sx={{color:'grey', fontSize:{sm:'18px',xs:'16px'}, padding:'15px'}}>Login in your <span style={{color:'#5661FF'}}>BCEX Account</span></Box>
          
           <div id="regbox">
                   
                 

            
               
               <div className="aligndiv">
               <input type='mail' onChange={handleChangeEmail}
        id="xyzlemail" fullWidth placeholder='Email Address' margin='dense' 
        label="Email" size="small" style={{background:'transparent',padding:'15px',width:'33ch' ,margin:'7px', border:'1px solid grey'}}
     variant="outlined"/>
 </div>

 

<div className="aligndiv">
<input placeholder='Password' type='password'
        id="xyzlpass" fullWidth
        label="Password" size="small"
        margin='dense'
        style={{background:'transparent',padding:'15px',width:'33ch' ,margin:'7px', border:'1px solid grey'}}
       variant="outlined"/>
              </div>
             <div style={{color:'grey'}}> <FormControlLabel  control={<Checkbox   size="small" defaultChecked />} label={<Box sx={{fontSize:'10px'}}>Bind IP (Security Option)</Box>} /></div>

<div style={{display:'flex', justifyContent:'flex-end',  color:'#5661FF', cursor:'pointer', margin:'7px'}}>forgot password?</div>
               

               <Button sx={{m:1}} variant="outlined" onClick={Login} style={{backgroundColor:'#5661FF', color:'white'}} endIcon={<KeyboardArrowRightOutlinedIcon />}>Login</Button>
               {logined? <p  style={{ color:'#30CFD0', textAlign:'center', marginTop:'7px'}}>{logined.msg}</p>:<div></div>}
           </div>
          </div>
          

          <Box sx={{  display:{sm:'flex',xs:'none'}, flexDirection:'column',alignItems:'center',gap:'10px',width:'500px'}}>
            <Box sx={{backgroundColor:'#f2f2f2',padding:'20px'}}><img src="/static/images/qrcode.png" height='150px' width='150px' style={{ borderRadius: '9px' }} alt="" /></Box>
            <h2 style={{color:'grey'}}>Log in with QR code</h2>
            <div style={{color:'#4D5162'}}>Scan this Code with your <span style={{color:'#5661FF', cursor:'pointer'}}>Bcex.io App</span></div>
            <div style={{color:'#4D5162'}}>Trade Anytime, Anywhere - Bcex.io</div>
          </Box>

   </div>  
<Divider></Divider>

      </Box>
      <Box sx={{position:'fixed',backgroundColor:'', bottom:'0px', height:'5vh' , width:window.innerWidth, display:'flex', justifyContent:'center', alignItems:'center', color:'grey'}}><Security sx={{color:'#5661FF', fontSize:'16px'}} />&nbsp;Secured by Google</Box>
</Box></Context.Provider>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
{/*    
   
<div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Sign In</span>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="text-right">
              <Link to="/reset">Forgot Password?</Link>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
          <h2>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </h2>
        </div>
      </div>
   
   
    */}
   
    </>




  )
}
