const ProjectsModel = require('../models/Projects')

// list one project
const getSingleProject = async (req, res,) => {
    const {id} = req.params
    const projectResult = await ProjectsModel.findOne({id});
    res.send(projectResult)
}

// list all projects
const getAllProjects = async (req, res) => {
    const AllProjectResults = await ProjectsModel.find({});
    res.send(AllProjectResults)
}

// create project
const createProject = async (req, res) => {
    const {data} = req.body;
    const newProject = await ProjectsModel.create(data);
    res.send(newProject)
}

// update project
const updateProject = async (req, res) => {
    const {id} = req.params
    const updatedProject = await ProjectsModel.findByIdAndUpdate(id, req.body)
    res.send(updatedProject)
}

// delete single project
const deleteSingleProject = async (req, res) => {
    const {id} = req.params
    const deletedProject = await ProjectsModel.findByIdAndDelete(id);
    res.send(deletedProject)
}

// delete all projects
const deleteAllProjects = async (req, res) => {
    const deletedProjects = await ProjectsModel.remove()
    res.send(deletedProjects)
}

module.exports = {
    getSingleProject,
    getAllProjects,
    createProject,
    updateProject,
    deleteSingleProject,
    deleteAllProjects
}