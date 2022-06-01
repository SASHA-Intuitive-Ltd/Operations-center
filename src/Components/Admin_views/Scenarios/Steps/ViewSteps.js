// React imports
import React, { useEffect, useState } from "react"
import { MuiStyles } from "../../../../styles/Mui_styles"

import { useHistory, useParams } from "react-router-dom"

import { Fab } from "@mui/material"
import { ArrowForward, Done, Close } from "@mui/icons-material"
// MUI imports
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Card } from '@mui/material'

export default function ViewSteps() {

    const { id } = useParams()
    const history = useHistory()
    
    const [ trigger, setTrigger ] = useState(false)
    const [ comps, setComps ] = useState([])

    const addComp = (newComp) => {
        setComps((c) => [...c, newComp])
    }

    const columns = [
        { 
            ref: 'title',
            title: 'Title'
        },
        { 
            ref: 'trigger',
            title: 'Trigger'
        },
        { 
            ref: 'isShown',
            title: 'Visibility'
        },
    ]

    async function getSteps() {
        await fetch('https://operations-center-dev.herokuapp.com/steps')
        .then((response) => response.json())
        .then((data) => {    
            data.map((step) => {
                getRows(step)
            })
            setTrigger(true)
        })
    }

    function getIsShown(isShown) {
        return isShown ? "Shown" : "Not shown"
    }

    function getRows(step) {
        addComp(
            <TableRow hover role="checkbox" key={step._id}>
            {
                columns.map((column) => {
                    var align = column.ref === 'title' ? 'left' : 'center'
                    return (
                        <TableCell className='cell' key={step[column.ref]}
                            style={{ 
                                backgroundColor: 'white',
                                color: 'black',
                                textAlign: align,
                                borderBottom: '0.5px solid var(--global-grey)',
                                fontWeight: 600,
                                fontSize: 'large'
                            }}
                        >
                        {
                            column.ref === 'isShown'
                            ?
                            <>{step['isShown'] ? <Done/>: <Close/>}</>
                            :
                            step[column.ref]
                        }
                        </TableCell>
                    )    
                })
            }
            </TableRow>
        )
    }

    // Function that runs on each page initiation or after changing the meetings info
    async function beforeRunning() {

        if (comps.length === 0) {
            getSteps()
        }

    }

    // Function for getting data into the table when its triggered
    useEffect(() => {
        beforeRunning()
        setTrigger(false)
    }, [trigger])

    return (
        <div className="landing">
            <Card style={ MuiStyles.TableCard }>
                <TableContainer sx={{ maxHeight: '700px' }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {
                            columns.map((column) => {
                                var align = column.ref === 'title' ? 'left' : 'center'
                                return (
                                    <TableCell
                                        key={column.title}
                                        align={'center'}
                                        style={{ 
                                            backgroundColor: 'white',
                                            color: 'black',
                                            borderBottom: '0.5px solid var(--global-grey)',
                                            textAlign: align,
                                            fontWeight: 600,
                                            fontSize: 'large'
                                        }}
                                        >
                                        {column.title}
                                    </TableCell>
                                )}
                            )
                        }
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                comps
                            }
                        </TableBody>
                        </Table>
                    </TableContainer> 
            </Card>       

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