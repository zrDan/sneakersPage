const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Settings
require("dotenv").config();
const port = process.env.PORT;
app.use("/data", express.static("public"));

// MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// MongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// ROUTES
app.use("/api/v1", require("./src/routes/sneaker"));

// Server
app.listen(port, () => {
  console.log(`Server in PORT ${port}`);
});
