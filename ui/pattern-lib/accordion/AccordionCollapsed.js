import React from 'react';
import {connect} from 'react-redux';

function AccordionCollapsed(props) {
    const collapsedStyle = props.isExpanded ? 'expanded' : 'collapsed';
    return (
        <div className="accordion-collapsed" onClick = {() => props.toggleExpansion(!props.isExpanded)}>
            <span className='accordion-i-title'>
                <img className={`accordion-i ${collapsedStyle}`} src='/icons/collapsed.svg' alt='show/hide'/>
                {props.title && <span className='accordion-title'>{props.title}</span>}
            </span>
            {props.children}
        </div>
    ) 
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(AccordionCollapsed);