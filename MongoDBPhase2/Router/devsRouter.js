const express = require("express")

const devRouter = express.Router();

const {addNewDevs, readDevData, getOneDev, updateDev, deleteDev} = require("../Controller/devsContoller");

devRouter.route("/devs").get(readDevData);
devRouter.route("/adddevs").post(addNewDevs);
devRouter.route("/get1Dev/:id").get(getOneDev)
devRouter.route("/updatedev/:id").patch(updateDev)
devRouter.route("/deletedev/:id").delete(deleteDev)

module.exports = devRouter;