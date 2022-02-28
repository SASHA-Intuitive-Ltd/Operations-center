import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { 
    id: 'topic',
    label: 'Topic',
    width: 5 },
  { 
    id: 'date',
    label: 'Date',
    width: 5 },
  {
    id: 'patient',
    label: 'Patient',
    width: 5,
  },
  {
    id: 'link',
    label: 'Meeting link',
    width: 5,
  },
  {
    id: 'actions',
    label: 'More Actions',
    width: 5,
  },
];

function createData(topic, date, patient, link) {
  return { topic, date, patient, link};
}

const rows = [
  createData('Casual check', '2022-03-17T11:33:28.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>),
  createData('Prev heart surgery', '2022-03-17T12:33:28.806Z', 'John Doe', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>),
  createData('Cris Walker`s room issue', '2022-03-19T12:33:30.806Z', 'Cris Walker', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>),
  createData('Casual check', '2022-04-17T12:33:28.806Z', 'John Doe', <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>),
  createData('Casual check', '2022-05-17T13:33:28.806Z', 'Philip Fischer',  <a href={'https://zoom.us/'}>{'https://zoom.us/'}</a>),
];

export default function MeetingsList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', marginTop: 5, marginBottom: 5, borderRadius: 5}}>
      <TableContainer sx={{ maxHeight: 600 }}>
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
    </Paper>
  );
}
