// React imports
import React, { useEffect, useState } from "react"
import { MuiStyles } from "../../../../styles/Mui_styles"

// MUI imports
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

export default function ViewSteps() {
    
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
       // { 
         //   ref: 'isShow',
           // title: 'Visibility'
       // },
    ]

    async function getSteps() {
        await fetch('http://localhost:5000/steps')
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
                    return (
                        <TableCell className='cell' key={step[column.ref]}
                            style={{...MuiStyles.CellStyle}}
                        >
                        {
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
        <div>
            <TableContainer sx={{ maxHeight: '700px' }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.title}
                        align={'center'}
                        style={{ 
                                width: column.width,
                                backgroundColor: 'var(--global-primary)',
                                color: 'white',
                                border: '1px solid white',
                                textAlign: 'center',
                                fontWeight: 600,
                                fontSize: 'large'
                        }}
                        >
                        {column.title}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        comps
                    }
                </TableBody>
                </Table>
            </TableContainer>        
        </div>
    )
}