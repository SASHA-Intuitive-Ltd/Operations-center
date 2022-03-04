import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Fab } from '@mui/material';
import { More, MoreHoriz, MoreOutlined } from '@mui/icons-material';
import MoreInfo from '../Dialogs/MoreInfo'


const columns = [
  { 
    id: 'topic',
    label: 'Topic'
  },
  { 
    id: 'date',
    label: 'Date'
  },
  {
    id: 'patient',
    label: 'Patient',
  },
  {
    id: 'link',
    label: 'Meeting link',
  },
  {
    id: 'actions',
    label: 'More Actions',
    width: 3,
  },
];

function createData(topic, date, patient, link, actions) {
  return { topic, date, patient, link, actions};
}

const rows = [
  createData('Casual check', '2022-03-17T11:33:28.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>, 
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Prev heart surgery', '2022-03-17T12:33:28.806Z', 'John Doe', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Cris Walker`s room issue', '2022-03-19T12:33:30.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Casual check', '2022-04-17T12:33:28.806Z', 'John Doe', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Casual check', '2022-05-17T13:33:28.806Z', 'Philip Fischer',  <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>, 
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Casual check', '2022-03-17T11:33:28.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>, 
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Prev heart surgery', '2022-03-17T12:33:28.806Z', 'John Doe', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Cris Walker`s room issue', '2022-03-19T12:33:30.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Casual check', '2022-04-17T12:33:28.806Z', 'John Doe', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Casual check', '2022-05-17T13:33:28.806Z', 'Philip Fischer',  <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>, 
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Casual check', '2022-03-17T11:33:28.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>, 
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Prev heart surgery', '2022-03-17T12:33:28.806Z', 'John Doe', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Cris Walker`s room issue', '2022-03-19T12:33:30.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Casual check', '2022-04-17T12:33:28.806Z', 'John Doe', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>,
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
  createData('Casual check', '2022-05-17T13:33:28.806Z', 'Philip Fischer',  <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>, 
  <Button style={{width: '100%', color: 'var(--global-primary)'}}><MoreHoriz/></Button>),
];

export default function MeetingsList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false)

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
  };

  return (
    <div>
      <TableContainer sx={{ maxHeight: '700px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
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
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell className='cell' key={column.id} align={column.align}
                            style={{
                                width: column.width,
                                border: '0.5px solid var(--global-grey)',
                                textAlign: 'justify' 
                            }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <MoreInfo openAdd={open} handleClose={handleClose} info={['Casual check', '2022-03-17T11:33:28.806Z', 'Cris Walker', 'https://zoom.us/']}/>
    </div>
  );
}
