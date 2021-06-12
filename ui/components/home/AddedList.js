import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function AddedList() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const columns = [
        { id: 'id', label: 'ID', width: 90 },
        { id: 'chemist', label: 'Chemist', width: 200 },
        { id: 'town', label: 'Town', width: 200 },
        { id: 'product', label: 'product', width: 200 },
        { id: 'edit', label: 'Edit', width: 150 },
        { id: 'delete', label: 'Delete', width: 150 },
    ];

    const rows = [
        { id: 1, chemist: 'Snow', town: 'North King', product: 'CobidSheild'},
        { id: 2, chemist: 'Lannister', town: 'Mumbai Andheri', product: 'CoBaxin'},
        { id: 3, chemist: 'Lannister', town: 'Ocean city', product: 'ZenPac'},
        { id: 4, chemist: 'Stark', town: 'Bekpur teku', product: 'TicTacMed'},
        { id: 5, chemist: 'Targaryen', town: 'Austra Nagar', product: 'Riztix Oil'},
        { id: 6, chemist: 'Melisandre', town: null, product: 'Revant Powder'},
        { id: 7, chemist: 'Clifford', town: 'Ferrara', product: 'Baki Tek Fex'},
        { id: 8, chemist: 'Frances', town: 'Rossini', product: 'Letpot G 500'},
        { id: 9, chemist: 'Roxie', town: 'Harvey', product: 'Pizz Lat'},
    ];

    return (
        <div className='AddedList'>
            <h3>View Added items</h3>
            <Paper className='paper'>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {
                                columns.map((column) => {
                                    const value = row[column.id];
                                    if(column.id === 'edit') {
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                <EditIcon color="primary"/>
                                            </TableCell>
                                        );
                                    }
                                    if(column.id === 'delete') {
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                <DeleteIcon color="secondary"/>
                                            </TableCell>
                                        );
                                    }
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                    );
                                })
                            }
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
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}
