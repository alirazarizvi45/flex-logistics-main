import { Grid, Button, Typography, Box } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import FileUploadIcon from '@mui/icons-material/FileUpload'

export const IdFront = () => {
  return (
    <Grid
      container
      sx={{
        border: '2px solid rgba(242, 183, 5, 1)',
        borderRadius: '15px',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: 'rgba(55, 58, 65, 1)',
        justifyContent: 'center',
        margin: '0 auto',
        maxWidth: {
          xs: '90%',
          sm: '60%',
          md: '55%',
        },
        transition: 'box-shadow 0.3s',
        '&:hover': {
          boxShadow: '0 0 10px 3px rgba(242, 183, 5, 0.5)',
        },
      }}
    >
      <Grid item xs={12}>
        <Typography variant='h4'>
          Take a photo of your CNIC front side
        </Typography>
        <Typography variant='h5'>
          <Box display='flex' alignItems='center'>
            <KeyboardDoubleArrowRightIcon color='primary' />
            Capture the frontside of your national ID card, ensuring all corners
            are visible.
          </Box>
        </Typography>
        <Typography variant='h5'>
          <Box display='flex' alignItems='center'>
            <KeyboardDoubleArrowRightIcon color='primary' />
            Ensure the picture is clear, and all text is easily readable.
          </Box>
        </Typography>
        <Typography variant='h5'>
          <Box display='flex' alignItems='center'>
            <KeyboardDoubleArrowRightIcon color='primary' />
            Ensure that all the details are clear and legible.
          </Box>
        </Typography>
        <Typography variant='h5'>
          <Box display='flex' alignItems='center'>
            <KeyboardDoubleArrowRightIcon color='primary' />
            Any missing or altered information, including a photo will lead to
            rejection
          </Box>
        </Typography>
      </Grid>
      <Grid
        item
        xs={8}
        md={6}
        sm={8}
        sx={{
          border: '2px solid rgba(242, 183, 5, 9)',
          borderStyle: 'dashed',
          padding: '20px 24px',
          marginTop: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '30px',
        }}
      >
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          sx={{ padding: '40px 0px' }}
        >
          <Button>
            <FileUploadIcon color='customWhite' />
          </Button>
          <Typography variant='h6' color='white' component='span' mt='10px'>
            Upload Photo
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: '15px' }}>
        <Button
          variant='contained'
          component='span'
          sx={{ padding: '10px 60px', color: 'white' }}
        >
          Upload Photo
        </Button>
      </Grid>
    </Grid>
  )
}
