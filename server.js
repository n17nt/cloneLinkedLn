require("dotenv").config();

// require("./config/db").connect();
let app = require("./middleware/app");

app.listen(process.env.PORT, () => {
  console.log("Server is running on", process.env.PORT);
});
