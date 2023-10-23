import React,{useState, useEffect} from 'react'
import './css/Airdrop.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Input, Button, IconButton ,Select , MenuItem} from '@mui/material';
import axios from 'axios';

const Airdrop = () => {

  const [coinlist, setCoinlist] = useState(0)


  const Func1 = () => {
    axios.get(`/getavailablecoinlist`).then(response => {
      setCoinlist(response.data);
      console.log(coinlist)
      console.log(coinlist[0].currency)
    })
    .catch(error => {
      console.error(error);
    });
    

  }
  
  useEffect(() => {
    Func1()

  },[])




  return (
   
    <>
     
    <div style={{padding:'10px', color:'rgba(0, 0, 0, 0.34)',fontSize:'28px'}}>Airdrop</div>
    <div id="Airdrop">
     <form action="/airdrop" method='POST' encType='multipart/form-data'>
     
       
          
           <div>
<input type="number" min="1"  id="quantity" placeholder={"Quantity"}  style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}} />
          </div>




      
      <IconButton color="primary" aria-label="upload picture" component="label">
  <input  name='airdrop' accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
<div><input id='img' style={{backgroundColor:'grey', padding:'10px'}} accept="image/*"  multiple type="file" /></div>
          
          
          
          
          <input type="submit" id='btn' />
      

    </form>
    </div>
    
    

    
    
    </>


  )
}

export default Airdrop