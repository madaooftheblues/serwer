const mongoose = require('mongoose');
const { cnicSchema, addressSchema, phoneSchema } = require('./Schemas');

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  dateOfBirth: {
    type: Date,
    unique: true,
    required: true
  },
  cnic: {
    type: cnicSchema,
    unique: true,
    required: true
  },
  phoneNumber: {
    type: phoneSchema,
    unique: true,
    required: true
  },
  address: addressSchema,
  dateAdded: Date
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
