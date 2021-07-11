const router = require("express").Router();
const { findOneAndUpdate } = require("../models/workout.js");
const Workout = require("../models/workout.js");

//Get last workout route
router.get("/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({day: -1})
    res.json(workouts);

  } catch(err) {
    res.status(400).json(err);
  }
});

router.put("/workouts/:id", async(req,res) => {
  try {
    console.log(req.params.id)
    console.log(req.body)
    const workout = await Workout.findOneAndUpdate(req.params.id, 
      {$push: {"exercises": req.body}},
      {new:true}
      );
    res.json(workout)
    } catch(err) {
      console.log(err)
      res.status(400).json(err)
    }
});

router.post("/workouts", async(req,res) => {
  try{
    const workout = await new Workout({});
    const newWorkout = await workout.save({});
    res.json(newWorkout);
  } catch(err) {
    res.status(400).json(err)
  }
})


//Get last workout route
router.get(`/workouts/range`, async (req, res) => {
  try {
    let workouts = await Workout.aggregate([
      { "$addFields": { 
        "totalDuration" : {
          "$reduce": {
                "input": "$exercises",
                "initialValue": 0,
                "in" : {"$add" : ["$$value", "$$this.duration"] }
              }
            }
          }
        }
    ])

    console.log(workouts)
    
    res.json(workouts);

  } catch(err) {
    res.status(400).json(err);
  }
});



module.exports = router;
