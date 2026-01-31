Const rateLimit = require("express-rate-limit");
module.exports=rateLimit({
  windowsMs: 60*1000,
  max:3,
  mesaage:"Too many requests, try again Later"
});
