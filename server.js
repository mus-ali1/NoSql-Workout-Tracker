//dependencies
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//declare express server
const app = express();


// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
    useUnifiedTopology: true,
   
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
