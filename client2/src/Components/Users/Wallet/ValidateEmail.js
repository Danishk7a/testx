import React, { useState, useEffect } from 'react'
import { Button, Alert } from '@mui/material'
import axios from 'axios'
import Popup from '../../Home/Popup';
import { useNavigate } from 'react-router-dom';
const ValidateEmail = ({ coin, amount, email }) => {

    const navigateToWallet = useNavigate()

    const [code, setcode] = useState(0)

    const codeIput = (e) => {

        setcode(e.target.value)

    }

    const [Data, setData] = useState(0)

    const confirmation = async () => {


        let data = {
            code,
            coin,
            amount,
            email


        }

        const response = await axios.post('/confirmcodewithdraw', data);
        setData(response.data)
    }

    const hideResponse = () => {

        setData(0)
        navigateToWallet('/userpanel/wallet')


    }





    return (

        <>

            {/* <div>{coin && coin}</div>
            <div>{amount && amount}</div>
            <div>{email && email}</div> */}

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                <h3 style={{ color: 'grey' }}>Code Has been sent to your Email</h3>
                <input type="text" placeholder='Enter the Code here' onChange={codeIput} style={{ background: 'transparent', margin: '10px', height: '27px', input: { color: "grey" }, width: '74%', border: '1px solid grey', padding: '10px' }} />
                <Button disabled={code ? false : true} onClick={confirmation} variant='contained' size='small'>Submit</Button>

            </div>

            
                {Data.msg ? <Popup heading="Success" content={`<strong>${amount} ${coin}</strong> transfer to <strong>${email}</strong>  successfully`} />  : <></>}

                          


        </>


    )
}

export default ValidateEmail