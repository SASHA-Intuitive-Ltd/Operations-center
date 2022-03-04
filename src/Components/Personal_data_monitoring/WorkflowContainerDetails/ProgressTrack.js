import React, { useEffect, useLayoutEffect, useState } from "react"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { MuiStyles } from '../../../styles/Mui_styles'
import { Tooltip } from "@mui/material";


function ProgressTrack({ currentDevice }) {
    const [checkpoints, setCheckpoints] = useState(require('../../../configs/tests.json').device_checkpoints[currentDevice])
    const [elements, setElements] = useState([])
    const [progress, setProgress] = useState(50)

    const themes = require('../../../configs/tests.json').theme

    const checkpointProgressStateStyle = {height: "35px", width: "35px", border: "1px solid black"}

    const getItems = () => {
        checkpoints.forEach(element => {
            elements.push(
                <Tooltip title={`${element.name}: ${element.progress}`} arrow placement="bottom" sx={{ m: 0 }}>
                    <div key={element.index} className="checkpoint">
                        <div className={`checkpoint-progress ${element.progress}`} style={checkpointProgressStateStyle}><p>{element.index}</p></div>
                    </div>
                </Tooltip>
            );
        })

        return elements
    }

    return (
        <div className="progress-track">
            <h3>Device in use: <span style={{fontWeight: 600, textTransform: 'capitalize'}}>{currentDevice}</span></h3>
            {
                getItems()
            }
            <p><b>Progress: {progress}%</b></p>
            <LinearProgress valueBuffer={progress} style={MuiStyles.LineProgStyle2} color="success" variant="buffer" value={progress}/>
        </div>
    )
}

export default ProgressTrack