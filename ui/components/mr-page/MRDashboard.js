import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import './MRDashboard.css';

function MRDashboard({user, error}) {
    return (
        <div>
            Mr-page
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error
})

export default connect(mapStateToProps, null)(MRDashboard);