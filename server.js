const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/api-routes.js")(app);


module.exports = function(app) {
    app.get("/", function (res, req) {
        res.sendFile(path.join(__dirname,"/public/index.html"))
    });

    app.get("/excercise", function (res, req) {
        res.sendFile(path.join(__dirname,"/public/exercise.html"))
    });

    app.get("/stats", function (res, req) {
        res.sendFile(path.join(__dirname,"/public/stats.html"))
    });
}

app.listen(3060, () => {
    console.log("App running on port 3060!");
  });


  