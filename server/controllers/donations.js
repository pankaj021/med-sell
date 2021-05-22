const {
    createDonation,
    findDonationById,
    findAllDonations,
    updateDonationById,
    deleteDonationById,
    findDonationsByTargetId,
    findDonationsByEmail,
} = require('../use-cases/donation');
const {findAllContributors} = require('../use-cases/contributor');
const {findAllTargets} = require('../use-cases/target');
const Donation = require('../entities/Donation');
const Contributor = require('../entities/Contributor');
const Target = require('../entities/Target');
const {NoResourceFound, ResourceAlreadyExists} = require('../middlewares/errors');

const getContributorsObj = async () => {
    const items = await findAllContributors();
    const obj = {};
    items.forEach(item => obj[item.email] = Contributor.res(item));
    return obj;
}
const getTargetsObj = async () => {
    const items = await findAllTargets();
    const obj = {};
    items.forEach(item => obj[item._id] = Target.res(item));
    return obj;
}

module.exports = {
    getAll: async(req, res, next) => {
        try {
            const [items, contributorsObj, targetObj] = await Promise.all([
                findAllDonations(), 
                getContributorsObj(),
                getTargetsObj()
            ]);
            res.status(200).json(items.map(item => Donation.res(
                item, 
                contributorsObj[item.donatedBy] || {},
                targetObj[item.targetId] || {},
            )));
        } catch (error) {
            next(error);
        }
    }, 
    getOne: async (req, res, next) => {
        try {
            const [item, contributorsObj, targetObj] = await Promise.all([
                findDonationById(req.params.id),
                getContributorsObj(),
                getTargetsObj()
            ]);
            if(!item){
                throw new NoResourceFound();
            } 
            res.status(200).json(Donation.res(
                item, 
                contributorsObj[item.donatedBy] || {},
                targetObj[item.targetId] || {},
            ));
        } catch (error) {
            next(error);
        }
    }, 
    createOne: async (req, res, next) => {
        try {
            const {targetId, amount, donatedBy} = req.body;
            const user = req.AZAD_USER;            
            const doc = {
                targetId,
                amount,
                donatedBy,
                createdBy: user.email,
                updatedBy: user.email,
            }
            const [item, contributorsObj, targetObj] = await Promise.all([
                createDonation(doc),
                getContributorsObj(),
                getTargetsObj()
            ]);
            res.status(200).json(Donation.res(
                item, 
                contributorsObj[item.donatedBy] || {},
                targetObj[item.targetId] || {},
            ));
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return next(new ResourceAlreadyExists('This document already exists.'));
            }
            next(error);
        }
    }, 
    updateOne: async (req, res, next) => {
        try {
            const {amount, donatedBy} = req.body;
            const id = req.params.id;
            const user = req.AZAD_USER;            
            const existingDoc = await findDonationById(id);
            if(!existingDoc){
                throw new NoResourceFound();
            } else {
                const doc = {
                    updatedBy: user.email,
                    updatedAt: new Date(),
                }
                if(donatedBy) doc.donatedBy = donatedBy;
                if(amount) doc.amount = amount;
                const [item, contributorsObj, targetObj] = await Promise.all([
                    updateDonationById(id, doc),
                    getContributorsObj(),
                    getTargetsObj()
                ]);
                res.status(200).json(Donation.res(
                    item, 
                    contributorsObj[item.donatedBy] || {},
                    targetObj[item.targetId] || {},
                ));
            }
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return next(new ResourceAlreadyExists('This document already exists.'));
            }
            next(error);
        }  
    }, 
    deleteOne: async (req, res, next) => {
        try {
            const id = req.params.id;
            const existingDoc = await findDonationById(id);
            if(!existingDoc){
                throw new NoResourceFound();
            } else {
                await deleteDonationById(id);
                res.status(200).json();
            }
        } catch (error) {
            next(error);
        }
    },
    getOneByEmail: async (req, res, next) => {
        try {
            const user = req.AZAD_USER;   
            const [items, contributorsObj, targetObj] = await Promise.all([
                findDonationsByEmail(user.email),
                getContributorsObj(),
                getTargetsObj()
            ]);
            res.status(200).json(items.map(item => Donation.res(
                item, 
                contributorsObj[item.donatedBy] || {},
                targetObj[item.targetId] || {},
            )));
        } catch (error) {
            next(error);
        }
    },
    getOneByTargetId: async (req, res, next) => {
        try {
            const [items, contributorsObj, targetObj] = await Promise.all([
                findDonationsByTargetId(req.params.id),
                getContributorsObj(),
                getTargetsObj()
            ]);
            res.status(200).json(items.map(item => Donation.res(
                item, 
                contributorsObj[item.donatedBy] || {},
                targetObj[item.targetId] || {},
            )));
        } catch (error) {
            next(error);
        }
    },
}