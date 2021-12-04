const router = require("express").Router();
const Workout = require("../models/workout.js");

// new workout route
router.post("/", ({ body }, res) => {
    Workout.create(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// continue workout route
router.get("/", (req, res) => {
    Workout.find({})
      .then((Workout) => {
        res.json(Workout);
      })
      .catch((err) => {
        res.status(400);
      });
  });


module.exports = router;