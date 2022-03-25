import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Button } from "@mui/material"

import { MuiStyles } from '../../../styles/Mui_styles'




function Performance() {
    return(
        <div className='performance'>
            <div className='title-w-button'>
                <h1 style={{fontSize: 'x-large'}}>Performance</h1>
                <Button className="history-button" >History</Button>
            </div>

            <div className='pref'>
                <h4>Transition time</h4>
                <LinearProgress valueBuffer={80} style={MuiStyles.LineProgStyle} color="primary" variant="buffer" value={80}/>
            </div>
            <div className='pref'>
                <h4>Left hand amplitude motion</h4>
                <LinearProgress valueBuffer={40} style={MuiStyles.LineProgStyle} color="primary" variant="buffer" value={40}/>
            </div>
            <div className='pref'>
                <h4>Right hand amplitude motion</h4>
                <LinearProgress valueBuffer={50} style={MuiStyles.LineProgStyle} color="primary" variant="buffer" value={50}/>
            </div>
        </div>
    )
}

export default Performance