// React imports & configs
import React, { useState } from 'react'
import  { MuiStyles } from '../../../../styles/Mui_styles'


// MUI Icons & Components
import { styled, alpha } from '@mui/material/styles';
import { Fab, IconButton, Menu, Tooltip } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

// Styled menu
const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}

      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        
      }}
      {...props}
    />
    ))(({ theme }) => ({
    '& .MuiPaper-root': {
      marginTop: theme.spacing(2),
    
    },
    '.css-6hp17o-MuiList-root-MuiMenu-list': {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#F4F9F6',
        border: '2px solid var(--global-grey-darker)'
    }
  }));

// Function for handling button menu opening and actions
export default function MenuButton({ setTrigger, setOpen, setType, saveToBackend }) {

    // Menu opening state
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // Menu options array
    const menuOptions = [
        {
            ref: 'add',
            icon: 
            <IconButton style={{ ...MuiStyles.OptionsButtonStyle, borderRadius: '50%', backgroundColor: 'var(--global-green)' }}>
                <AddIcon className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'white' }}/>
            </IconButton>
            ,
            side: 'left'
        },
        {
            ref: 'save',
            icon:
            <IconButton style={{ ...MuiStyles.OptionsButtonStyle, borderRadius: '50%', backgroundColor: 'orange' }}>
                <SaveIcon className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'white'}}/>
            </IconButton>
            ,
            side: 'bottom'
        },
        {
            ref: 'dismiss',
            icon: 
            <IconButton style={{ ...MuiStyles.OptionsButtonStyle, borderRadius: '50%', backgroundColor: 'var(--global-failed)' }}>
                <CloseIcon className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'white'}}/>
            </IconButton>
            ,
            side: 'right'
        },
    ]

    // Menu button pressing handlers
    const handleClick = (event) => {
        // console.log(event)
        setAnchorEl(event.currentTarget) // Set anchor for current button
    }
    
    // Handle menu closing
    const handleClose = (ref) => {
        // If ref is add new step
        if (ref === 'add') {
            setType('add')
            setOpen(true) // Set adding dialog open
        }

        else if (ref === 'save') {
            saveToBackend()
        }

        // If ref is dismiss, dismiss this menu, prevent menu closing on option choosing
        // if (ref === 'dismiss') {
        // else {
        setAnchorEl(null) // Clear anchor
        // }
        // }
    }

    return (
        <div>
            <IconButton style={{ ...MuiStyles.OptionsButtonStyle, borderRadius: '50%' }} onClick={handleClick}>
                <MoreVertIcon  className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'var(--global-grey-darker)'}}/>
            </IconButton> 

            <StyledMenu
                id="demo-customized-menu1"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {
                    menuOptions.map((element) => {
                        return (
                            <Tooltip key={element.ref} title={`${element.ref.charAt(0).toUpperCase() + element.ref.slice(1)}`} 
                                arrow placement={element.side} sx={{ m: 0 }}
                            >
                                <div onClick={() => handleClose(element.ref)}>
                                    {element.icon}
                                </div>
                            </Tooltip>
                        )
                    })
                }
            </StyledMenu> 
        </div>
    )
}