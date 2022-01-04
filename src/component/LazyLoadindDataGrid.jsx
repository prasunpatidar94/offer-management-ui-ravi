import React, { Suspense } from 'react';
import { Button, Container, Typography } from '@mui/material';
import loadable from './loadable';
import {
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';


// @material-ui/data-grid
const DataGrid = loadable(() =>
    import('@mui/x-data-grid').then(module => {
        return { default: module.DataGrid };
    }),
);

function CustomToolbar(props) {
    return (
        <GridToolbarContainer>
            <GridToolbarExport csvOptions={{ fileName: `Offers-${new Date()}` }} />
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
        </GridToolbarContainer>
    );
}
const LazyLoadindDataGrid = props => {
    const { col, rows, reportLable, rowDataHandler } = props;

    const coloum = col.map((element) => {

        let fieldRes;

        if (element === "Action") {
            fieldRes = {
                field: "Action",
                headerName: "Action",
                sortable: false,
                // width: 100,
                flex: 1,

                disableClickEventBubbling: true,
                renderCell: (params) => {
                    return <Button onClick={(data) => { rowDataHandler(params.row) }}>Update</Button>;
                }
            }
        } else {
            fieldRes = {

                field: element,
                flex: 1,
                sortable: false,
                // width: 150,
                // headerName: element.toUpperCase(),
            }
        }



        return fieldRes

    });

    return (

        <>

            <Container maxWidth="xl" style={{ fontSize: "101px", backgroundColor: "#ede7f6" }} >

                <Typography align="center" variant="h5" color="secondary">{reportLable}</Typography>
                <Suspense fallback={<Typography>Data is loading </Typography>}  >
                    <DataGrid
                        rows={rows}
                        columns={coloum}
                        autoHeight={true}
                        // autoPageSize={true}
                        // pageSize={100}
                        // pageSize={10}
                        // paginationMode="server"
                        // disableColumnSelector
                        rowsPerPageOptions={[50]}
                        pagination
                        pageSize={50}
                        // rowCount={100}
                        // paginationMode="server"
                        // onPageChange={(newPage) => setPage(newPage)}
                        // loading={loading}
                        components={{
                            Toolbar: CustomToolbar,

                        }}

                    />
                </Suspense>
            </Container>
        </>
    );
};

export default LazyLoadindDataGrid;