const mongoose = require('mongoose');
const { cnicSchema, addressSchema, phoneSchema } = require('./Schemas');

const staffSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
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
  description: String,
  dateAdded: Date,
  score: Number,
  currentEmployer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  pastEmployers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const staffModel = mongoose.model('Staff', staffSchema);

module.exports = staffModel;
