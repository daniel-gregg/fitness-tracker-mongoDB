const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  exercises: [{
    type: {
      type: String,
      required: "",
    },
    cardioForm: {
      type: String,
    },
    name: {
      type: String,
    },
    resistanceForm: {
      type: String,
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    duration: {  //Note this should be fine for both 'durationInput' and 'resistanceDurationInput'
      type: Number,
    },
    distance: {
      type: Number,
    }, 
  }],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
