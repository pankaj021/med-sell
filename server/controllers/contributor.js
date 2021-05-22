const {
    createContributor,
    findContributorById,
    findAllContributors,
    updateContributorById,
    findContributorByEmail,
    deleteContributorById
} = require('../use-cases/contributor');
const Contributor = require('../entities/Contributor');
const {NoResourceFound} = require('../middlewares/errors');

module.exports = {
    getAll: async(req, res, next) => {
        try {
            const items = await findAllContributors();
            res.status(200).json(items.map(item => Contributor.res(item)));
        } catch (error) {
            next(error);
        }
    }, 
    getOne: async (req, res, next) => {
        try {
            const item = await findContributorById(req.params.id);
            if(!item || !item.email){
                throw new NoResourceFound();
            } 
            res.status(200).json(Contributor.res(item));
        } catch (error) {
            next(error);
        }
    }, 
    createOne: async (req, res, next) => {
        try {
            const {name, phone, email} = req.body;
            const user = req.AZAD_USER;            
            const existingUser = await findContributorByEmail(email || user.email);
            if(existingUser && existingUser.email){
                return res.status(200).json(Contributor.res(existingUser));
            } else {
                const doc = {
                    name: name || user.name,
                    email: email || user.email || null,
                    phone: phone || null,
                    createdBy: email || user.email,
                    updatedBy: email || user.email,
                }
                const item = await createContributor(doc);
                res.status(200).json(Contributor.res(item));
            }
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return next(new ResourceAlreadyExists('This document already exists.'));
            }
            next(error);
        }
    }, 
    updateOne: async (req, res, next) => {
        try {
            const {name, phone} = req.body;
            const id = req.params.id;
            const user = req.AZAD_USER;            
            const existingUser = await findContributorById(id);
            if(!existingUser || !existingUser.email){
                throw new NoResourceFound();
            } else {
                const doc = {
                    updatedBy: user.email,
                    updatedAt: new Date(),
                }
                if(name) doc.name = name;
                if(phone) doc.phone = phone;
                const item = await updateContributorById(id, doc);
                res.status(200).json(Contributor.res(item));
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
            const existingUser = await findContributorById(id);
            if(!existingUser || !existingUser.email){
                throw new NoResourceFound();
            } else {
                await deleteContributorById(id);
                res.status(200).json();
            }
        } catch (error) {
            next(error);
        }
    }
}