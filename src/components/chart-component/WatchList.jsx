import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../styles/WatchList.css'
import { StyledTableCell, StyledTableContainer, StyledTableRow } from '../../styles/styled-component/WatchListStyle';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Sales', 1194.58.toLocaleString(), 11418.29.toLocaleString()),
    createData('Advertising', 6879.02.toLocaleString(), 927136.00.toLocaleString()),
    createData('Inventory', 4692.26.toLocaleString(), 9768.09.toLocaleString()),
    createData('Entertainment', 0.00.toLocaleString(), 0.00.toLocaleString()),
    createData('Product', 4652.10.toLocaleString(), 2529.90.toLocaleString()),
  ];

const BasicTable = () => {
    return (
      <div>
        <div className='watchlist-head'>
          Account watchlist
        </div>
        <hr className='watchlist-line'></hr>
        <div className='table-containers'>
          <StyledTableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className='table-heading'>Account&nbsp;</StyledTableCell>
                  <StyledTableCell className='table-heading' align="right">This Month&nbsp;</StyledTableCell>
                  <StyledTableCell className='table-heading' align="right">YTD&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        </div>
      </div>
    );
  }
  
  export default BasicTable;
