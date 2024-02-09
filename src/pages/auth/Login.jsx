import React from 'react'
import AuthBg from './Bg'
import {Box,Button,Chip,Container, Divider, Grid, Link, TextField, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import driver from "../../assets/driver.png"
import man from "../../assets/man1.png"
import CommonButton from '../../components/CommonButton';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
       
      
  return (
    <>
      <AuthBg>
     <Container maxWidth='lg'>
        <Grid container>
            <Grid item lg={12} md={12} xs={12} sm={12} mt={2}>

     <Box sx={{width:'100%'}}>

            <Typography variant='h1'>
            Login
            </Typography>
            <Divider    sx={{
                    width: {lg:'20%' , xs:'30%'},
                    background: "linear-gradient(to right, #F2B705, #373A41)",
                    height: "2px",

                    marginTop: "15px",
                  }}/>
            <Typography sx={{mt:'20px'}} variant='h3'>
            Please select your role
            </Typography>
            <Box sx={{display:{lg:'flex', md:'flex', sm:'block'},gap:2 ,mt:{lg:'30px' ,sm:'30px' ,xs:'30px'}}}>

<Box sx={{display:'flex', alignItems:'center' , borderRadius:'8px', height:'51px', justifyContent:'space-around', width:'201px', border:'1px solid #F2B705',}}>
    <img style={{cursor:'pointer'}} src={driver} alt=""  width="50px" height="50px" />
    <Button sx={{background:'tranparent'}}>As a Driver</Button>
</Box>
<Box sx={{display:'flex', justifyContent:'space-around',borderRadius:'8px', alignItems:'center' ,width:'201px', height:'51px', border:'1px solid #F2B705'  ,mt:{xs:'20px' ,md:'0px'}}}>
    <img src={man} alt=""  width="49px" height="33px"/>
    <Button sx={{background:'tranparent'}}>As a Rider</Button>
</Box>
 </Box>
</Box>
</Grid>

     <Grid item lg={4.4} md={4.2} sm={4} xs={12}>
     <Box sx={{width:'100%'}}>
<Typography>
Email
</Typography>
    <TextField fullWidth  placeholder='Write your email'  id="fullWidth" sx={{background:'#fff' ,borderRadius:'4px', color:'#828282'}} />
    <Box sx={{}}>  
<Typography>
Password
</Typography>
        <FormControl sx={{width:{lg:'53ch' ,md:'43ch' ,sm:'30ch' ,xs:'36ch'} }} >
          
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{color:'#F2B705'}}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
           sx={{background:'#fff', borderRadius:'5px', color:'#9FA09C'}}
           placeholder='Write your password'
          />
        </FormControl>
        {/* <Box sx={{}}>
        <Typography variant='h5' >
          <Link href="/forgot-password" underline="hover">
            Forgot your Password?
          </Link>
        </Typography>
      </Box> */}
      </Box>
    <CommonButton sx={{width:'100%' ,padding:'14px 30px' ,background:'#F2B705' ,color:'#fff' ,mt:'20px'}}>
        Login
    </CommonButton>
    <Divider sx={{ color: '#A5A5A5', mt: '20px' }}>
      <Chip sx={{ color: '#A5A5A5' }} label="or" size="small" />
    </Divider>
     
    </Box>

     </Grid>
</Grid>   
     </Container>
    </AuthBg>
    </>
  )
}

export default Login