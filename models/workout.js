const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
        name: {
            type: String,
            required: 'Please enter the exercise name',
        },
        type: {
            type: String,
            required: 'Please enter the type of exercise',
        },
          weights: {
            type: Number
        },
          sets: {
            type: Number
        },
          reps: {
            type: Number
        },
          duration: {
            type: Number,
            required: 'Please enter the duration in minutes',
        },
          distance: {
            type: Number
          },
        },
      ],
      day:{
          type: Date,
          default: Date.now
      },
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
