const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{

        type: {
            type: String,
            trim: true,
            required: "Please enter the type of exercise."
        },

        name: {
            type: String,
            trim: true,
            required: "Please enter the exercise's name."
        },

        duration: {
            type: Number
        },

        weight: {
            type: Number
        },

        reps: {
            type: Number
        },

        sets: {
            type: Number
        },

        distance: {
            type: Number
        } 

    }],

    totalDuration: {
        type: Number,
        default: 10
    }
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;