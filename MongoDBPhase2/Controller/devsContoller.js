const myModel = require("../Model/devsModel");

// Post
const addNewDevs = async(req, res) =>{
    try {
        const {name, stack, techHub} = req.body;

        const newDevs = await myModel.create({
            name, stack, techHub
        });

        res.status(201).json({
            message: "DevData successfully created",
            data: newDevs
        })
    } catch (error) {
       res.status(400).json({
        message: "An error occured",
        data: error.message
       }) 
    }
}

// General get
const readDevData = async(req, res) =>{
    try {
        const getDevData = await myModel.find();
        res.status(200).json({
            message: "DevsData gotten successfully",
            data: getDevData
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            data: error.message
        })
    }
};

// Get one
const getOneDev = async(req, res) =>{
    try {
        const getDev = await myModel.findById(req.params.id);
        res.status(200).json({
            message: "Single Dev Data gotten successfully",
            data: getDev
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            data: error.message,
        })
    }
}

// Update Dev
const updateDev = async(req, res) =>{
    try {
        const{ name, stack, techHub} = req.body;
        const updates = await myModel.findByIdAndUpdate(req.params.id, {name, stack, techHub}, {new: true});
        res.status(200).json({
            message: "Dev data updated successfully",
            data: updates
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            data: error.message
        })
    }
}
// Delete 
const deleteDev = async(req, res) =>{
    try {
        const deletes = await myModel.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message: "Successfully deleted",
            data: deletes
        })
        
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            data: error.message
        })
    }
}

module.exports = {addNewDevs, readDevData, getOneDev, updateDev, deleteDev}