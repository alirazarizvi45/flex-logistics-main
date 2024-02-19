import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Rating,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material'
import React, { useState } from 'react'
import { CustomizeInput } from '../../components/CustomizeInput'
import moment from 'moment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CommonButton from '../../components/CommonButton'
import { Avatar } from '@mui/material'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded'
const Profile = () => {
  const [dob, setDob] = useState('')

  const handleDateChange = (event) => {
    setDob(event.target.value)
  }

  const formattedDob = dob ? moment(dob).format('YYYY-MM-DD') : ''
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }
  const handlePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword)
  }
  return (
    <Grid container justifyContent='space-between' mt={5}>
      <Grid item xs={11} md={8} mt={-2}>
        <Grid item xs={12}>
          <Box position='relative'>
            <Box
              sx={{
                ml: '6%',
                display: 'flex',
                borderRadius: '100px',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                bottom: '-50px',
                zIndex: 1, // Ensures the box appears above the avatar
              }}
            >
              <img
                src='../src/assets/Ellipse 85.png'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              ></img>
              <Box
                sx={{
                  display: 'flex',
                  position: 'absolute',
                  justifyContent: 'center',
                  top: '60%',
                  backgroundColor: 'rgba(242, 183, 5, 1)',
                  margin: '10px',
                  marginLeft: '100px',
                  zIndex: 2,
                  overflow: 'hidden',
                  padding: '5px',
                  borderRadius: '50%',
                }}
              >
                <CameraAltRoundedIcon fontSize='medium' variant='contained' />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          bgcolor='rgba(255, 255, 255, 1);'
          ml={2}
          borderRadius='5px'
        >
          <Grid item md={5} xs={12} mt={5}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography color='rgba(55, 58, 65, 1)'>First Name</Typography>
              <CustomizeInput placeholder='Your first name' fullWidth />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <Typography color='rgba(55, 58, 65, 1)'>Date of Birth</Typography>
              <CustomizeInput
                placeholder='Select'
                fullWidth
                type='date'
                value={formattedDob}
                onChange={handleDateChange}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <Typography color='rgba(55, 58, 65, 1)'>Phone Number</Typography>
              <CustomizeInput
                placeholder='+254 ABCD XXXXX'
                fullWidth
                type='number'
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <Typography color='rgba(55, 58, 65, 1)'>Password</Typography>
              <CustomizeInput
                placeholder='********'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handlePasswordVisibility}
                        sx={{ color: '#F2B705' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item md={5} xs={12} mt={5}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography color='rgba(55, 58, 65, 1)'>Last Name</Typography>
              <CustomizeInput placeholder='Your last name' fullWidth />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <Typography color='rgba(55, 58, 65, 1)'>ID card No</Typography>
              <CustomizeInput
                placeholder='**** ****'
                type='password'
                fullWidth
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <Typography color='rgba(55, 58, 65, 1)'>Gmail</Typography>
              <CustomizeInput
                placeholder='abcd@gmail.com'
                type='email'
                fullWidth
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <Typography color='rgba(55, 58, 65, 1)'>
                Complete Address
              </Typography>
              <CustomizeInput
                placeholder='Street abc ,xyz colony, Nairobi, Kenya'
                type='text'
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={3} flex={1} mb={2}>
            <Box pt='20px'>
              <CommonButton
                loadingPosition='end'
                endIcon={null}
                fullWidth
                sx={{
                  bgcolor: 'rgba(242, 183, 5, 1)',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'black' },
                }}
              >
                Update Information
              </CommonButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={3}>
        <Grid container justifyContent='flex-end'>
          <Grid item xs={12} sm={12} md={12} lg={12} mt={12}>
            <Card>
              <CardContent>
                <Typography color='customBlack.main' variant='h4' mb={2}>
                  Reviews
                </Typography>
                <Divider />
                <Box display='flex' flexDirection='column' mt={2}>
                  <Box flexDirection='row' display='flex'>
                    <Avatar src='../src/assets/Group 1000008956.png' />
                    <Box display='flex' flexGrow={1} ml={2}>
                      <Box display='flex' flexDirection='column'>
                        <Typography color='customBlack.main' variant='h5'>
                          Fiza Zahra
                        </Typography>
                        <Box display='flex' alignItems='center'>
                          <Rating value={4} readOnly size='small' />
                          <Typography
                            variant='subtitle1'
                            color='textSecondary'
                            ml={1}
                          >
                            (4.0)
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        align='right'
                      >
                        January 1, 2024
                      </Typography>
                    </Box>
                  </Box>
                  <Box display='flex' flexWrap='wrap' mb={3} mt={1}>
                    <Typography color='rgba(90, 90, 90, 1);'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box display='flex' flexDirection='column' mt={2}>
                  <Box flexDirection='row' display='flex'>
                    <Avatar src='../src/assets/Group 1000008956.png' />
                    <Box display='flex' flexGrow={1} ml={2}>
                      <Box display='flex' flexDirection='column'>
                        <Typography color='customBlack.main' variant='h5'>
                          Fiza Zahra
                        </Typography>
                        <Box display='flex' alignItems='center'>
                          <Rating value={4} readOnly size='small' />
                          <Typography
                            variant='subtitle1'
                            color='textSecondary'
                            ml={1}
                          >
                            (4.0)
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        align='right'
                      >
                        January 1, 2024
                      </Typography>
                    </Box>
                  </Box>
                  <Box display='flex' flexWrap='wrap' mb={3} mt={1}>
                    <Typography color='rgba(90, 90, 90, 1);'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box display='flex' flexDirection='column' mt={2}>
                  <Box flexDirection='row' display='flex'>
                    <Avatar src='../src/assets/Group 1000008956.png' />
                    <Box display='flex' flexGrow={1} ml={2}>
                      <Box display='flex' flexDirection='column'>
                        <Typography color='customBlack.main' variant='h5'>
                          Fiza Zahra
                        </Typography>
                        <Box display='flex' alignItems='center'>
                          <Rating value={4} readOnly size='small' />
                          <Typography
                            variant='subtitle1'
                            color='textSecondary'
                            ml={1}
                          >
                            (4.0)
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        align='right'
                      >
                        January 1, 2024
                      </Typography>
                    </Box>
                  </Box>
                  <Box display='flex' flexWrap='wrap' mb={3} mt={1}>
                    <Typography color='rgba(90, 90, 90, 1);'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box display='flex' flexDirection='column' mt={2}>
                  <Box flexDirection='row' display='flex'>
                    <Avatar src='../src/assets/Group 1000008956.png' />
                    <Box display='flex' flexGrow={1} ml={2}>
                      <Box display='flex' flexDirection='column'>
                        <Typography color='customBlack.main' variant='h5'>
                          Fiza Zahra
                        </Typography>
                        <Box display='flex' alignItems='center'>
                          <Rating value={4} readOnly size='small' />
                          <Typography
                            variant='subtitle1'
                            color='textSecondary'
                            ml={1}
                          >
                            (4.0)
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        align='right'
                      >
                        January 1, 2024
                      </Typography>
                    </Box>
                  </Box>
                  <Box display='flex' flexWrap='wrap' mb={3} mt={1}>
                    <Typography color='rgba(90, 90, 90, 1);'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Profile
