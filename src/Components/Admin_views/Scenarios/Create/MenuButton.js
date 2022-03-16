// React imports & configs
import React, { useState } from 'react'
import  { MuiStyles } from '../../../../styles/Mui_styles'


// MUI Icons & Components
import { styled, alpha } from '@mui/material/styles';
import { Fab, IconButton, Menu } from "@mui/material"
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
    '.MuiList-root .MuiList-padding .MuiMenu-list .css-6hp17o-MuiList-root-MuiMenu-list': {
        display: 'flex',
        flexDirection: 'row'
    }
  }));

// Function for handling button menu opening and actions
export default function MenuButton({ setTrigger, setOpen }) {

    // Menu opening state
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // Menu options array
    const menuOptions = [
        {
            ref: 'add',
            icon: 
            <IconButton style={{ ...MuiStyles.OptionsButtonStyle, borderRadius: '50%', backgroundColor: 'var(--global-primary)' }}>
                <AddIcon className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'white' }}/>
            </IconButton>
        },
        {
            ref: 'save',
            icon:
            <IconButton style={{ ...MuiStyles.OptionsButtonStyle, borderRadius: '50%', backgroundColor: 'orange' }}>
                <SaveIcon className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'white'}}/>
            </IconButton>
        },
        {
            ref: 'dismiss',
            icon: 
            <IconButton style={{ ...MuiStyles.OptionsButtonStyle, borderRadius: '50%', backgroundColor: '#FE3113' }}>
                <CloseIcon className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'white'}}/>
            </IconButton>
        },
    ]

    // Menu button pressing handlers
    const handleClick = (event) => {
        // console.log(event)
        setAnchorEl(event.currentTarget) // Set anchor for current button
    }
    
    // Handle menu closing
    const handleClose = (ref) => {

        if (ref === 'add') {
            setOpen(true)
        }

        setAnchorEl(null) // Clear anchor
    }

    return (
        <div>
            <IconButton style={{ ...MuiStyles.OptionsButtonStyle, borderRadius: '50%' }} onClick={handleClick}>
                <MoreVertIcon  className="button-icon" style={{...MuiStyles.IconContentStyle1, color: 'grey'}}/>
            </IconButton> 

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
                    menuOptions.map((element) => {
                        return (
                            <div key={element.ref} onClick={() => handleClose(element.ref)}>
                                { element.icon }
                            </div>
                        )
                    })
                }
            </StyledMenu> 
        </div>
    )
}