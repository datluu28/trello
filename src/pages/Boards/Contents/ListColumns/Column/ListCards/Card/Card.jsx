import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Card as Muicard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
function Card() {
  return (
    <Muicard sx={{ 
        cursor:'pointer',
        boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow:'unset'
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.ctesolutions.com/wp-content/uploads/2022/07/What-Is-Trello-App.png"
          title="green iguana"
        />
        <CardContent sx={{ p:1.5, '&:last-child': {p:1.5} }}>
          <Typography> Đạt đz </Typography>
        </CardContent>
        <CardActions sx={{ p:'0 4px 8px 4px' }}>
          <Button size="small" startIcon={<GroupIcon />}>20</Button>
          <Button size="small" startIcon={<ChatIcon />}>15</Button>
          <Button size="small" startIcon={<AttachFileIcon />}>10</Button>
        </CardActions>
      </Muicard>
  )
}

export default Card
