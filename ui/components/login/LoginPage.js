import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './LoginPage.css'
import { getUserInfoSuccess, getUserInfoError } from '../../actions/sync-actions';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
const MR_PAGE = '/mr-page';

function LoginPage({error}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [redirectTo, setRedirectTo] = useState('');
    const isValidUserName = (username) => {
        return !!username;
    }
    const isValidPassword = (password) => {
        return !!password;
    }
    const onChangeUsername = (event) => {
        const value = event.target.value;
        setUsername(value);
        if(isValidUserName(value)){
            setUserErr(false);
            setRedirectTo(value && password ? MR_PAGE : '');
        } else {
            setUserErr(true);
            setRedirectTo('');
        }
        return;
    }
    const onChangePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
        if(isValidPassword(value)){
            setPasswordErr(false);
            setRedirectTo(value && username ? MR_PAGE : '');
        } else {
            setPasswordErr(true);
            setRedirectTo('');
        }
        return;
    }
    const onLoginSubmit = () => {
        !username ? setUserErr(true) : setUserErr(false);
        !password ? setPasswordErr(true) : setPasswordErr(false);
        if(username && password) return setRedirectTo(`/mr-page`);
    }

    if(error.isError) return <div>error .......</div> ;
    return (
        <div className='Login-wrp'>
            <div className="login">
                <div className='login-head'>
                    <img className='login-img' src='/icons/pharmacy.svg' alt="Linest Pharma"/>
                    <h3>Login with your Official ID</h3>
                </div>
                <div className='login-form'>
                    <FormControl fullWidth={true} required={true} error={userErr} className='Login-input'>
                        <InputLabel htmlFor="user-input" >Username</InputLabel>
                        <Input value={username} onChange={onChangeUsername} type='text' id="username" aria-describedby="my-helper-text" fullWidth={true}/>
                    </FormControl>
                    <FormControl fullWidth={true} required={true} error={passwordErr} className='Login-input'>
                        <InputLabel htmlFor="password-input">Password</InputLabel>
                        <Input value={password} onChange={onChangePassword} type='password' id="password" aria-describedby="my-helper-text" fullWidth={true}/>
                    </FormControl>
                    <Link to={`${redirectTo}`} className='Login-link'>
                        <Button onClick={onLoginSubmit} className='Login-btn' fullWidth={true}>Login</Button>
                    </Link>
                </div>
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