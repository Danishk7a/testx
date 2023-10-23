import React, { useState, useEffect } from 'react'
import { Container, Box, Button } from '@mui/material'
import User6 from '@mui/icons-material/AccountCircle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserProfile = ({ bg }) => {
  const [user, setUser] = useState(0)
  const [ReadableData, setDate] =useState('----')
  const navigate = useNavigate()

  const Navigate = () => {
    navigate('/userpanel/wallet/addmoney')
  }

  const Navigate2 = () => {
    navigate('/userpanel/wallet/withdraw')
  }


  const Navigate3 = () => {
    navigate('/trade')
  }

  useEffect(() => {
    axios
      .get('/userprofile')
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
    
        const dateString = response.data[0].lastlogin;
        const date = new Date(dateString);
        
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true
        };
        
        const formattedDate = date.toLocaleString("en-US", options);
        // console.log("THIS IS DATE FORMATED " + formattedDate)
        setDate(formattedDate)


      })
      .catch((error) => {
        console.log(error)
      })

    return () => {}
  }, [])

  return (
    <>
      <div
        style={{
          backgroundColor:  '#5661FF',

          width: { xs: window.innerWidth, sm: window.innerWidth },
          paddingLeft: '20px'
        }}
      >
        <Box
          sx={{
            backgroundColor: '#5661FF' ,
            color: 'white',

            width: 'auto',

            display: 'flex',
            alignItems: 'center',
            justifyContent: '',
            // gap: { sm: '20px', xs: '10px' },
            gap:'30px',
           paddingTop:'10px',
           paddingBottom:'10px',
            width:'100%',
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width:'100px',
              alignItems: 'center',
            }}
          >
            <Box>
              {' '}
              <User6
                sx={{ color: '#fffff', fontSize: { sm: '40px', xs: '30px' } }}
              />
            </Box>
            <Box sx={{ marginLeft: '-29px' }}>
              <Box></Box>
              {/* <Box sx={{ marginTop: '25px' }}>
                <img
                  src="https://btccrypto.exchange/api/static/images/levels/basic.png"
                  src="/static/uu.png"
                  height={'25px'}
                  width={'60px'}
                  alt=""
                />
              </Box> */}
            </Box>
          </Box> 

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'white', fontSize: '10px' }}>User ID </div>
            <Box sx={{ fontSize: '16px', color: '#f8f8f8' }}>
              {user && user[0].userid}
            </Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'white', fontSize: '10px' }}>Name </div>
            <Box sx={{ fontSize: '16px', color: '#f8f8f8' }}>
              {user && user[0].Name.toUpperCase()}
            </Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'white', fontSize: '10px' }}>Email </div>
            <Box sx={{ fontSize: '16px', color: '#f8f8f8' }}>
              {user && user[0].email}
            </Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'white', fontSize: '10px' }}>Type</div>
            <Box sx={{ fontSize: '16px', color: '#f8f8f8' }}>Regular</Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
          >
            <div style={{ color: 'white', fontSize: '10px' }}>Last Login </div>
            <Box sx={{ fontSize: '16px', color: '#f8f8f8' }}>
              {user && ReadableData}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '50px',
              alignItems: 'center',
              // height: '10vh',
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
    
          </Box>
        </Box>
      </div>
    </>
  )
}

export default UserProfile
