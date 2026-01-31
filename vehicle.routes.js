const express = require("express");
const rateLimiter = require("../middlewares/rateLimiter.middleware");
const { addVehicle, assignDriver, getVehicle} = require("../controllers/vehicle.controller");
const {addVehicle, assiignDriver, getVehicle} = require("../controllers/vehicle.controller");
router.post("/add", rateLimiter, addVehicle);
router.patch("/assign-driver/:vehicleId", assignDriver);
router.get("/:vehicleId", getVehicle);
module.exports=router;
