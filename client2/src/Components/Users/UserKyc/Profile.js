import React, { useState, useEffect } from 'react'
import HeaderBox from '../HeaderBox'
import User6 from '@mui/icons-material/AccountCircle'
import axios from 'axios'
import './CSS/Profile.css'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  IconButton,
  Button,

} from '@mui/material'

const Profile = ({ bg }) => {
  const [user, setUser] = useState(0)
  const navigate = useNavigate()

  
  useEffect(() => {
    axios
      .get('/userprofile')
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {}
  }, [])

  

 
  return (
    <>
     <HeaderBox title="Profile"></HeaderBox>

   


<div id="Profile">






<div id="profileBox">

    <div id="title">General Information</div>

    <div id="profileUpload">

        <div><img src="http://localhost:3001/img/avatar.svg" alt=""/></div>
        <input type="file"/>

    </div>

    <div id="sectionBox1">


        <div id="sectionfirst">

            <span>First Name</span>
            <input type="text" placeholder="First Name"/>
            <div>Email</div>
            <input type="text" placeholder="Email"/>
            <div>Language</div>
            <input type="text" placeholder="Language"/>
        </div>

        <div id="sectionfirst">

            <span>Last Name</span>
            <input type="text" placeholder="Last Name"/>
            <div>Phone</div>
            <input type="text" placeholder="Phone"/>
            <div>Country</div>
            <input type="text" placeholder="Country"/>
        </div>


    </div>


    <Button id="updateBtn" variant='contained'>Update</Button>




</div>



</div>



    </>
  )
}

export default Profile
