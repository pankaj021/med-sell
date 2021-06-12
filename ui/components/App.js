import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import LoginPage from './login/LoginPage';
import Header from './home/Header';
import Body from './home/Body';
import HomePage from './home/HomePage';

function App (){
    return (
        <div className='max-ht'>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Body>
                        <Route exact path='/' component={LoginPage}/>
                        <Route path='/home' component={HomePage}/>
                    </Body>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = null;

export default connect(mapStateToProps, null)(App);