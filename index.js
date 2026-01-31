require("dotenv").config();
const express = require("express");
const logger= require("./middlewares/logger.middleware");
const notFound = require("./middlewares/notFound.middleware");
const userRoutes=require("./routes/user.routes");
const vehicleRoutes=require("./routes/vehicle.routes");
const tripRoutes=require("./routes/trip.routes");
const analyticsRoutes=require("./routes/analytics.routes");

const app=express();
app.use(express.json());
app.use(logger);
app.use("/users", userRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/trips", tripsRoutes);
app.use("/analytics", analyticsRoutes);
app.use(notFoud);
app.listen(process.env.PORT, () => {
  console.log('Server running on port ${process.env.PORT}');
});
