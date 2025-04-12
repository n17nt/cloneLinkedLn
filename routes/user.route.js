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

// Skill routes
router
  .post("/:id/skills", UserController.addUserSkill)
  .get("/:id/skills", UserController.getUserSkills)
  .delete("/:id/skills/:skillId", UserController.removeUserSkill);

module.exports = router;
