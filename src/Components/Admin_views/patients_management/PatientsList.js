import { da } from 'date-fns/locale'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
import { getCardActionsUtilityClass } from '@mui/material'


import { styled, alpha } from '@mui/material/styles';
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
        {
            title: 'Age',
            ref: 'age'
        },
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
                                    fontSize: 'medium'
                                }}
                            >
                                {
                                    column.ref === null ?
                                    getMoreOptionsMenu(data)
                                    : data[column.ref]
                                }
                            </TableCell>
                        );
                    })
                }
                </TableRow>
            )
        })
    }

    async function beforeRunning() {
        setComps([])
        
        if(comps.length === 0) {

            await fetch(`http://localhost:5000/admins/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.patients)
                data.patients.map((patient) => {
                    getPatientComp(patient)
                })
            })
        }

    }

    useEffect(() => {
        beforeRunning()
        setTrigger(false)
    }, [id, updateTrigger])

    return (
        <div>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        {
                            columns.map((column) => (
                                <TableCell
                                    key={column.ref}
                                    style={{ 
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
                            ))
                        }
                    </TableHead>
                    <TableBody>
                        {comps}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}