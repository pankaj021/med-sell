const Teacher = require('../../models/Teacher');

module.exports = {
    createTeacher: function (req){
        const newTeacher = new Teacher(req);
        return newTeacher.save();
    },
    findTeacherById: (id) => {
        return Teacher.findById(id);
    },
    findAllTeachers: () => {
        return Teacher.find();
    },
    updateTeacherById: async (id, req) => {
        return Teacher.findByIdAndUpdate(id, req, {new: true, runValidators: true});
    },
    deleteTeacherById: async (id) => {
        return Teacher.deleteOne({'_id': id});
    },
}