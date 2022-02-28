import React from "react"

import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DialogContent, DialogTitle, TextField, DialogActions, Button } from "@mui/material";
import { MuiStyles } from "../../../styles/Mui_styles";


function ReportBug({ openAdd, handleClose }) {
    
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    const inputsContainerStyle = {
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        justifyContent: 'center',
        textAlign: 'center'
    }

    const tfieldStyle = {
        margin: 10,
        minHeight: 50
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={openAdd}
                onClose={handleClose}
            >
                    <DialogTitle id="responsive-dialog-title" style={{minWidth: 400}}>
                        <p>New report ticket</p>
                    </DialogTitle>
                    <DialogContent style={inputsContainerStyle}>
                        <TextField style={tfieldStyle} id="outlined-basic" label="Title" variant="outlined" />
                        <TextField style={tfieldStyle}
                            id="outlined-basic"
                            label="Full ticket description"
                            variant="outlined"
                            multiline
                            rows={5}     
                            maxRows={20}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button style={MuiStyles.ButtonStyle} autoFocus variant="outlined" onClick={handleClose}>
                            Submit ticket
                        </Button>
                    </DialogActions>
            </Dialog>
        </div>
    )
}

export default ReportBug