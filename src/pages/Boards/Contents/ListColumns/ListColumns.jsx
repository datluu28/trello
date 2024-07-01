import React from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column'

function ListColumns() {
  return (
    <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor:'inherit',
          overflowX:'auto',
          overflowY:'hidden',
          display:'flex',
          '&::-webkit-scrollbar-track': { m:2},
        }}
      >
        <Column />
        <Column />
        <Box sx={{
          
        }}>

        </Box>
      </Box>
  )
}

export default ListColumns
