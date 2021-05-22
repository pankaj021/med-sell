import React from 'react';
import {connect} from 'react-redux';

function AccordionExpanded(props) {
    return (
        <div className="accordion-expanded">
            {props.children}
        </div>
    ) 
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(AccordionExpanded);