const Donation = require('../../models/Donation');

module.exports = {
    createDonation: (req) => {
        const newDonation = new Donation(req);
        return newDonation.save();
    },
    findDonationById: (id) => {
        return Donation.findById(id);
    },
    findAllDonations: () => {
        return Donation.find();
    },
    updateDonationById: (id, req) => {
        return Donation.findByIdAndUpdate(id, req, {new: true, runValidators: true});
    },
    deleteDonationById: (id) => {
        return Donation.deleteOne({'_id': id});
    },
    findDonationsByTargetId: (id) => {
        return Donation.find({'targetId': id});
    },
    findDonationsByEmail: (email) => {
        return Donation.find({'donatedBy': email});
    },
}