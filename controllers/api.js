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
     const workout = await findOneAndUpdate(req.params.id, {
       $push: {exercises: req.body},
     },
     {new:true, runValidators: true}
     );

     } catch(err) {
    res.status(400).json(err)
  }
});

router.post("/workouts", async(req,res) => {
  try{
    XX
  } catch(err) {
    res.status(400).json(err)
  }
})
/* router.post("/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

 */


module.exports = router;
