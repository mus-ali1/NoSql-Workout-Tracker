const path = require("path");
const router = require("express").Router();
const Workout = require("../models");

// API Routes
router.get("/api/workouts", (req,res) =>{
    Workout.Workout.find({})
    .then((data) => {
      res.json(data);  
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});