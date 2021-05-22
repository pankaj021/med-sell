const mongoose = require('mongoose');
const validateAmount = function (amount) {
    return !!amount;
}
const DonationSchema = {
    targetId: {
        type: mongoose.Schema.ObjectId, ref: 'Target',
        required: [true, "Enter target details."]
    },
    amount: {
        type: Number,
        validate: {
            validator: validateAmount,
            message: props => `${props.value} is not a valid donation amount!`
        },
        required: [true, "Donation amount can't be empty."]
    }, 
    donatedBy: {
        type: String, //Most of the time it'll be email id
        required: [true, "Enter contributor's details."]
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
module.exports = mongoose.model('Donation', DonationSchema);