import React from "react"

import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DialogContent, DialogTitle, TextField, DialogActions, Button, getCardContentUtilityClass } from "@mui/material";
import { MuiStyles } from "../../../styles/Mui_styles";


export default function ProgressInfo({ openAdd, handleClose, stepTitle, prog }) {
    
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    function getContent() {
        if (stepTitle == 'Off') {
            return "Machine is off"
        }

        else if (stepTitle == 'Manual') {
            return "Machine is working manually"
        }

        else if (stepTitle != 'Off' && stepTitle != 'Manual' && prog === 'finished') {
            return `This step is finished`
        }

        else {
            return `This step isn't done yet`
        }

    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={openAdd}
                onClose={handleClose}
            >
                <div style={{
                    border: '3px solid var(--global-primary)',
                }}>
                    <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                        <h1 style={{...MuiStyles.TitleStyle, width: '100%', textAlign: 'center', fontSize: 'xx-large'}}>Current step: <u>{stepTitle}</u></h1>
                    </DialogTitle>
                    
                    <DialogContent>
                        <div>
                            <h6>
                            {
                                getContent()
                            }
                            </h6>
                        </div>
                    </DialogContent>
                    
                    <DialogActions>
                        <Button style={MuiStyles.ButtonStyle} autoFocus variant="outlined" onClick={handleClose}>
                            Dismiss
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}
