const Subject = require('../models/subjectsModels');

const dotenv = require('dotenv');
dotenv.config();

const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({ msg: 'Materias obtenidas', data: subjects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener materias', data: {} });
    }
};

const createSubject = async (req, res) => {
    const { name, professor } = req.body;

    try {
        const newSubject = new Subject({ name, professor });
        await newSubject.save();
        res.status(201).json({ msg: 'Materia creada', data: newSubject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al crear la materia', data: {} });
    }
};

const getSubjectById = async (req, res) => {
    const { id } = req.params;

    try {
        const subject = await Subject.findById(id);
        if (!subject) {
            return res.status(404).json({ msg: 'Materia no encontrada', data: {} });
        }
        res.status(200).json({ msg: 'Materia obtenida', data: subject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener la materia', data: {} });
    }
};

const updateSubjectById = async (req, res) => {
    const { id } = req.params;
    const { name, professor } = req.body;

    try {
        const updatedSubject = await Subject.findByIdAndUpdate(id, { name, professor }, { new: true });
        if (!updatedSubject) {
            return res.status(404).json({ msg: 'Materia no encontrada', data: {} });
        }
        res.status(200).json({ msg: 'Materia actualizada', data: updatedSubject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al actualizar la materia', data: {} });
    }
};

const deleteSubjectById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSubject = await Subject.findByIdAndDelete(id);
        if (!deletedSubject) {
            return res.status(404).json({ msg: 'Materia no encontrada', data: {} });
        }
        res.status(200).json({ msg: 'Materia eliminada', data: deletedSubject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al eliminar la materia', data: {} });
    }
};

// Exportación de funciones
module.exports = { getAllSubjects, createSubject, getSubjectById, updateSubjectById, deleteSubjectById };