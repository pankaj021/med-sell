const {
    createTeacher,
    findTeacherById,
    findAllTeachers,
    updateTeacherById,
    deleteTeacherById
} = require('../use-cases/teacher');
const Teacher = require('../entities/Teacher');
const {NoResourceFound, ResourceAlreadyExists} = require('../middlewares/errors');

module.exports = {
    getAll: async(req, res, next) => {
        try {
            const items = await findAllTeachers();
            res.status(200).json(items.map(item => Teacher.res(item)));
        } catch (error) {
            next(error);
        }
    }, 
    getOne: async (req, res, next) => {
        try {
            const item = await findTeacherById(req.params.id);
            if(!item){
                throw new NoResourceFound();
            } 
            res.status(200).json(Teacher.res(item));
        } catch (error) {
            next(error);
        }
    }, 
    createOne: async (req, res, next) => {
        try {
            const {name, subject} = req.body;
            const user = req.AZAD_USER;            
            const doc = {
                name: name,
                subject: subject || [],
                createdBy: user.email,
                updatedBy: user.email,
            }
            const item = await createTeacher(doc);
            res.status(200).json(Teacher.res(item));
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return next(new ResourceAlreadyExists('This document already exists.'));
            }
            next(error);
        }
    }, 
    updateOne: async (req, res, next) => {
        try {
            const {name, subject} = req.body;
            const id = req.params.id;
            const user = req.AZAD_USER;            
            const existingDoc = await findTeacherById(id);
            if(!existingDoc){
                throw new NoResourceFound();
            } else {
                const doc = {
                    updatedBy: user.email,
                    updatedAt: new Date(),
                }
                if(name) doc.name = name;
                if(subject) doc.subject = subject;
                const item = await updateTeacherById(id, doc);
                res.status(200).json(Teacher.res(item));
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
            const existingDoc = await findTeacherById(id);
            if(!existingDoc){
                throw new NoResourceFound();
            } else {
                await deleteTeacherById(id);
                res.status(200).json();
            }
        } catch (error) {
            next(error);
        }
    }
}