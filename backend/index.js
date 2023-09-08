const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

var cors = require("cors");

const app = express();
// const corsOptions = {
//   origin: "http://localhost:3000",
// };
app.use(cors());

// middleware
app.use(express.static("public"));
app.use(express.json());

// view engine
app.set("view engine", "ejs");

// database connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(process.env.PORT, () => console.log("server started"))
  )
  .catch((err) => console.log(err));
