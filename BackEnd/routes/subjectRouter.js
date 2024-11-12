// routes/subjectRouter.js
const express = require('express');
const router = express.Router();
const {
    getAllSubjects,
    createSubject,
    getSubjectById,
    updateSubjectById,
    deleteSubjectById
} = require('../controllers/subjectController');

router.get('/', getAllSubjects);
router.post('/', createSubject);
router.get('/:id', getSubjectById);
router.put('/:id', updateSubjectById);
router.delete('/:id', deleteSubjectById);

module.exports = router;
