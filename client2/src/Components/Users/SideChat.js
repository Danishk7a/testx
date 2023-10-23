import React, { useState , useEffect} from 'react'
import Chat from '@mui/icons-material/ChatOutlined'
import { Box, Button } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import Send from '@mui/icons-material/SendOutlined'
const SideChat = ({ bg }) => {
  const [chat, setChat] = useState(0)
  const [isMounted, setIsMounted] = useState(true);
  const openChat = () => {
    setChat(1)
  }
  const closeChat = () => {
    sendMsg(0)
    setChat(0)
  }

  const [msg, setmsg] = useState(0)
  const sendMsg = () => {
    setmsg(1)
  }

  const handleButtonClick = () => {
    setIsMounted(false); // Set isMounted state to false to unmount the component
  };


  useEffect(() => {
    // This effect runs when the component mounts
    // You can perform any cleanup or side effects here

    // Return a cleanup function to handle component unmounting
    return () => {
      // setChat(0)
      // setIsMounted(0)



    };
  }, []);
  return (
    <>
      <Box
        onClick={openChat}
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'fixed',
          cursor: 'pointer',
          bottom: '20px',
          right: '30px',
          borderRadius: '100px',
          padding: '20px',
          backgroundColor: bg == '#ffffff' ? '#3399ff' : '#5442f2',
          padding: '10px',
        }}
      >
        {' '}
        <Chat
          sx={{ color: bg == '#ffffff' ? '#ffffff' : '#ffffff', fontSize: '28px' }}
        />
      </Box>

      {chat ? (
      isMounted ?<Box>
          <Box
            sx={{
              backgroundColor: '#171c28',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'fixed',
              top: '0',
              right: '0',
              width: '20%',
              zIndex: 12,
              boxShadow:'14px 9px 13px 5px #5661FF'
            }}
          >
            <Box
              sx={{
                color: 'grey',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
              }}
              onClick={closeChat}
            >
              <Box  sx={{ padding: '20px', fontSize: '16px' }}>X</Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img   
                src="/static/images/chatlady.png"
                height={'100px'}
                width={'100px'}
                alt=""
              />
              <Box sx={{ color: 'grey', fontSize: '16px' }}>Alice</Box>
            </Box>
            <Box
              sx={{
                height: '60vh',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ height: '40vh' }}></Box>
              {msg ? (
                <Box sx={{ color: 'grey', padding: '20px' }}>
                  Thank you For Reaching out , We wil connect with you soon !
                </Box>
              ) : (
                <></>
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {' '}
              <input
                type="text"
                id="chat"
                placeholder={'How can we Help you ?'}
                style={{
                  background: 'transparent',
                  padding: '15px',
                  margin: '10px',
                  border: '1px solid grey',
                }}
              />{' '}
              <Box onClick={sendMsg}>
                <Send sx={{ color: '#0082FC' }}>Send</Send>
              </Box>
            </Box>
          </Box>
        </Box>
     :null ) : (
        <></>
      )}
    </>
  )
}

export default SideChat
