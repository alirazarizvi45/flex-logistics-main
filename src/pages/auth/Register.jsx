import React from 'react'
import AuthBg from './Bg'
import {Box,Button,Container, Divider, Typography} from '@mui/material';
import driver from "../../assets/driver.png"
import man from "../../assets/man1.png"

const Register = () => {
  return (
    <AuthBg>
     <Container>
     <Box sx={{padding:'50px'}}>
            <Typography variant='h1'>
            Sign up
            </Typography>
            <Divider    sx={{
                    width: "24%",
                    background: "linear-gradient(to right, #F2B705, #373A41)",
                    height: "2px",

                    marginTop: "15px",
                  }}/>
            <Typography sx={{mt:'20px'}} variant='h2'>
            Please select your role
            </Typography>
<Box sx={{display:'flex', alignItems:'center' ,width:'263px', borderRadius:'8px', height:'75px', justifyContent:'space-around', width:'263px', border:'1px solid #F2B705', mt:'30px'}}>
    <img style={{cursor:'pointer'}} src={driver} alt=""  width="50px" height="50px" />
    <Button sx={{background:'tranparent'}}>As a Driver</Button>
</Box>
<Box sx={{display:'flex', justifyContent:'space-around',borderRadius:'8px', alignItems:'center' ,width:'263px', height:'75px', border:'1px solid #F2B705' ,mt:'10px', }}>
    <img src={man} alt=""  width="49px" height="33px"/>
    <Button sx={{background:'tranparent'}}>As a Driver</Button>
</Box>
        </Box>
     </Container>
    </AuthBg>
  )
}

export default Register
