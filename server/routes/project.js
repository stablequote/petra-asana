const express = require('express');
const router = express.Router();
const {
    getSingleProject, 
    getAllProjects, 
    createProject, 
    updateProject, 
    deleteSingleProject, 
    deleteAllProjects
} = require('../controllers/ProjectController')

router.get('/:id', getSingleProject)
router.get('/', getAllProjects)

router.post('/', createProject)
router.put('/:id', updateProject)

router.delete('/:id', deleteSingleProject)
router.delete('/', deleteAllProjects)

module.exports = router;