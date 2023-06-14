import React, { useState } from 'react'
import Calendar from 'react-calendar'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import 'react-calendar/dist/Calendar.css';
/*import moment from 'moment'*/

export default function Event(props) {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
    <Paper>
      <Box sx={{ backgroundColor: 'pink', paddingX: 1, paddingY: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <IconButton onClick={() => {
          props.setPage("home");
        }}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h4"> Stay tuned y'all </Typography>
        <Box sx={{ width: '40px' }} />
      </Box>
      <Calendar
        value={dateState}
        onChange={changeDate}
      />
    </Paper>
    </Box>
  )
}