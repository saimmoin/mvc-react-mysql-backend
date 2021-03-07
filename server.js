const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const dbmodel = require("./app/models/index");
//How many models this application uses ?
//1. Tutorial
//2. UserLog

dbmodel.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// TODO: Add user model and controller
// user model attributes
// userid, username, emailaddress, first_name, last_name
// CRUD for model will be provided by sequilize
// Add Controller entry point for register user, login user
