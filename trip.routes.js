const express =require("express");
const{createTrip, endtrip} = require("../controllers/trip.controller");
const router = express.Router();
router.post("/create", createTrip);
router.patch("/eend/:tripId", endTrip);
module.exports = router;
