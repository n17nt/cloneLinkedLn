const express = require("express");
const UserController = require("../controllers/user.controller");
let router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserByid);
router.post("/:id", UserController.updateByID);
module.exports = router;
