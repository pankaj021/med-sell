const mongoose = require('mongoose');
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
const validatePhone = function(phone) {
    return (!phone) || /^\d{10}$/.test(phone);
};
const ContributorSchema = {
    name: {
        type: String,
        trim: true,
        required: [true, "Name can't be empty."]
    },
    phone: { 
        type: String,
        validate: {
            validator: validatePhone,
            message: props => `${props.value} is not a valid phone number!`
        },
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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
module.exports = mongoose.model('Contributor', ContributorSchema);