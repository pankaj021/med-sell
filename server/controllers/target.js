const {
    createTarget,
    findTargetById,
    findAllTargets,
    updateTargetById,
    deleteTargetById
} = require('../use-cases/target');
const Target = require('../entities/Target');
const {NoResourceFound, ResourceAlreadyExists} = require('../middlewares/errors');

module.exports = {
    getAll: async(req, res, next) => {
        try {
            const items = await findAllTargets();
            res.status(200).json(items.map(item => Target.res(item)));
        } catch (error) {
            next(error);
        }
    }, 
    getOne: async (req, res, next) => {
        try {
            const item = await findTargetById(req.params.id);
            if(!item){
                throw new NoResourceFound();
            } 
            res.status(200).json(Target.res(item));
        } catch (error) {
            next(error);
        }
    }, 
    createOne: async (req, res, next) => {
        try {
            const {title, description, amount, targetDate} = req.body;
            const user = req.AZAD_USER;            
            const doc = {
                title: title || "",
                description: description || "",
                amount: amount,
                targetDate: targetDate || "", 
                createdBy: user.email,
                updatedBy: user.email,
            }
            const item = await createTarget(doc);
            res.status(200).json(Target.res(item));
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return next(new ResourceAlreadyExists('This document already exists.'));
            }
            next(error);
        }
    }, 
    updateOne: async (req, res, next) => {
        try {
            const {title, description, amount, targetDate} = req.body;
            const id = req.params.id;
            const user = req.AZAD_USER;            
            const existingDoc = await findTargetById(id);
            if(!existingDoc){
                throw new NoResourceFound();
            } else {
                const doc = {
                    updatedBy: user.email,
                    updatedAt: new Date(),
                }
                if(title) doc.title = title;
                if(description) doc.description = description;
                if(amount) doc.amount = amount;
                if(targetDate) doc.targetDate = targetDate;
                const item = await updateTargetById(id, doc);
                res.status(200).json(Target.res(item));
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
            const existingDoc = await findTargetById(id);
            if(!existingDoc){
                throw new NoResourceFound();
            } else {
                await deleteTargetById(id);
                res.status(200).json();
            }
        } catch (error) {
            next(error);
        }
    }
}