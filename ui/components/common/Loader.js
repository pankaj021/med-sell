import React from 'react';
import {connect} from 'react-redux';
import {CircularProgress} from '@material-ui/core'

function Loader({loadingMsg}) {
    return (
        <div className="Loader">
            <CircularProgress />
            <h3>{loadingMsg || "Please wait, loading data for you..."}</h3>
        </div>
    )
}

export default Loader;