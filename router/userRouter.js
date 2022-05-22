const express = require("express");
const {
	getUsers,
	createUsers,
	getToken,
	signinUser,
} = require("../controller/userController");
const upload = require("../utils/multer");
const router = express.Router();

router.route("/").get(getUsers);
router.route("/:id/:token").get(getToken);
router.route("/create").post(upload, createUsers);
router.route("/signin").post(signinUser);

module.exports = router;
