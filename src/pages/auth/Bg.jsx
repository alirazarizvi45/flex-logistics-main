import React from 'react'
import {Box} from '@mui/material'
import authbg from '../../assets/authbg.png';
const AuthBg = (props) => {
  return (
    <Box>
      <Box sx={{
          backgroundImage: `url(${authbg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          minHeight: "100vh",
          width: "100%",
        }} >{props.children}</Box>
    </Box>
  )
}

export default AuthBg
