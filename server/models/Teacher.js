const mongoose = require('mongoose');
const TeacherSchema = {
    name: {
        type: String,
        required: [true, "Name can't be empty."],
        unique: true
    },
    subject: {
        type: [String],
        default: []
    }, 
    createdBy: {
        type: String,
        required: [true, "createdBy can't be empty."]
    },
    updatedBy: {
        type: String,
        required: [true, "updatedBy can't be empty."]
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    },
    updatedAt: {
        type: Date, 
        default: Date.now()
    }
}
module.exports = mongoose.model('Teacher', TeacherSchema);