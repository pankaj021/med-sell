const mongoose = require('mongoose');

const TargetSchema = {
    title: {
        type: String,
        required: [true, "Title can't be empty."],
        unique: [true],
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        default: 11000
    }, 
    targetDate: {
        type: Date, 
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
module.exports = mongoose.model('Target', TargetSchema);