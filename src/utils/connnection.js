const mongoose = require("mongoose");
mongoose.connect(
  // "mongodb://localhost:27017/cinema-plus",
  // "mongodb+srv://user:<password>@cluster0.fc0b6vz.mongodb.net/test",

  "mongodb+srv://thakurkrish50:thakur4321@cluster0.7zawhpx.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
    console.log("DATABASE IS CONNECTED! All set to go!");
  }
);


