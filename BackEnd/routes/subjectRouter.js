// routes/subjectRouter.js
const express = require('express');
const router = express.Router();
const {
    getAllSubjects,
    createSubject,
    getSubjectById,
    updateSubjectById,
    deleteSubjectById
} = require('../controllers/subjectsController'); // Asegúrate de que esta importación esté correcta

// Definición de rutas
router.get('/', getAllSubjects);
router.post('/', createSubject);
router.get('/:id', getSubjectById);
router.put('/:id', updateSubjectById);
router.delete('/:id', deleteSubjectById);

module.exports = router;
