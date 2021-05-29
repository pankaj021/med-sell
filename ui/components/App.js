import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import LoginPage from './login/LoginPage';
import Header from './home/Header';
import Body from './home/Body';
import MRDashboard from './mr-page/MRDashboard';

function App ({isLoading, isError, loadMsg, errorMsg}){
    if (isError) 
        return <div>error .......</div> ;
    if (isLoading) 
        return <div>'loading .......'</div>;
    return (
        <BrowserRouter>
            <div className='max-ht'>
                <Header/>
                <Switch>
                    <Body>
                        <Route exact path='/' component={LoginPage}/>
                        <Route path='/mr-page' component={MRDashboard}/>
                    </Body>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error
})

export default connect(mapStateToProps, null)(App);