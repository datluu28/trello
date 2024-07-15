import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Card as Muicard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
function Card({ card }) {
  const shouldShowCardActions = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
}
  return (
    <Muicard sx={{ 
        cursor:'pointer',
        boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow:'unset'
      }}>
        {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
        <CardContent sx={{ p:1.5, '&:last-child': {p:1.5} }}>
          <Typography>{card?.title}</Typography>
        </CardContent>
        {shouldShowCardActions () && 
          <CardActions sx={{ p:'0 4px 8px 4px' }}>
          {!!card?.memberIds?.length && <Button size="small" startIcon={<GroupIcon />}>{card?.memberIds?.length}</Button>}
          {!!card?.comments?.length && <Button size="small" startIcon={<ChatIcon />}>{card?.comments?.length}</Button>}
          {!!card?.attachments?.length && <Button size="small" startIcon={<AttachFileIcon />}>{card?.attachments?.length}</Button>}
          </CardActions>
        }
      </Muicard>
  )
}

export default Card
