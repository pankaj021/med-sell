import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {DataTable} from '../pattern-lib';
import {getTarget} from '../../actions/target-thunk'

function Target({targets = [], getTarget}) {
    useEffect(() => {
        getTarget();
    }, []);

    const tableData = {
        th: ['S.N.', 'Title', 'Details', 'Target Amount'],
        tr: targets.map(({title, description, amount}, index) => (
            {
                'S.N.': index + 1, 
                'Title': title, 
                'Details': description, 
                'Target Amount': amount ? `${amount}₹` : 'Not Decided',
            }
        ))
    }
    
    return (
        <DataTable data={tableData}/>
    )
}

const mapStateToProps = (state) => ({
    targets: state.targets || []
});
const mapDispatchToProps = (dispatch) => ({
    getTarget: () => dispatch(getTarget())
})

export default connect(mapStateToProps, mapDispatchToProps)(Target);