import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';



const OffersComponent = (props) => {
    return (<>

    </>);
}


function NonEditableDataTable(props) {

    const { row } = props;

    return (
        <>
            <TableContainer >
                <Table size="small" >
                    <TableHead style={{ backgroundColor: "#bbdefb" }}>
                        <TableRow>
                            <TableCell align="center">Offer Name</TableCell>
                            <TableCell align="center">Offer Type</TableCell>
                            <TableCell align="center">  Category</TableCell>
                            <TableCell align="center">Channel</TableCell>
                            <TableCell align="center">Cluster</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ backgroundColor: "#e3f2fd" }}>
                        <TableRow
                            key={1} >
                            <TableCell align="center">{row.offerName}</TableCell>
                            <TableCell align="center">{row.offerType}</TableCell>
                            <TableCell align="center" >{row.category}</TableCell>
                            <TableCell align="center">{row.channel}</TableCell>
                            <TableCell align="center">{row.cluster}</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default OffersComponent;
export { NonEditableDataTable };