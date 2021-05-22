import React from 'react';
import {connect} from 'react-redux';

function DataTable(props) {
    const className = props.className || "";
    const tdClass = props.tdClass || "";
    const data = props.data;
    if(!data) return (<h3>No data is available</h3>);
    return (
        <div className={`datatable-wrap`}>
            <table className={`datatable ${className}`}>
                <thead>
                    <tr>
                        {
                            data.th.map((th, index) => {
                                return (<th key={index}>{th}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.tr.map((tr, rIndex) => {
                            return (
                                <tr key={rIndex}>
                                    {
                                        data.th.map((th, tIndex) => {
                                            return (<td key={tIndex} className={`${tdClass}`}>{tr[th] || ""}</td>)
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);

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