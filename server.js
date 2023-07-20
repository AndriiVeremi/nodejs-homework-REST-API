const mongoose = require("mongoose");

const app = require("./app");

// const { DB_HOST, PORT } = process.env;

const DB_HOST = "mongodb+srv://dashukUser:1145dasce1145@cluster0.x5gqfml.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    // app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });