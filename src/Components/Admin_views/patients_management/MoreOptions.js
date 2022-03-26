import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MuiStyles } from '../../../styles/Mui_styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'

// Dialogs import
import UpdatePatient from '../Dialogs/UpdatePatient'
import DeletePatient from '../Dialogs/DeletePatient';

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
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 90,
    borderRadius: 20,
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

export default function MoreOptions({patientInfo, setTrigger}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }


  const moreOptions = [
    {
        name: 'Edit',
        icon: <EditIcon/>
    },
    {
        name: 'Delete',
        icon: <DeleteIcon/>
    },
    {
        name: 'View',
        icon: <PersonIcon/>
    },
  ]

  const handleClickOpen = () => {
    setOpenEdit(true);
  }

  // Handle dialog closing
  const handleCloseDia = () => {
    setOpenEdit(false);
  }

  const handleClickOpenDel = () => {
    setOpenDelete(true);
  }

  // Handle dialog closing
  const handleCloseDel = () => {
    setOpenDelete(false);
  }

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
                            element.name === 'Edit'
                            ?
                                <MenuItem onClick={() => {
                                    handleClickOpen()
                                    handleClose()
                                  }
                                 } disableRipple
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
                            element.name === 'Delete'
                            ?
                                <MenuItem onClick={() => {
                                  handleClickOpenDel()
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
                            element.name === 'View' 
                            ?
                                <Link to={`/patient/${patientInfo._id}`}>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        {element.icon}
                                        {element.name}
                                    </MenuItem>
                                </Link>
                            :
                            null
                        }
                    </div>
                )
            })
        }
      </StyledMenu>
      <UpdatePatient patientInfo={patientInfo} openAdd={openEdit} handleClose={handleCloseDia} setTrigger={setTrigger}/>
      <DeletePatient patientInfo={patientInfo} open={openDelete} handleClose={handleCloseDel} setTrigger={setTrigger}/>
    </div>
  )
}