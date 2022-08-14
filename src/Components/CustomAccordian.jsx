import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});



const CustomAccordian = ({ question, answer, mode }) => {


  return (

    mode ?
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography> {question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
      :
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography> {question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    // <div style = {{transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden'}} className='w-full shadow-sm rounded-md gap-8 p-8 dark:bg-blue-darkmd bg-white flex flex-col items-center justify-center 
    // transition-all duration-200'>



    //     <div style = {{transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden'}} className='w-full flex items-center justify-between'>
    //         <div style = {{transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden'}} className='flex items-center justify-center'>
    //             <h1 className='dark:text-white font-semibold text-2xl text-blue-darkmd'>{question}</h1>
    //         </div>
    //         <div style = {{transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden'}} className='flex items-center justify-center'>
    //             <button style = {{transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden'}} type='button' className='dark:text-white text-blue-darkmd' onClick={handleShow}>
    //                 {
    //                     !show ? (<AiOutlineArrowDown />) : (<AiOutlineArrowUp />)
    //                 }
    //             </button>
    //         </div>
    //     </div>
    //     {
    //         show && (<p style = {{transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden'}} className='dark:text-white text-blue-lightmd w-full justify-start items-center transition-all duration-200'>{answer}</p>)
    //     }
    // </div>
  )
}

export default CustomAccordian