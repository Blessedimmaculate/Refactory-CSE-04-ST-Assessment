const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const expressSession = require("express-session");

require("dotenv").config(); // Load environment variables

const app = express();
const port = 3030;

const Register = require("./models/register.js");
const registerRoutes = require("./routes/registerRoutes");

// Database connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

// Set view engine and views path
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse incoming request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express session configurations
app.use(expressSession({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Helps to use passport session in routes

// Passport configuration for Register model
passport.use(Register.createStrategy()); // Use the local strategy in routes
passport.serializeUser(Register.serializeUser()); // Serializes the user for the session
passport.deserializeUser(Register.deserializeUser()); // Deserializes the user from the session

app.use("/", registerRoutes);

// Bootstrap the server
app.listen(port, () => console.log(`Listening on port ${port}`));
