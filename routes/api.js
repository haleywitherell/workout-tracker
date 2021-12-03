const router = require("express").Router();
const Workout = require("../models/workout.js");

// create workout route
router.post("/", ({ body }, res) => {
    Workout.create(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// create new exercise route 


module.exports = router;