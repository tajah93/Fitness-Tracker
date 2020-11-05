const db = require("../models/fittracker");

module.exports = function(app){ 
    app.get("/api/workouts",function(req,res){  
        db.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts",function (req,res){    
        db.create({})
        .then(data => {
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/workouts/:id",({body,params},res)=>{   
        db.findByIdAndUpdate(  
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
