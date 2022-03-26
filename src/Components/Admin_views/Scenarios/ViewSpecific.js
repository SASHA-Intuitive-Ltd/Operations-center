// Import React modules
import React from "react"
import { MuiStyles } from "../../../styles/Mui_styles"
import { useHistory, useParams } from "react-router-dom"

import { Fab } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"

// Function for view basic scenarios (later on: edit)
export default function ViewSpesific() {

    const { id } = useParams()
    const history = useHistory()

    return (
        <div>
            View specific

            <Fab onClick={() => {
                        history.push(`/scenarios/${id}`)
                    }}
                    style={ MuiStyles.FabStyle }
                    className='insert-fab' 
                >
                <ArrowForward className='fab-icon' style={{color: "var(--global-primary)"}}/>
            </Fab>
        </div>
    )
}