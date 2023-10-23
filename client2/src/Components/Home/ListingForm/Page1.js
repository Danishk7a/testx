import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button, Box } from '@mui/material'
import UserHeader from '../../Users/UserHeader'
const Page1 = () => {
    const navigate = useNavigate()
    
    
    const Next = () => {
        navigate('/reqcall/page2')
      

  }
  
  
    return (
       <> <UserHeader/>
    <div style={{height:'90vh' , backgroundColor:'#171B26' ,paddingLeft:{sm:'200px',xs:'30px'},paddingRight:{sm:'200px',xs:'30px'} , paddingTop:'70px', margin:'20px'}}>
    <div style={{display:"flex",alignItems:'center', justifyContent:'center', flexDirection:'column',gap:'3', height:'80vh' , border:''}}>
    
    <div style={{fontSize:'20px',color:'white',padding:'20px'}}>
      
Company and Address       </div>

      <div><input type="text" placeholder='Company'  style={{height:"20px", backgroundColor:'transparent' , border:'1px solid grey', padding:'20px' , margin:'10px'}}   /></div>
      
      <div><input type="text" placeholder='Address' style={{backgroundColor:'transparent',border:'1px solid grey', padding:'20px' , margin:'10px'}} /></div>
      
    <div>
       <Button size='small' onClick={Next} sx={{marginTop:'10px'}} variant="contained">Next</Button>
      </div>
      
    </div>

    </div>
  
  
  </>
  )
}

export default Page1