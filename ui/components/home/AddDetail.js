import React from 'react';
import {connect} from 'react-redux';
import AddCard from './AddCard';
import AddedList from './AddedList';

function AddDetail() {
    return (
        <div>
            <AddCard/>
            <AddedList/>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(AddDetail);



