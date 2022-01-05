const router = require("express").Router();
const Workout = require("../models/workout.js");

// new workout 
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// previous workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
   .then(workout => {
     res.json(workout);
   })
   .catch(err => {
      res.status(400).json(err);
   });
 });

 // add exercise
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true })
  .then(workout => {
    res.json(workout);
  }).catch(err => {
    res.json(err);
  });
});

// dashboard
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([{
    $addfields: {
      totalDuration: {$sum: '$exercises.duration'},
      totalWeight: {$sum:'$exercises.weight'},
    }
  }])
  .limit(7)
  .then(workout => {
    res.json(workout); 
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;