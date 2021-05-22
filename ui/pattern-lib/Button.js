import React from 'react';
import {connect} from 'react-redux';

function Button(props) {
    const text = props.text || "click me";
    const className = props.className || "";
    const onClickHandler = props.onClickHandler || (() => {});
    return (
        <button 
            className={`btn ${className}`}
            onClick={onClickHandler}
        >
            {text}
        </button>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Button);