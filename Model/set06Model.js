const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    nameOfPc: {
        type: String,
    },
    complexion: {
        type: String,
    },
    gender: {
        type: Boolean,
    },
    phoneNo: {
        type: Number,
    },
});

const myModel = mongoose.model("set06Datas", mySchema);

module.exports = myModel