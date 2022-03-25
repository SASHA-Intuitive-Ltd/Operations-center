import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { MuiStyles } from '../../../styles/Mui_styles'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Avatar, Card} from '@mui/material'


import MoreOptions from './MoreOptions'

// Patients list table
export default function PatientsList({ activeFilters }) {

    const { id } = useParams()
    const [ comps, setComps ] = useState([])
    const addComp = (newComp) => {
        setComps((c) => [...c, newComp])
    }

    const [ updateTrigger, setTrigger ] = useState(false)

    // Table params
    const columns = [
        {
            title: 'Fullname',
            ref: 'fullname'
        },
        {
            title: 'Gender',
            ref: 'gender'
        },
        //{
          //  title: 'Age',
            //ref: 'age'
        //},
        {
            title: 'Email',
            ref: 'email'
        },
        {
            title: 'Address',
            ref: 'address'
        },
        {
            title: 'Phone',
            ref: 'phone'
        },
        {
            title: 'Actions',
            ref: null
        }
    ]

    function getMoreOptionsMenu(patient) {
        return (
            <MoreOptions patientInfo={patient} setTrigger={setTrigger}/>
        )
    }


    async function getPatientComp(patient) {
        await fetch(`http://localhost:5000/users/${patient}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            addComp(
                <TableRow hover role="checkbox" tabIndex={-1} key={patient._id}>
                {
                    columns.map((column) => {
                        var align = column.ref === null || column.ref === 'age' || column.ref === 'phone' ? 'center' : 'justify' 
                        
                        
                        return (
                            <TableCell className='cell'
                                style={{
                                    border: '0.5px solid var(--global-grey)',
                                    textAlign: align,
                                    fontWeight: 'bold',
                                    fontSize: 'medium',
                                }}
                            >
                                {
                                    column.ref === null
                                    ?
                                    getMoreOptionsMenu(data)
                                    : null
                                }
                                {
                                    column.ref === 'fullname' 
                                    ?
                                    <div>
                                        <div style={{  }}>
                                            {
                                                data.profileImg !== 'default' 
                                                ?
                                                <img style={{ padding: 0, width: 50, height: 50, border: '1px solid', borderRadius: 5 }} src={data.profileImg}/>
                                                : 
                                                <Avatar variant="square" sx={{ marginBottom: '5px', height: 50, border: '1px solid black', borderRadius: 2, width: 50, bgcolor: require("../../../configs/tests.json").theme.primary }}/>
                                            }
                                        </div>
                                        <Link className='link2' to={`/patient/${data._id}`}>{data[column.ref]}</Link>
                                    </div>
                                    :
                                    null
                                }
                                {
                                    column.ref === 'gender' 
                                    ?
                                    data['gender'].charAt(0).toUpperCase() + data['gender'].slice(1)
                                    :
                                    null
                                } 
                                {
                                    column.ref !== 'gender' && column.ref !== 'fullname'
                                    ?
                                    data[column.ref]
                                    :
                                    null
                                }
                            </TableCell>
                        );
                    })
                }
                </TableRow>
            )
        })
    }

    // Function for setting components before running
    async function beforeRunning() {
        
        // Reset comps list
        setComps([])
        
        // If the comps list is empty, not necessary term
        if(comps.length === 0) {

            // Fetch to users collection
            await fetch(`http://localhost:5000/users`)
            .then((response) => response.json())
            .then((data) => {
                // Per each patient, add new line component to the comps list
                data.map((patient) => {
                    getPatientComp(patient._id)
                })
            })
        }

    }

    // UseEffect hook, runs each time the page is loaded or user is being updated/deleted
    useEffect(() => {
        beforeRunning()
        setTrigger(false)
    }, [id, updateTrigger])

    return (
        <div className='landing'>
            <Card
                style={MuiStyles.TableCard}
            >
                <TableContainer style={MuiStyles.TableContainer}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            {
                                columns.map((column) => (
                                    <TableCell
                                        key={column.ref}
                                        style={{ 
                                                backgroundColor: 'white',
                                                color: 'black',
                                                border: '0.5px solid var(--global-grey)',
                                                textAlign: 'center',
                                                fontWeight: 600,
                                                fontSize: 'large'
                                        }}
                                        >
                                        {column.title}
                                    </TableCell>
                                ))
                            }
                        </TableHead>
                        <TableBody>
                            {comps}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}