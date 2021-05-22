import React from 'react';
import {connect} from 'react-redux';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';
import './HomePage.css'

function Header() {
    return (
        <header>
            <div className="logo-section d-flex align-ct">
                <img src='/icons/mr2.jpeg' className='header-icon'/>
                {/* <LocalPharmacyOutlinedIcon className='header-icon' style={{ color: 'red'}} fontSize="small"/> */}
                <div className='h-other'>
                    <h3>Med Sell</h3>
                    <h4>Pankaj Maurya</h4>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Header);