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

module.exports = {
  getAllUsers,
  getUserByid,
  updateByID,
  deleteById,
  createUser,
};
