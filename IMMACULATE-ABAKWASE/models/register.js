const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const registerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  nationality: {
    type: String,
    trim: true,
    required: true
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  poBox: {
    type: String,
    trim: true
  },
  emergencyPhoneNumber: {
    type: String,
    trim: true,
    required: true
  },
  passportNumber: {
    type: String,
    trim: true,
    required: true
  },
  visaDocument: {
    type: Buffer, // To handle file uploads
    required: true
  },
  departureCity: {
    type: String,
    trim: true,
    required: true
  },
  destinationCity: {
    type: String,
    trim: true,
    required: true
  }
});

// Use passport-local-mongoose to add passport authentication methods to the schema
registerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Register", registerSchema);
