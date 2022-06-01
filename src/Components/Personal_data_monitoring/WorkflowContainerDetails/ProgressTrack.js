import React, { useEffect, useLayoutEffect, useState } from "react"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { MuiStyles } from '../../../styles/Mui_styles'
import { Tooltip } from "@mui/material";


function ProgressTrack({ _id }) {
    const [workflow, setWorkflow] = useState({ })
    
    const checkpointProgressStateStyle = {height: "35px", width: "35px", border: "1px solid black"}

    const getItems = () => {
        var elements = []

        var steps = workflow.steps
        if (steps) {

            elements.push(
                <div>
                    Timer: {workflow.timer / 10} seconds passed
                </div>
            )

            var i = 1
            for (var key in steps) {
                var prog = 'not-started'

                if(steps[key] < workflow.timer) {
                    prog = 'finished'
                }

                elements.push(
                    <Tooltip title={`${key}: ${prog}`} arrow placement="bottom" sx={{ m: 0 }}>
                        <div key={i} className="checkpoint">
                            <div className={`checkpoint-progress ${prog}`} style={checkpointProgressStateStyle}><p>{i}</p></div>
                        </div>
                    </Tooltip>
                );
                i++
            }
        }


        // TODO: Hnadle empty elements list (only timerr inserted..)
        return elements
    }

    async function getWorkflowState() {
        await fetch(`https://operations-center-dev.herokuapp.com/workflows/${_id}`)
        .then((response) => response.json())
        .then((data) => {
            setWorkflow(data)
        })
    }
    
    useEffect(() => {
        //if (!workflow.steps) {
        getWorkflowState()
        // }
    }, [workflow])

    return (
        <div className="progress-track">
            {/* <h3>Device in use: <span style={{fontWeight: 600, textTransform: 'capitalize'}}></span></h3> */}
            {
                getItems()
            }
        </div>
    )
}

export default ProgressTrack