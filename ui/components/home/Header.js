import React, {useState} from 'react';
import {connect} from 'react-redux';
import {selectNavView} from '../../actions/sync-actions';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';
import './Header.css'

function Header({loginInfo, navView, selectNavView,visitInfo}) {
    const isLoginPage = window.location.pathname === "/";
    const onClickNav1 = () => selectNavView(1);
    const onClickNav2 = () => selectNavView(2);
    return (
        <header className='Header-wrp'>
            <div className='Header'>
                <div className="Header-item">
                    <a className='Header-link' href='/'>
                        <img className='Header-logo' src='/icons/pharmacy.svg' alt='Linest Pharma'/>
                        <div className='Header-logo-txt'>Linest Pharma</div>
                    </a>
                    {!isLoginPage && loginInfo.username && <div className="Header-Action">
                        <a className={`hd-action-i ${navView.addActiveClass}`} onClick={onClickNav1}>Add</a>
                        <a className={`hd-action-i ${navView.viewActiveClass}`} onClick={onClickNav2}>View</a>
                    </div>}
                </div>
                {!isLoginPage && loginInfo.username && <div className="Header-item Header-user">
                    {`Hi ${loginInfo.username} `}
                </div>}
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    loginInfo: state.login,
    navView: state.navView,
    visitInfo: state.visit,

})
const mapDispatchToProps = (dispatch) => ({
    selectNavView: (navView) => dispatch(selectNavView(navView))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);