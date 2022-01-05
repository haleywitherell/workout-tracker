const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now,
    },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter a type to continue',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter a name to continue',
      },
      duration: {
          type: Number,
          required: 'Enter your duration to continue',
      },
      weights: {
          type: Number,
      },
      distance: {
          type: Number,
      },
      sets: {
          type: Number,
      },
      reps: {
          type: Number,
      },
    },
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
