import React from 'react';
import {connect} from 'react-redux';
import LoginPage from '../login/LoginPage';

function Body({children}) {
    return (
        <div className="body-page">
           {children}
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Body);