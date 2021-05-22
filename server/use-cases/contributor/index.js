const Contributor = require('../../models/Contributor');

module.exports = {
    createContributor: function (req){
        const newContributor = new Contributor(req);
        return newContributor.save();
    },
    findContributorById: (id) => {
        return Contributor.findById(id);
    },
    findAllContributors: () => {
        return Contributor.find();
    },
    updateContributorById: async (id, req) => {
        return Contributor.findByIdAndUpdate(id, req, {new: true, runValidators: true});
    },
    deleteContributorById: async (id) => {
        return Contributor.deleteOne({'_id': id});
    },
    findContributorByEmail: async (email) => {
        return Contributor.findOne({email});
    }
}