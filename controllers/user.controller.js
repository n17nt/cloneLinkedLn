const User = require("../models/user.model");

let getAllUsers = async (req, res, next) => {
  try {
    let users = await User.find();
    console.log(users.rows);

    if (!users.rows.length) throw new Error("Userlar mabjud emas");

    res.status(200).json({ status: "Succes", users: users.rows });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
  }
};
let getUserByid = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await User.findOne({ id });

    if (!user) throw new Error("User mabjud emas");

    res.status(200).json({ status: "Succes", user: user.rows });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
  }
};

let updateByID = async (req, res, next) => {
  try {
    let { id } = req.params;
    let body = req.body.full_name;
    let user = await User.updateByID({ id }, { body });

    res.status(200).json({ status: "succes", user: user.rows });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
  }
};
let deleteById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await User.deleteById(id);

    res.status(200).json({ status: "succes", user: user.rows });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
  }
};
let createUser = async (req, res, next) => {
  try {
    let body = req.body;

    let user = await User.create(body);

    res.status(200).json({ status: "succes", user: user.rows });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
  }
};

let addUserSkill = async (req, res, next) => {
  try {
    let { id } = req.params;
    let { skill_id } = req.body;
    let result = await User.addSkillToUser(id, skill_id);

    if (!result.rows.length) throw new Error("Failed to add skill");

    res.status(200).json({ status: "Success", result: result.rows });
  } catch (error) {
    res.status(400).json({ status: "Failed", message: error.message });
  }
};

let getUserSkills = async (req, res, next) => {
  try {
    let { id } = req.params;
    let skills = await User.getUserSkills(id);

    if (!skills.rows.length) throw new Error("No skills found");

    res.status(200).json({ status: "Success", skills: skills.rows });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
  }
};

let removeUserSkill = async (req, res, next) => {
  try {
    let { id, skillId } = req.params;
    let result = await User.removeSkillFromUser(id, skillId);

    if (!result.rows.length) throw new Error("Skill not found");

    res.status(200).json({ status: "Success", result: result.rows });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserByid,
  updateByID,
  deleteById,
  createUser,
  addUserSkill,
  getUserSkills,
  removeUserSkill,
};
