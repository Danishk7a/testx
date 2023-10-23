import React, { useState } from 'react'
import './css/AddCustomCoin.css'
import { Button } from '@mui/material'
import axios from 'axios'



const AddCustomCoin = () => {
  const [image,setimage] = useState();

  const HandleSubmit = () => {
   
  let symbol = document.getElementById('symbol').value;
  let quantity = document.getElementById('quantity').value;
  let initprice = document.getElementById('InitPrice').value;

      
  const formdata = new FormData();
  formdata.append('symbol', symbol);
  formdata.append('quantity', quantity);
  formdata.append('initprice', initprice);
  formdata.append('image', image);

  axios.post('/addcustomcoin', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    
    


 }


  
  
    return (
    <>
   <div id="addcoin">
   <h2>custom coin</h2>  

   <form action="/addcustomcoin" method='POST'>
            <div>Enter Symbol : <input type="text" id='symbol' style={{ background: 'transparent', margin: '10px', width: '48ch', padding: '15px', m: "1", border: '1px solid grey' }} /></div>
            {/* <div>Enter Symbol: <input type="text" id='symbol' style={{ background: 'transparent', margin: '10px', width: '48ch', padding: '15px', m: "1", border: '1px solid grey' }} /></div> */}
            
        <div>  Enter Quantity  : <input type="number" id='quantity' style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}}/></div>
            <div>Enter Lauch Price (USDT) : <input type="number" id='InitPrice'  style={{background:'transparent',margin:'10px',width:'48ch',padding:'15px' , m:"1", border:'1px solid grey'}}/></div>
          <div><input id='img' style={{backgroundColor:'grey', padding:'10px'}} accept="image/*" onChange={(e) => setimage(e.target.files[0])} multiple type="file" /></div>
      <div>  <Button variant='contained' onClick={HandleSubmit}>Submit</Button></div>

   </form>

   </div>

    
    </>
  )
}

export default AddCustomCoin