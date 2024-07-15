import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { mockData } from "~/apis/mock-data"
import { capitalizeFirstLetter } from "~/utils/formatter";

const STYLE = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  padding: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function BoardBar({ board }) {
  return (
    <Box
      px={2}
      sx={{
        //   backgroundColor: "primary.main",
        width: "100%",
        height: (theme) => theme.custom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderTop: " 1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Chip 
          sx={STYLE} 
          icon={<DashboardIcon />} 
          label={board?.title} 
          clickable 
        />
        <Chip
          sx={STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip sx={STYLE} icon={<BoltIcon />} label="Automation" clickable />
        <Chip sx={STYLE} icon={<FilterListIcon />} label="Filter" clickable />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup 
          sx={{
            '& .MuiAvatar-root': {
                width:34,
                height:34,
                fontSize:16,
                border:'none',
                cursor:"pointer",
                color:'white',
                '&:first-of-type': { bgcolor:'#a4b0be'}
            }
          }}  
          max={4}
        >
          <Tooltip tittle="Datdz">
            <Avatar
              alt="Datdz"
              src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-9-5-diem-huan-hoa-hong.jpg"
            />
          </Tooltip>
          <Tooltip tittle="Datdz">
            <Avatar
              alt="Datdz"
              src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-9-5-diem-huan-hoa-hong.jpg"
            />
          </Tooltip>
          <Tooltip tittle="Datdz">
            <Avatar
              alt="Datdz"
              src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-9-5-diem-huan-hoa-hong.jpg"
            />
          </Tooltip>
          <Tooltip tittle="Datdz">
            <Avatar
              alt="Datdz"
              src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-9-5-diem-huan-hoa-hong.jpg"
            />
          </Tooltip>
          <Tooltip tittle="Datdz">
            <Avatar
              alt="Datdz"
              src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-9-5-diem-huan-hoa-hong.jpg"
            />
          </Tooltip>
          <Tooltip tittle="Datdz">
            <Avatar
              alt="Datdz"
              src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-9-5-diem-huan-hoa-hong.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
