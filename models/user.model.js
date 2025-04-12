const pool = require("../config/db");

let User = {
  find: function () {
    return pool.query("SELECT * FROM users");
  },
  findOne: function (params) {
    let field = Object.keys(params)[0];
    console.log(field, params);
    console.log(`SELECT * FROM users where ${field}=${params[field]}`);

    return pool.query(`SELECT * FROM users where ${field}=${params[field]}`);
  },
  updateByID: function (params, body) {
    let field = Object.keys(params);
    let name = body.name;
    return pool.query(
      `UPDATE users SET name=${name} where ${field}=${params[field]}`
    );
  },
};

module.exports = User;
