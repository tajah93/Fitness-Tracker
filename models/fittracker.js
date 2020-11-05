const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fittrackerSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    excersises: [{

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

    }]
});

const fittracker = mongoose.model("fittracker", fittrackerSchema);

module.exports = fittracker;