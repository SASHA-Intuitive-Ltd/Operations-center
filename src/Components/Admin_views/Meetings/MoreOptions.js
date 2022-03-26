import React, { useState } from "react"

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MuiStyles } from '../../../styles/Mui_styles';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import MoreInfo from "../Dialogs/MoreInfo";
import DeleteMeeting from "../Dialogs/DeleteMeeting";
import UpdateMeeting from "../Dialogs/UpdateMeeting";

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      marginTop: theme.spacing(1),
      borderRadius: 20,
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '0px 0',
      },
      '& .MuiMenuItem-root': {
          color: theme.palette.text.primary,
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
    '.css-6hp17o-MuiList-root-MuiMenu-list': {
      borderRadius: 20,
      backgroundColor: '#F4F9F6',
      border: '2px solid var(--global-grey-darker)'
    }
  }));

export default function MoreOptions({meetingInfo, setTrigger}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [ type, setType ] = useState('info')
  const [ openDia, setOpen ] = useState(false)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const onClickOpen = () => {
    setOpen(true)
}

  const handleCloseDia = () => {
    setOpen(false)
  }


  const moreOptions = [
    {
        name: 'Edit meeting',
        icon: <EditIcon/>
    },
    {
        name: 'Unbook meeting',
        icon: <BookmarkRemoveIcon/>
    },
    {
        name: 'Meeting info',
        icon: <VisibilityIcon/>
    },
  ]

  return (
    <div>
        <Button
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          style={MuiStyles.OptionsButtonStyle}
          onClick={handleClick}
        >
            <MoreVertIcon/>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
        {
            moreOptions.map((element) => {
                return (
                    <div>
                        {
                            element.name === 'Edit meeting'
                            ?
                                <MenuItem onClick={() => {
                                    setType('edit')
                                    onClickOpen()
                                    handleClose()
                                }} disableRipple
                                style={{ 
                                  borderBottom: '0.5px solid'
                                }}
                                >
                                    {element.icon}
                                    {element.name}
                                </MenuItem>  
                            : 
                            null
                        }
                        {
                            element.name === 'Unbook meeting'
                            ?
                                <MenuItem onClick={() => {
                                  setType('delete')
                                    onClickOpen()
                                    handleClose()
                                }} disableRipple
                                style={{ 
                                  borderBottom: '0.5px solid'
                                }} 
                                >
                                    {element.icon}
                                    {element.name}
                                </MenuItem> 
                            : 
                            null
                        }
                        {
                            element.name === 'Meeting info' 
                            ?
                                    <MenuItem onClick={() => {
                                      setType('info')
                                      onClickOpen()
                                      handleClose()
                                    }} disableRipple
                                    
                                    >
                                        {element.icon}
                                        {element.name}
                                    </MenuItem>
                            :
                            null
                        }
                    </div>
                )
            })
        }
        </StyledMenu>
        <div>
          { type === 'info' ? <MoreInfo info={meetingInfo} openAdd={openDia} handleClose={handleCloseDia}/> : null }
          { type === 'delete' ? <DeleteMeeting meetingInfo={meetingInfo} open={openDia} handleClose={handleCloseDia} setTrigger={setTrigger}/> : null }
          { type === 'edit' ? <UpdateMeeting meetingInfo={meetingInfo} open={openDia} handleClose={handleCloseDia} setTrigger={setTrigger}/> : null }
        </div>
    </div>
  )
}