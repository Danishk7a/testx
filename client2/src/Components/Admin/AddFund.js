import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const AddFund = () => {
  const [response, setResponse] = useState('');

  const addFund = async () => {
    const userid = document.getElementById('userid').value;
    const currency = document.getElementById('currency').value;
    const quantity = document.getElementById('quantity').value;

    try {
      const res = await axios.post('/addfund', { userid, currency, quantity });
      setResponse(res.data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div style={{ padding: '30px' }}>


        <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
          <input style={{ background: 'transparent', padding: '15px', margin: '7px', border: '1px solid grey' }} id="userid" type="text" placeholder="User ID" />
          <input style={{ background: 'transparent', padding: '15px', margin: '7px', border: '1px solid grey' }} id="currency" type="text" placeholder="Currency" />
          <input style={{ background: 'transparent', padding: '15px', margin: '7px', border: '1px solid grey' }} id="quantity" type="text" placeholder="Quantity" />
          <Button size='small' onClick={addFund} variant="contained">
            Add Fund
          </Button>
          {response && <p>{response}</p>}
        </div>




      </div>


    </>
  );
};

export default AddFund;
