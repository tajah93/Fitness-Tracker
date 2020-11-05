const path = require("path");

module.exports = function(app) {
    app.get("/", function (res, req) {
        res.sendFile(path.join(_dirname,"../public/index.html"))
    });
    
    app.get("/excercise", function (res, req) {
        res.sendFile(path.join(_dirname,"../public/exercise.html"))
    });

    app.get("/stats", function (res, req) {
        res.sendFile(path.join(_dirname,"../public/stats.html"))
    });
}