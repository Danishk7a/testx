import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Arrow from '@mui/icons-material/KeyboardArrowDownOutlined';


import AllUserBox from './AllUserBox';

const AllUsers = () => {
 const [data, setdata] = useState([]);
    useEffect(()=>{

        axios("/getallusers").then(res=>res.data).then((data)=>{

            setdata(data);
            
        
          })
 
    },[])

  
  
 return (
   <>
     <div style={{height:'10vh', display:'flex', alignItems:'center'}}>All Users</div>

     <div style={{ display: 'flex', alignItems: 'center', height: '5vh' , backgroundColor:'#1B202E'}}>
      <div style={{ width: '10%', textAlign:'center'  }} ><Arrow/></div>
       <div style={{ width: '10%' }}>Name</div>
       <div style={{width:'30%'}}>Email</div>
       <div style={{width:'20%'}}>Phone</div>
       <div style={{width:'20%'}}>Adhar Card</div>
       <div style={{width:'10%'}}>Active</div>
    
     
     </div>  
     
     {data.map((ele) => {
    
      
      return <>
        
        
        <AllUserBox Name={ele.Name} email={ele.email} userid={ele.userid} pancard={ele.Pancard} adharcard={ele.adharcard} phone={ele.Phone} Active={ele.Active} />
       
        </>

    })}
  </>
  )
}

export default AllUsers