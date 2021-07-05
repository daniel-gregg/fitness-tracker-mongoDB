const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/exercise/:id", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    console.log(workout)
    res.sendFile(workout);

  } catch(err) {
    res.status(400).json(err);
  }
});

/* 
router.get("/exercise", async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({day: -1})
    res.sendFile(workout);
  } catch(err) {
    res.status(400).json(err);
  }
});
 */
/* 
router.get("/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({day: -1})
    res.json(workouts);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.get('/workouts/range', async(req,res) =>{
  XX
})

router.post("/workouts", async(req,res) => {
  try {
    const workout = await new Workout();
    await workout.save()
    res.sendFile(workout)
  } catch(err) {
    res.status(400).json(err)
  }
});
 */
/* router.put('/workouts/:id', async, (req,res) => {

})
 */

module.exports = router;