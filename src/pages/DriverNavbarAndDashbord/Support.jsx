import React from "react";
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Box, Container, TextField, Typography } from '@mui/material';
import { InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Support = () => {
  return (
    <>
        <Container maxWidth='lg'>
        <Box sx={{display:'flex', justifyContent:{sm:'end', xs:"center"} ,mt:{xs:'40px'}}}>

        <TextField
      id="search"
    placeholder='Search'
     
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
        </Box>
        <Typography variant='h4' sx={{color:'#373A41', mb:'30px', margin:{xs:'20px'}, textAlign:{xs:'center',sm:"left"}}}>
            Help Center
        </Typography>
    <Box sx={{boxShadow:' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
          sx={{color:'#373A41', fontWeight:'800'}}
        >
          What is the Flex Logistic Driver Dashboard?
        </AccordionSummary>
        <AccordionDetails sx={{color:"#373A41"}}>
        The flex logistic Driver Dashboard is a centralized online platform that allows flex logistic  drivers to manage their account, track earnings, 
        and access important information related to their trips and performance.
        </AccordionDetails>
      </Accordion>
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{color:'#373A41', fontWeight:'800'}}
        >
        How can I track my earnings on the Flex Logistic Driver Dashboard?
        </AccordionSummary>
        <AccordionDetails sx={{color:"#373A41"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{color:'#373A41', fontWeight:'800'}}
        >
          Can I manage my profile through the  Flex Logistic Driver Dashboard?


        </AccordionSummary>
        <AccordionDetails sx={{color:"#373A41"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{color:'#373A41', fontWeight:'800'}}
        >
           How do I navigate to a specific feature on the Dashboard?
        </AccordionSummary>
        <AccordionDetails sx={{color:"#373A41"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      
    </Box>

    </Container>
    </>
  );
};

export default Support;
