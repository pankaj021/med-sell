import React, {useState} from 'react';
import {connect} from 'react-redux';
import {TextField, Grid, Paper, Input, Select, Button} from '@material-ui/core';

function AddCard() {
    const [selectedDate, setSelectedDate] = useState('');
    const handleDateChange = (event) => {
        console.log("event.target.value", event.target.value);
        setSelectedDate(date);
    }
    return (
        <div className="AddCard">
            <div className='static-paper'>
                <h3>Work Date</h3>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField
                            id="date"
                            label="Work Date"
                            type="date"
                            defaultValue={selectedDate}
                            className='TextField'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required={true}
                            onChange={handleDateChange}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className='paper addcard-paper'>
                        <h4>Add Detail</h4>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <TextField
                                    error={false}
                                    id="outlined-error-helper-text"
                                    label="Chemist"
                                    defaultValue=""
                                    // helperText="Incorrect entry."
                                    variant="outlined"
                                    fullWidth
                                    required={true}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    error={false}
                                    id="outlined-error-helper-text"
                                    label="Town"
                                    defaultValue=""
                                    // helperText="Incorrect entry."
                                    variant="outlined"
                                    fullWidth
                                    required={true}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    error={false}
                                    id="outlined-error-helper-text"
                                    label="Product"
                                    defaultValue=""
                                    // helperText="Incorrect entry."
                                    variant="outlined"
                                    fullWidth
                                    required={true}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <TextField
                                    error={false}
                                    id="outlined-error-helper-text"
                                    label="Other Comment"
                                    defaultValue=""
                                    // helperText="Incorrect entry."
                                    variant="outlined"
                                    required={true}
                                    multiline
                                    rows={2}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4} className='save-detail-wrp'>
                                <Button className='save-detail'>Save</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);