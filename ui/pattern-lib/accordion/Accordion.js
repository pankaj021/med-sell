import React, {useState} from 'react';
import {connect} from 'react-redux';

function Accordion(props) {
    const [isExpanded, toggleExpansion] = useState(!!props.isExpanded);
    return (
        <div className="accordion">
            {React.cloneElement(props.children[0], {isExpanded, toggleExpansion})}
            {isExpanded && props.children[1]}
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);


// ################## USAGES ################
// <Accordion 
//     isExpanded = {true}
// >
//     <AccordionCollapsed><div>Collllllllllll</div></AccordionCollapsed>
//     <AccordionExpanded><div>Exppsppppppppp</div></AccordionExpanded>
// </Accordion>