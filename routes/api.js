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

// previous workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
   .then(dbWorkout => {
     res.json(dbWorkout);
   })
   .catch(err => {
      res.status(400).json(err);
   });
 });

 // add exercise
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true })
  .then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

// workout summary 
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([{
    $addfields: {
      totalDuration: {$sum: '$exercises.duration'},
      totalWeight: {$sum:'$exercises.weight'},
    }
  }])
  .limit(7)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;