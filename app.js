const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const indexrouter = require("./routes/index");
const addrouter = require("./routes/add");
const viewrouter = require("./routes/view");
const editrouter = require("./routes/edit");
const dbrouter = require("./routes/db");
const dotenv = require("dotenv");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log("Connected to DB");
  });

app.use("/", indexrouter);
app.use("/add", addrouter);
app.use("/view", viewrouter);
app.use("/edit", editrouter);
app.use("/db", dbrouter);
app.listen(process.env.PORT||3000, () => {
  console.log("Server Running");
});
