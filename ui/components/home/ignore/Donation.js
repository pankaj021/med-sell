import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {DataTable} from '../pattern-lib';
import {getDonations} from '../../actions/donation-thunk'

function Donations({donations = [], getDonations}) {
    useEffect(() => {
        getDonations();
    }, []);
    let sum = 0, items = 0;
    const tableData = {
        th: ['S.N.', 'Target', 'Donated By', 'Amount'],
        tr: donations.map(({target, amount, donatedBy}, index) => {
            sum += amount;
            items++;
            return ({
                'S.N.': index + 1, 
                'Target': target.title, 
                'Donated By': donatedBy,
                'Amount': amount ? `${amount}₹` : 'Not Decided', 
            })
        })
    }
    if(items){
        tableData.tr.push({
            'S.N.': "Total", 
            'Target': '', 
            'Donated By': "",
            'Amount': `${sum}₹`, 
        })
    }
    return (
        <DataTable data={tableData}/>
    )
}

const mapStateToProps = (state) => ({
    donations: state.donations || []
});
const mapDispatchToProps = (dispatch) => ({
    getDonations: () => dispatch(getDonations())
})

export default connect(mapStateToProps, mapDispatchToProps)(Donations);