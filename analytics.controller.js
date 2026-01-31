const {supabase} = require("../config/supabase");
exports.getAnalytics=async(req, res) => {
  const customers=await supabase.from("users").select("id", {count: "exact" }).eq("role", "customer");
  const owners=await supabase.from("users").select("id", {count: "exact" }).eq("role", "owner");
  const drivers=await supabase.from("users").select("id", {count: "exact" }).eq("role", "driver");
  const vehicles=await supabase.from("vehicles").select("id", {count: "exact" });
  const trips=await supabase.from("trips").select("id", {count: "exact" });

  res.json({
    totalCustomers: custmer.count,
    totalOwners: owners.count,
    totalDrivers:drivers.count,
    totalVehicles: vehicles.count,
    totalTrips: trips.count
  });
};
