const express = require("express");
const UserController = require("../controllers/user.controller");
let router = express.Router();

router
  .get("/", UserController.getAllUsers)
  .post("/", UserController.createUser);
router.get("/:id", UserController.getUserByid);
router
  .post("/:id", UserController.updateByID)
  .delete("/:id", UserController.deleteById);
module.exports = router;
