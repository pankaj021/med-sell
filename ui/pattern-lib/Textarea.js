import React, {useState} from 'react';
import {connect} from 'react-redux';

function Textarea(props) {
    const [value, setValue] = useState(props.value || "");
    const [labelClass, setLabelClass] = useState(props.labelClass || "");

    const id = props.id || "";
    const className = props.className || "";
    const placeholder = props.placeholder || "";
    const errorText = props.errorText || "";
    const errorClass = props.errorClass || "";
    const labelText = props.labelText || "";
    const onChangeHandler = props.onChangeHandler || (() => {});

    const onChangeDefault = (event) => {
        setValue(event.target.value);
        onChangeHandler(event)
    }

    return (
        <div className="Input user-input">
            {
                labelText && 
                <label className={`txt-sm txt-label ${labelClass}`}>{labelText}</label>
            }
            <textarea 
                id = {id}
                className = {`input ${className}`}
                value = {value}
                placeholder = {placeholder}
                onChange = {onChangeDefault} 
                onClick = {() => setLabelClass(`${labelClass} focused`)}
                onBlur = {() => setLabelClass(`${props.labelClass}`)}
            />
            {
                errorText && 
                <label className={`txt-sm txt-error ${errorClass}`}>{errorText}</label>
            }
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Textarea);