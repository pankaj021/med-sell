import React from 'react';
import {connect} from 'react-redux';
import './LoginPage.css'
import { getUserInfoSuccess, getUserInfoError } from '../../actions/sync-actions';
import {Error} from '../../pattern-lib';

function LoginPage({error, getUserInfoSuccess, getUserInfoError}) {
    if(error.isError) return <Error errorMsg={error.errorMsg}/>
    return (
        <div className="login">
            <div className='login-head'>
                <img src='/icons/google.svg' alt="Google"/>
                <h3>Sign in with Google</h3>
            </div>
            <div className='login-form'>
                <input type='text' placeholder='Email' className='u-input'/>
                <input type='password' placeholder="Password" className='u-input'/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    error: state.error
})

const mapDispatchToProps = (dispatch) => ({
    getUserInfoSuccess: (userInfo) => dispatch(getUserInfoSuccess(userInfo)),
    getUserInfoError: (userInfo) => dispatch(getUserInfoError(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);