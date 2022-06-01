import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Card } from '@mui/material';
import { More, MoreHoriz, MoreOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom'
import MoreOptions from './MoreOptions';
import { MuiStyles } from '../../../styles/Mui_styles';
import { ExportToExcel } from '../../../export/ExelExport'


function createData(topic, date, patient, link, actions) {
  return { topic, date, patient, link, actions };
}

const rows = [
  createData('Casual check', '2022-03-17T11:33:28.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>, 
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
];

export default function MeetingsList() {

  const { id } = useParams()
  const [ adminInfo, setInfo ] = useState("")

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false)
  const [updateTrigger, setTrigger] = useState(false)

  const [ comps, setComps ] = useState([])
  const addComp = (newComp) => {
      setComps((c) => [...c, newComp])
  }

  const [ meetings, setMeetings ] = useState([])
  const addMeeting= (newMeeting) => {
    setMeetings((m) => [...m, newMeeting])
}

  // Table columns
  const columns = [
    { 
      ref: 'topic',
      title: 'Topic'
    },
    { 
      ref: 'date',
      title: 'Date'
    },
    {
      ref: 'user',
      title: 'Patient',
    },
    {
      ref: 'link',
      title: 'Meeting link',
    },
    {
      ref: null,
      title: 'More Actions',
    },
  ]

  // Handle dialogs opening
  const handleClickOpen = () => {
    setOpen(true);
  }

  // Handle dialog closing
  const handleClose = () => {
    setOpen(false);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  
  // Get more option for handling meeting
  function getMoreOptionsMenu(meeting) {
    return (
      <MoreOptions meetingInfo={meeting} setTrigger={setTrigger}/>
    )
  } 

  // Function for date formatting (better ux)
  function getDateFormat(date) {
    if (typeof date === "string") {
        var sliceDate =  date.substring(0, 10).split('-')
        var sliceTime = date.substring(11, 16)

        return sliceDate[2] + '/' + sliceDate[1] + '/' + sliceDate[0] + ' at '
        + sliceTime
    }
    return date
  }

  // Function for retrieving component of single meeting
  async function getMeetingComp(meeting) {
      addMeeting(meeting)
      addComp(
          <TableRow hover role="checkbox" key={meeting._id}>
          {
            columns.map((column) => {
              
              return (
                <TableCell className='cell'
                  style={{ ...MuiStyles.CellStyle, textAlign: 'center', border: 'none', borderBottom: '0.5px solid var(--global-grey)' }}
                >
                  {
                    column.ref === null ?
                    getMoreOptionsMenu(meeting)
                    :
                    <>
                      {
                        column.ref === 'link' ?
                        <a href={meeting[column.ref]}>{meeting[column.ref]}</a> 
                        :
                        <>
                          {
                            column.ref === 'date' ? 
                            <p>{getDateFormat(meeting[column.ref])}</p>
                            :
                            meeting[column.ref]
                          }
                        </>
                      }
                    </>
                  }
                </TableCell>
              )
            })
          }
          </TableRow>
        )
  }

  // Get admin's info
  async function getAdminInfo() {
      await fetch(`https://operations-center-dev.herokuapp.com/admins/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.fullname)
      })
  }

  // Function that runs on each page initiation or after changing the meetings info
  async function beforeRunning() {
    
      setComps([])      

      if (adminInfo === '') {
        getAdminInfo()
      }

      if(comps.length === 0 && adminInfo !== '') {
          await fetch(`https://operations-center-dev.herokuapp.com/meetings/byAdmin/${adminInfo}`)
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
              data.map((meeting) => {
                getMeetingComp(meeting)
              })
          })
      }
  }

  // Function for getting data into the table when its triggered
  useEffect(() => {
    beforeRunning()
    setTrigger(false)
  }, [id, updateTrigger, adminInfo])

  return (
    <div className='landing'>
      <Card style={MuiStyles.TableCard}>
        <div style={{ width: '100%', padding: 10 }}>
          <ExportToExcel fileData={ meetings } fileName={ `${adminInfo}_sasha_remote_meetings` }/>
        </div>  
        <TableContainer sx={MuiStyles.TableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {
                  columns.map((column) => {
                    return(<TableCell
                      key={column.title}
                      align={column.align}
                      style={{ 
                          backgroundColor: 'white',
                          color: 'black',
                          textAlign: 'center',
                          borderBottom: '0.5px solid var(--global-grey)',
                          fontWeight: 600,
                          fontSize: 'large'
                      }}
                    >
                      {column.title}
                    </TableCell>)
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
                {/*comps.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {return row})*/}
              {
                comps
              }
            </TableBody>
          </Table>
        </TableContainer>
        
      </Card>
    </div>
  );
}
