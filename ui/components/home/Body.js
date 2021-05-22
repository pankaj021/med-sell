import React from 'react';
import {connect} from 'react-redux';

function Body() {
    return (
        <div className="body-page">
           Body
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Body);