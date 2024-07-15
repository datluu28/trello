import React from 'react'
import Box from '@mui/material/Box'
import Card from './Card/Card'


function ListCards({ cards }) {
  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:1,
        p:'0 5px',
        m:'0 5px',
        overflowX:'hidden',
        overflowY:'auto',
        '&::-webkit-scrollbar-thump': {backgroundColor: "#ced0da"},
        '&::-webkit-scrollbar-track': { m:'0 2px'},
        '&::-webkit-scrollbar-thump:hover': {backgroundColor: "#bfc2cf"},
        maxHeight: (theme) => `calc(${theme.custom.contentHeight} - ${theme.spacing(5)} - ${theme.custom.columnHeaderHeight} - ${theme.custom.columnFooterHeight})`,
      }}>
      {cards?.map(card => <Card key={card._id} card={card} />)}
      </Box>
  )
}

export default ListCards
