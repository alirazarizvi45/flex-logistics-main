import React from 'react'
import AuthBg from './Bg'
import {Box,Button,Container, Divider, TextField, Typography} from '@mui/material';
import driver from "../../assets/driver.png"
import man from "../../assets/man1.png"
const Login = () => {
  return (
    <>
      <AuthBg>
     <Container maxWidth='lg'>
     <Box sx={{padding:{lg:'50px',  width:'500px'}}}>
            <Typography variant='h1'>
            Login
            </Typography>
            <Divider    sx={{
                    width: "24%",
                    background: "linear-gradient(to right, #F2B705, #373A41)",
                    height: "2px",

                    marginTop: "15px",
                  }}/>
            <Typography sx={{mt:'20px'}} variant='h3'>
            Please select your role
            </Typography>
            <Box sx={{display:'flex',gap:2 ,mt:'30px'}}>

<Box sx={{display:'flex', alignItems:'center' , borderRadius:'8px', height:'51px', justifyContent:'space-around', width:'201px', border:'1px solid #F2B705',}}>
    <img style={{cursor:'pointer'}} src={driver} alt=""  width="50px" height="50px" />
    <Button sx={{background:'tranparent'}}>As a Driver</Button>
</Box>
<Box sx={{display:'flex', justifyContent:'space-around',borderRadius:'8px', alignItems:'center' ,width:'201px', height:'51px', border:'1px solid #F2B705' }}>
    <img src={man} alt=""  width="49px" height="33px"/>
    <Button sx={{background:'tranparent'}}>As a Rider</Button>
</Box>
            </Box>
<Box sx={{mt:'20px'}}>
    <TextField fullWidth   placeholder='Write your email'  id="fullWidth" sx={{background:'#fff' ,borderRadius:'4px', color:'#828282'}} />
</Box>
        </Box>
     </Container>
    </AuthBg>
    </>
  )
}

export default Login