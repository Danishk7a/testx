import React, { useState } from 'react'
import {Button,Container,Box} from '@mui/material'

const AirdropContest = () => {

  const [redeem, setRedeem] = useState(0)
  const showRedeem = () => {
      setRedeem(1)
  }
  

  const redeemCoins = () => {
    
      alert("Coin credit....")

  }
 
 
  return (
    <>
    <Container sx={{height:'100vh', paddingTop:'20px'}} >

    <Box sx={{backgroundImage:"url('/static/images/Airdrop/Airdrop2.gif')", backgroundPosition:'center', backgroundSize:'cover', height:{sm:'300px', xs:'200px'}, width:{xs:window.innerWidth -50,sm:'100%'}}}> </Box>

<h1 style={{color:'#330867' ,background: `linear-gradient(to right, #30CFD0 0%, #330867 100%)`,
'-webkit-background-clip': 'text',
fontSize:'26px',
fontWeight:600,
'-webkit-text-fill-color': 'transparent', height:'10vh', display:"flex", alignItems:'center'}}>Get This Coin Now !</h1>



<p style={{color:'#6F6A6D', lineHeight:2,height:'50vh'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad expedita maiores repellendus quod eaque, excepturi aspernatur! Quod porro perferendis, ut quasi incidunt praesentium! Deleniti hic amet dolorum quaerat consectetur labore at necessitatibus inventore, recusandae veniam harum asperiores iusto. Vel commodi deleniti dolorum, facilis voluptatem, sequi, pariatur quae harum a repudiandae accusantium? Reiciendis, itaque error! Ratione quos ducimus distinctio quam amet eos itaque beatae quidem maiores, cum ipsum accusantium neque ipsam a deleniti est doloribus inventore praesentium blanditiis perferendis sequi. Recusandae rerum consequuntur deserunt facere! Consectetur quia facere, corrupti, reiciendis hic error repudiandae odio vitae qui similique dolores animi quis quisquam ad neque omnis nostrum! Quo at accusantium quod aperiam ea, sequi voluptatem vitae porro natus pariatur veritatis assumenda asperiores odio nam! Quam rerum, quisquam soluta aliquam deleniti, voluptatum voluptatibus facilis animi repellat, odit saepe veritatis dolorem tempora commodi labore nulla ea. Beatae, a dolores deleniti quaerat quia assumenda harum esse est voluptatem aperiam quae ipsum rerum nulla sed commodi, veniam vel incidunt unde ad? Repellat laboriosam voluptatem exercitationem voluptate ab accusantium illum optio aliquid officiis illo, facere soluta mollitia numquam reprehenderit assumenda quisquam, esse quis enim corporis dolor? Ad voluptatum praesentium doloremque laboriosam ratione fugiat, repellat deserunt temporibus labore ullam!

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero odit, laudantium repudiandae at perspiciatis repellat itaque. Dignissimos vitae hic nihil, architecto quidem quam necessitatibus temporibus dicta ducimus veniam, sit alias pariatur eligendi aliquam beatae nam quasi nesciunt illo dolorem eum nulla adipisci aperiam ipsam! Quos dolorem neque omnis in commodi nesciunt minus, voluptates quae earum voluptatem fuga suscipit inventore ea rem, quia atque? Hic veritatis quidem voluptates minus rerum nostrum ea quam amet. Numquam nam nisi ea quos sint tenetur ipsum laudantium, fugiat illum dignissimos, laboriosam asperiores eum minima deserunt nihil veritatis cupiditate. Laborum voluptatibus doloribus rem aliquid? Odio perspiciatis facilis, saepe doloribus debitis error iste minus ad earum, reiciendis esse dolores eos voluptas ex accusamus tenetur omnis aspernatur!</p>

</p>
<a style={{textDecoration:'none', color:'white'}} href="https://api.whatsapp.com/send?phone=+919810946956&text=Join BCEX using this link : https://bcex.com/newuser?!" target="_blank">
        
        { redeem?<Button onClick={redeemCoins} variant="contained">Redeem Coins</Button>:<></>}
        { redeem?<></>:<Button onClick={showRedeem} variant="contained">Share</Button>}
</a>
  
</Container>

    
    </>


  )
}

export default AirdropContest