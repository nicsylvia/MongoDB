const myModel = require("../Model/set06Model");

const getStudents = async(req, res) =>{
    try {
        const students = await myModel.find();
        res.status(200).json({
            message: "Data gotten successfully",
            data: students,
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            data: error.message
        })
    }
};

const createStudents = async (req, res) =>{
    try {
        const {
            firstname, lastname, nameOfPc, complexion, gender, phoneNo
        } = req.body;
        const newStudents = await myModel.create({
            firstname, lastname, nameOfPc, complexion, gender, phoneNo
        });
        res.status(201).json({
            message: "Data Created Successfully",
            data: newStudents,
        })
    } catch (error) {    
        res.status(400).json({
            message: "An error occured",
            data: error.message
        })
    }
};

module.exports = {
    getStudents, createStudents,
}