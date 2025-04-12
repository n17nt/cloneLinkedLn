const express = require("express");
const app = express();
const userRouter = require("../routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

module.exports = app;
