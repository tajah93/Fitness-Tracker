const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittracker", { useNewUrlParser: true });

//app.use(require("./routes/"));
//app.use(require("./routes/"));

app.listen(3060, () => {
    console.log("App running on port 3060!");
  });
  