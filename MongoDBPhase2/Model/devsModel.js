
const devModel = require("mongoose")

const myDevSchema = devModel.Schema({
    name:{
        type: String,
    },
    stack:{
        type: String,
    },
    techHub:{
        type: String,
    }
});

const myModel = devModel.model("devsData", myDevSchema);

module.exports = myModel