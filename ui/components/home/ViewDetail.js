import React, {useState} from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import GetAppIcon from '@material-ui/icons/GetApp';
import {TextField, Grid, Paper} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const append0 = (num) => `${num}`.length === 1 ? `0${num}` : num;

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function ViewDetail() {
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
    const today = new Date();
    const year = today.getFullYear();
    const month = append0(today.getMonth() + 1);
    const date = append0(today.getDate());
    const dateStr = `${year}-${month}-${date}`;
    console.log(dateStr);
    
    const [selectedDate, setSelectedDate] = useState(dateStr);
    const handleDateChange = (event) => {
        console.log("event.target.value", event.target.value);
        setSelectedDate(date);
    }
    const columns = [
        { id: 'workDate', label: 'Work Date', width: 200 },
        { id: 'areaWorked', label: 'Area Worked', width: 200 },
        { id: 'doctorVisitedCount', label: 'Doctor Visited Count', width: 200 },
        { id: 'leaveReason', label: 'Leave Reason', width: 200 },
        { id: 'otherActivities', label: 'Other Activities', width: 150 },
        { id: 'download', label: 'Download', width: 150 },
    ];

    const rows = [
        { workDate: new Date().toDateString(), areaWorked: 'Snow', doctorVisitedCount: '12', leaveReason: 'CobworkDateSheild', otherActivities: "None"},
        { workDate: new Date().toDateString(), areaWorked: 'Lannister', doctorVisitedCount: '12', leaveReason: 'CoBaxin', otherActivities: "None"},
        { workDate: new Date().toDateString(), areaWorked: 'Lannister', doctorVisitedCount: '4', leaveReason: 'ZenPac', otherActivities: "None"},
        { workDate: new Date().toDateString(), areaWorked: 'Stark', doctorVisitedCount: '0', leaveReason: 'TicTacMed', otherActivities: "None"},
        { workDate: new Date().toDateString(), areaWorked: 'Targaryen', doctorVisitedCount: '3', leaveReason: 'Riztix Oil', otherActivities: "None"},
        { workDate: new Date().toDateString(), areaWorked: 'Melisandre', doctorVisitedCount: null, leaveReason: 'Revant Powder', otherActivities: "None"},
        { workDate: new Date().toDateString(), areaWorked: 'Clifford', doctorVisitedCount: '', leaveReason: 'Baki Tek Fex', otherActivities: "None"},
        { workDate: new Date().toDateString(), areaWorked: 'Frances', doctorVisitedCount: '12', leaveReason: 'Letpot G 500', otherActivities: "None"},
        { workDate: new Date().toDateString(), areaWorked: 'Roxie', doctorVisitedCount: '23', leaveReason: 'Pizz Lat', otherActivities: "None"},
    ];

    return (
        <div className='ViewDetail'>
            <Grid container className='view-filter'>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <TextField
                            id="date"
                            label="Work Date"
                            type="date"
                            defaultValue={selectedDate}
                            className='TextField'
                            // InputLabelProps={{shrink: true,}}
                            required={true}
                            onChange={handleDateChange}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => <TextField {...params} label="Employee" variant="outlined" />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => <TextField {...params} label="Town" variant="outlined" />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => <TextField {...params} label="Chemist" variant="outlined" />}
                        />
                    </Grid>
                </Grid>
            </Grid>
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
                                    if(column.id === 'download') {
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                <GetAppIcon color="primary"/>
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
                    rowsPerPageOptions={[5, 10, 25, 100]}
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
