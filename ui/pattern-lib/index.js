import './index.css';
import Input from './Input'; 
import Textarea from './Textarea';
import Button from './Button';
import Accordion from './accordion/Accordion';
import AccordionCollapsed from './accordion/AccordionCollapsed';
import AccordionExpanded from './accordion/AccordionExpanded';
import DataTable from './DataTable'
import Error from './error/Error';
import Loader from './loader/Loader';
import withHttp from './hoc/withHttp';

module.exports = {
    Input,
    Textarea,
    Button,
    Accordion,
    AccordionCollapsed,
    AccordionExpanded,
    DataTable,
    Error,
    Loader,
    withHttp,
}


// ################ USAGES #################
// <Input
//     placeholder='input text',
//     labelText='input label',
//     errorText='input error',
// />

// ################ USAGES #################
// <DataTable
//     data = {
//         {
//             th: ['col1', 'col2'],
//             tr: [
//                 {col1: 123, col2: 321},
//                 {col2: 8988, col1: 345543},
//             ]
//         }
//     }
// />

// ################## USAGES ################
// <Accordion 
//     isExpanded = {true}
// >
//     <AccordionCollapsed><div>Collllllllllll</div></AccordionCollapsed>
//     <AccordionExpanded><div>Exppsppppppppp</div></AccordionExpanded>
// </Accordion>