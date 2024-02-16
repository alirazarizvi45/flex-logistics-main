import React from "react";
import { Grid,Container,Typography,Button, Divider, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import goll from '../../assets/1.png';
const data = [
  {
    client: 'Fiza Zahra',
    date: '6/2/2024',
    time: '1 hr',
    pickup: '123 ABC Street, Nairobi',
    dropOff: 'Airport South Road, Embakasi, Nairobi',
    rating: 2.5,
    price: '456 ksh',
  },
  {
    client: 'Fiza Zahra',
    date: '6/2/2024',
    time: '1 hr',
    pickup: '123 ABC Street, Nairobi',
    dropOff: 'Airport South Road, Embakasi, Nairobi',
    rating: 2.5,
    price: '456 ksh',
  },
  {
    client: 'Fiza Zahra',
    date: '6/2/2024',
    time: '1 hr',
    pickup: '123 ABC Street, Nairobi',
    dropOff: 'Airport South Road, Embakasi, Nairobi',
    rating: 2.5,
    price: '456 ksh',
  },
  {
    client: 'Fiza Zahra',
    date: '6/2/2024',
    time: '1 hr',
    pickup: '123 ABC Street, Nairobi',
    dropOff: 'Airport South Road, Embakasi, Nairobi',
    rating: 2.5,
    price: '456 ksh',
  },
  {
    client: 'Fiza Zahra',
    date: '6/2/2024',
    time: '1 hr',
    pickup: '123 ABC Street, Nairobi',
    dropOff: 'Airport South Road, Embakasi, Nairobi',
    rating: 2.5,
    price: '456 ksh',
  },
 

 
];
const MyRides = () => {
  return (
    <>
     <Container maxWidth="lg">
<Grid container sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}} spacing={2}>
    <Grid item lg={8} >
        
        <Typography variant='h2' sx={{color:'#000'}}>
        History
        </Typography>
        </Grid> 
        <Grid item lg={4} >
          <Box sx={{display:'flex', flexDirection:{md:'row' ,xs:'column'}, justifyContent:'center',alignItems:'center', gap:2}}>

<Box sx={{display:'flex', gap:2}}>
<Button sx={{background:'#373A41',color:'#fff',textTransform:'none','&:hover':{
  background:'#373A41',
  color:'#fff'
}}}>
Today
</Button>
<Button sx={{background:'#F1F1F1',textTransform:'none', color:'#000' ,'&:hover':{
  background:'#373A41',
  color:'#fff'
}}}>
Last week
</Button>
</Box>
<Box sx={{display:'flex', gap:2}}>
<Button sx={{background:'#F1F1F1', textTransform:'none', color:'#000' ,'&:hover':{
  background:'#373A41',
  color:'#fff'
}}}>
Last month
</Button>
<Button sx={{background:'#F1F1F1',textTransform:'none', color:'#000' ,'&:hover':{
  background:'#373A41',
  color:'#fff'
}}}>
Last year
</Button>
</Box>

          </Box>
        </Grid>

</Grid>
,
      <Grid container sx={{background:'#FFFFFF', height:'auto', alignItems:'center', borderRadius:'10px'}}p={3}>    
        <Grid item xs={6} md={3} sm={3} lg={3}>
           <Typography variant='h2' sx={{borderRight:'1px solid #F4C025 ',textAlign:'center', color:'#000'}}>
           7
           </Typography>
           <Typography variant="subtitle1" sx={{textAlign:'center',color:'#000'}}>
           Total No of Rides
           </Typography>
        
        </Grid>

        {/* Grid item 2 */}
        <Grid item xs={6} md={3} sm={3}   lg={3}>
        
        <Typography variant='h2' sx={{borderRight:'1px solid #F4C025 ',textAlign:'center', color:'#33C600'}}>
           6
           </Typography>
           <Typography variant="subtitle1" sx={{textAlign:'center',color:'#000'}}>
           Completed Rides  
           </Typography>
          
        </Grid>

        {/* Grid item 3 */}
        <Grid item  xs={6} md={3} sm={3} lg={3}>
         
        <Typography variant='h2' sx={{ borderRight:'1px solid #F4C025 ',textAlign:'center', color:'#FA511C'}}>
        1
           </Typography>
           <Typography variant="subtitle1" sx={{textAlign:'center',color:'#000'}}>
           Cancel Rides
           </Typography>
        </Grid>
        {/* Grid item 3 */}
        <Grid item  xs={6} md={3} sm={3} lg={3}>
        <Typography variant='h2' sx={{textAlign:'center', color:'#000'}}>
        100+
           </Typography>
           <Typography variant="subtitle1" sx={{textAlign:'center',color:'#000'}}>
           Positive Reviews
           </Typography>
         
        </Grid>
      </Grid>
        <Grid item lg={6} xs={12}>
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
          
           padding:"30px",
            background: '#E0E3EA',
            mt: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: '5px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap:2 }}>
            <img src={goll} alt=""/>
           
            <Box>
              <Typography variant="subtitle1" sx={{color:'#373A41' ,fontWeight:'600'}}>Client</Typography>
              <Typography variant="subtitle2" sx={{color:'#373A41'}}>{item.client}</Typography>
            </Box>
          </Box>
          <Box >
            <Typography variant="subtitle1" sx={{color:'#373A41' ,fontWeight:'600'}} >Date</Typography>
            <Typography variant="subtitle2" sx={{color:'#373A41'}}>{item.date}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{color:'#373A41' ,fontWeight:'600'}}>Time</Typography>
            <Typography variant="subtitle2" sx={{color:'#373A41'}}>{item.time}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{color:'#373A41' ,fontWeight:'600'}}>Pickup</Typography>
            <Typography variant="subtitle2" sx={{color:'#373A41'}}>{item.pickup}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{color:'#373A41' ,fontWeight:'600'}}>Drop off</Typography>
            <Typography variant="subtitle2" sx={{color:'#373A41'}}>{item.dropOff}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{color:'#373A41' ,fontWeight:'600'}}>Rating</Typography>
            <Typography>
              <Rating
                name={`rating-${index}`}
                defaultValue={item.rating}
                precision={0.5}
              />
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{color:'#373A41' ,fontWeight:'600'}}>Price</Typography>
            <Typography variant="subtitle2" sx={{color:'#373A41'}}>{item.price}</Typography>
          </Box>
        </Box>
      ))}
    </Grid>
    </Container>
    </>
  );
};

export default MyRides;
