const { supabase } = require("../config/supabase");

exports.createTrip = async (req, res) => {
  const { customer_id, vehicle_id, passengers, distance_km } = req.body;

  const vehicle = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", vehicle_id)
    .single();

  if (!vehicle.data.isAvailable)
    return res.status(400).json({ message: "Vehicle not available" });

  if (passengers > vehicle.data.allowed_passengers)
    return res.status(400).json({ message: "Passenger limit exceeded" });

  await supabase.from("trips").insert([req.body]);
  await supabase.from("vehicles").update({ isAvailable: false }).eq("id", vehicle_id);

  res.status(201).json({ message: "Trip created" });
};

exports.endTrip = async (req, res) => {
  const { tripId } = req.params;

  const trip = await supabase
    .from("trips")
    .select("*, vehicles(rate_per_km)")
    .eq("id", tripId)
    .single();

  const tripCost = trip.data.distance_km * trip.data.vehicles.rate_per_km;

  await supabase.from("trips").update({
    isCompleted: true,
    tripCost
  }).eq("id", tripId);

  await supabase.from("vehicles")
    .update({ isAvailable: true })
    .eq("id", trip.data.vehicle_id);

  res.json({ message: "Trip ended", tripCost });
};
