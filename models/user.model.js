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

    let name = body.body;
    console.log(name);
    return pool.query(
      `UPDATE users SET full_name='${name}' where id=${params[field]} RETURNING *`
    );
  },
  deleteById: function (id) {
    return pool.query("DELETE FROM users where id=$1 RETURNING *", [id]);
  },
  create: function (body) {
    return pool.query(
      "insert into users(email, password, full_name) values($1, $2, $3) RETURNING *",
      [body.email, body.password, body.full_name]
    );
  },
};

module.exports = User;
