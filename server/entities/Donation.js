const moment = require('moment');

module.exports = {
    res: (doc, contributer, target) => {
        return {
            _id: doc._id,
            targetId: target._id || "",
            amount: doc.amount || "",
            donatedBy: contributer.name || doc.donatedBy || "",
            target: {
                "_id": target._id || "",
                "title": target.title || "",
            },
            contributer: {
                "_id": contributer._id || "",
                "name": contributer.name || "",
                "email": contributer.email || "",
            },
            createdBy: doc.createdBy || "",
            updatedBy: doc.updatedBy || "",
            createdAt: moment(doc.createdAt).format("LL") || "",
            updatedAt: moment(doc.updatedAt).format("LL")  || "",
        }
    }
}