import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./Table.css"


function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Frozen yoghurt', 1000159, "2 March 2022", "Approved"),
  createData('Ice cream sandwich', 1000237, "2 March 2022", "Pending"),
  createData('Eclair', 1000262, "2 March 2022", "Approved"),
  createData('Cupcake', 1000305, "2 March 2022", "Pending"),
  createData('Gingerbread', 1000356, "2 March 2022", "Delivered"),
];

function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
        <TableContainer 
            component={Paper}
            style={{ boxShadow: "0 13px 20px 0 #80808029"}}
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="left">Tracking ID</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.trackingId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="left">{row.trackingId}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">
                                <span className="status" style={setStatusStyle(row.status)}>
                                    {row.status}
                                </span>
                            </TableCell>
                            <TableCell align="left" className="details">Details</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

function setStatusStyle(status){
    if(status === "Approved"){
        return {
            background: "rgb(170, 250, 180)",
            color: "green"
        }
    }
    if(status === "Pending"){
        return {
            background: "#ffadad8f",
            color: "red"
        }
    }
    if(status === "Delivered"){
        return {
            background: "#59bfff",
            color: "white"
        }
    }
}

export default BasicTable
