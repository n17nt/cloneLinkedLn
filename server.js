require("dotenv").config();
const pool = require("./config/db");
const app = require("./middleware/app");
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 6969;


app.use(cors());
app.use(morgan("combined"));


pool.connect()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log("Server is running on", PORT);
    });
  })
  .catch(err => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

  
process.on("SIGINT", () => {
  pool.end(() => {
    console.log("Database connection closed");
    process.exit(0);
  });
});
