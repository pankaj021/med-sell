import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {DataTable} from '../pattern-lib';
import {getTeachers} from '../../actions/teacher-thunk'

function Teacher({teachers = [], getTeachers}) {
    useEffect(() => {
        getTeachers();
    }, []);

    const tableData = {
        th: ['S.N.', 'Name', 'Subject'],
        tr: teachers.map(({name, subject}, index) => (
            {'S.N.': index + 1, 'Name': name, 'Subject': subject}
        ))
    }

    return (
        <DataTable data={tableData}/>
    )
}

const mapStateToProps = (state) => ({
    teachers: state.teachers || []
});
const mapDispatchToProps = (dispatch) => ({
    getTeachers: () => dispatch(getTeachers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);