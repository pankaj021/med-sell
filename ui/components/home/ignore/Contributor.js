import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {DataTable} from '../pattern-lib';
import {getContributors} from '../../actions/contributor-thunk'

function Contributors({contributors = [], getContributors}) {
    useEffect(() => {
        getContributors();
    }, []);

    const tableData = {
        th: ['S.N.', 'Name', 'Phone', 'Email', "Total Donations"],
        tr: contributors.map(({name, phone, email, totalDonations}, index) => (
            {
                'S.N.': index + 1,
                'Name': name, 
                'Phone': phone, 
                'Email': email, 
                'Total Donations': totalDonations ? `${totalDonations}₹` : `2000₹`,
            }
        ))
    }
    
    return (
        <DataTable data={tableData}/>
    )
}

const mapStateToProps = (state) => ({
    contributors: state.contributors || []
});
const mapDispatchToProps = (dispatch) => ({
    getContributors: () => dispatch(getContributors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contributors);