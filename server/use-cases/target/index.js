const Target = require('../../models/Target');

module.exports = {
    createTarget: function (req){
        const newTarget = new Target(req);
        return newTarget.save();
    },
    findTargetById: (id) => {
        return Target.findById(id);
    },
    findAllTargets: () => {
        return Target.find();
    },
    updateTargetById: async (id, req) => {
        return Target.findByIdAndUpdate(id, req, {new: true, runValidators: true});
    },
    deleteTargetById: async (id) => {
        return Target.deleteOne({'_id': id});
    },
}