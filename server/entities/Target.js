const moment = require('moment');

module.exports = {
    res: (doc) => {
        return {
            _id: doc._id,
            title: doc.title || "",
            description: doc.description || "",
            amount: doc.amount || "",
            targetDate: moment(doc.targetDate).format("LL") || "",
            createdBy: doc.createdBy || "",
            updatedBy: doc.updatedBy || "",
            createdAt: moment(doc.createdAt).format("LL") || "",
            updatedAt: moment(doc.updatedAt).format("LL")  || "",
        }
    }
}