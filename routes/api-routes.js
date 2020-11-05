const db = require("../models");

module.exports = function(app){ 
    app.get("/api/workouts",function(req,res){  
        db.fittracker.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts",function (req,res){    
        db.fittracker.create({})
        .then(data => {
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/workouts/:id",({body,params},res)=>{   
        db.fittracker.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => {
            res.json(data)
        })    
        .catch(err => { 
            res.json(err)
        })
    });
}
