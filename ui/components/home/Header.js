import React from 'react';
import {connect} from 'react-redux';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';
import './Header.css'

function Header() {
    return (
        <header className='Header-wrp'>
            <div className='Header'>
                <div className="Header-item">
                    <a className='Header-link' href='/'>
                        <img className='Header-logo' src='/icons/pharmacy.svg' alt='Linest Pharma'/>
                        <div className='Header-logo-txt'>Linest Pharma</div>
                    </a>
                </div>
                <div className="Header-user">
                    Pan M
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Header);