import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {httpThunk} from '../../actions/thunk/httpThunk';
import { saveVisitConfig, loadDdConfig } from '../../actions/thunk/httpThunkConfig';
import {TextField, Grid, Paper, Input, Select, Button, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckboxesTags from '../common/AutoCompleteChip';
import { getVisitAction } from '../../actions/sync-actions';
import axios from 'axios';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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
  ];
  

const append0 = (num) => `${num}`.length === 1 ? `0${num}` : num;

function AddCard({ onSaveVisitAction,edit}) {
    const today = new Date();
    const year = today.getFullYear();
    const month = append0(today.getMonth() + 1);
    const date = append0(today.getDate());
    const dateStr = `${year}-${month}-${date}`;
    const [otherComment, setOtherComment] = useState('');
    const [town, setTown] = useState('');
    const [chemist, setChemist] = useState('');
    const [doctor, setDoctor] = useState('');
    const [product, setProduct] = useState('');
    const [townOptions, setTownOptions] = useState([{"title": "Edit value", "value": "Edit value"}]);
    const [townIndex, setTownIndex] = useState(0);

    console.log(dateStr);
    
    
    
    const [selectedDate, setSelectedDate] = useState(dateStr);
    const handleDateChange = (event) => {
        console.log("event.target.value", event.target.value);
        setSelectedDate(date);
    }
    const onChangeOtherComment = event => {
        setOtherComment(event.target.value)
    }
    const onChangeTown = (event, v) => {
        if(!v || !v.value) return;
        for(let i=0; i<townOptions.length; i++){
            if(v.value ===  townOptions[i].value){
                setTownIndex(i);
                return;
            }
        }
    }
    const onTownBlur = (e, v) => {
        setTownOptions([
            {"title":  e.target.value, "value":  e.target.value},
            ...townOptions
        ])
        setTownIndex(0)
    }
    const onChangeChemist = event => {
        setChemist(event.target.value)
    }
    const onChangeDoctor = event => {
        setDoctor(event.target.value)
    }
    const onChangeProduct = (event, value)=> {
        const productStr = value.map(product => product.title).join(',')
        setProduct(productStr)
    }

    const saveVisit = () => {
      
        onSaveVisitAction({
            "otherComment": otherComment,
            "town"        : town,
            "chemist"     : chemist,
            "doctor"      : doctor,
            "product"     : product,
        })
    }
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('http://localhost:3000/ddData')
            setTownOptions(res.data.townOptions)

        }
        fetch()
    }, [])
    console.log('townOptions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>',townOptions)
    console.log('townIndex >>>>>>>>>>>>>>>>>>>>>>>>>>>>>',townIndex)
    
    return (
        <div className="AddCard">
            {/* <div className='static-paper'>
                <h3>Work Date</h3>
            </div> */}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className='paper addcard-paper'>
                        <h4>Add Detail</h4>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
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
                            <Grid item xs={4}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Visiting With" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Other Activities" variant="outlined" />}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    onChange = {onChangeTown}
                                    onBlur = {onTownBlur}
                                    value={townOptions[townIndex]}
                                    options={townOptions}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Town" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    onSelect = {onChangeDoctor}
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Doctor" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    onSelect = {onChangeChemist}
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Chemist" variant="outlined" />}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                            <Autocomplete
                                multiple
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                // defaultValue={[top100Films[13]]}
                                onChange = {onChangeProduct}
                                renderInput={(params) => (
                                    <TextField {...params} variant="outlined" label="Size small" placeholder="Favorites" />
                                )}
                            />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    error={false}
                                    id="outlined-error-helper-text"
                                    label="Other Comment"
                                    defaultValue={otherComment}
                                    // helperText="Incorrect entry."
                                    variant="outlined"
                                    multiline
                                    // rows={1}
                                    fullWidth
                                    onChange = {onChangeOtherComment}
                                    // InputLabelProps={{shrink: true,}}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} className='save-detail-wrp'>
                                <Button onClick = {saveVisit} className='save-detail'>Save</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
    error: state.error,
    loader: state.loader, 

})

const mapDispatchToProps = (dispatch) => {
    return {
        
        onSaveVisitAction: (payload) => dispatch(httpThunk(saveVisitConfig(payload))),
        loadDdData: () => dispatch(httpThunk(loadDdConfig())),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);

