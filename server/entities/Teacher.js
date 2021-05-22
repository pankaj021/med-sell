const moment = require('moment');

module.exports = {
    res: (doc) => {
        return {
            _id: doc._id,
            name: doc.name || "",
            subject: doc.subject || [],
            createdBy: doc.createdBy || "",
            updatedBy: doc.updatedBy || "",
            createdAt: moment(doc.createdAt).format("LL") || "",
            updatedAt: moment(doc.updatedAt).format("LL")  || "",
        }
    }
}