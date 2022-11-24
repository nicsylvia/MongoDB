const express = require("express");

const router = express.Router();

const { getStudents, createStudents } = require("../Controller/set06Controller");

router.route("/students").get(getStudents);
router.route("/newstudents").post(createStudents);

module.exports = router;