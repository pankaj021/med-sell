import React, { Fragment } from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import './HomePage.css';
import AddDetail from './AddDetail';
import ViewDetail from './ViewDetail';
import Loader from '../common/Loader';

function HomePage({loader, error, loginInfo, navView,}) {
    if(error.isError) return <div>{error.errorMsg}</div>
    if(loader.isLoading) return <Loader loadingMsg={loader.loadingMsg} />
    // if(!loginInfo.username) {
    //     return <Redirect to='/'/>
    // }
    if(navView.view === 1){
        return <AddDetail/>
    }
    if(navView.view === 2){
        return <ViewDetail/>
    }
}

const mapStateToProps = (state) => ({
    error: state.error,
    loader: state.loader,
    loginInfo: state.login,
    navView: state.navView
})

export default connect(mapStateToProps, null)(HomePage);