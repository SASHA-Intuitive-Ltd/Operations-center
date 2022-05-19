import React, { useEffect, useState } from "react";


import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import { MuiStyles } from "../../styles/Mui_styles";
import { Card, Typography} from '@mui/material'

export default function ShowerMonitoring({ _id }) {
    
    const [ showerInfo, setInfo ] = useState({ })

    function getRows() {
        var comps = []

        if (showerInfo.shower)
        {
            for (var i = 0; i < showerInfo.shower.length; i++) {
                var part = showerInfo.shower[i]
                comps.push(
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                        <TableCell className='cell'
                            style={{
                                borderBottom: '0.5px solid var(--global-grey)',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 'medium',
                            }}
                        >
                            {part.replace(part.charAt(0), part.charAt(0).toUpperCase())}
                        </TableCell>
                        <TableCell className='cell'
                            style={{
                                borderBottom: '0.5px solid var(--global-grey)',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 'medium',
                            }}
                        >
                            {showerInfo.states[i] === false ? "Off": "On"}
                        </TableCell>
                    </TableRow>
                )
            }
        }

        return comps
    }

    useEffect( () => {
            fetch(`http://localhost:5000/device/${_id}`)
            .then((response) => response.json())
            .then(data => setInfo(data))
    }, [showerInfo])

    
    
    return (
        <Card
        className="graphs"
        // style={{
        //     ...MuiStyles.TableCard,
        //     margin: 0, 
        //     marginTop: 25, 
        //     borderColor: 'var(--global-grey)', 
        //     borderWidth: 2.5,
        //     boxShadow: 'none',
        // }}
        >   
            <Typography variant='h4' style={{ width: "100%", borderBottom: '2.5px solid var(--global-grey)', padding: 5}}>Shower</Typography>
            <TableContainer style={MuiStyles.TableContainer}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableCell
                            style={{ 
                                backgroundColor: 'white',
                                color: 'black',
                                textAlign: 'center',
                                borderBottom: '0.5px solid var(--global-grey)',
                                fontWeight: 600,
                                fontSize: 'large'
                            }}>
                            Part
                        </TableCell>
                        <TableCell
                            style={{ 
                                backgroundColor: 'white',
                                color: 'black',
                                textAlign: 'center',
                                borderBottom: '0.5px solid var(--global-grey)',
                                fontWeight: 600,
                                fontSize: 'large'
                            }}>
                                State
                            </TableCell>
                    </TableHead>
                    <TableBody>
                    {
                        getRows()
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}