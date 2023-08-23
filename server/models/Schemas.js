const mongoose = require('mongoose');

const cnicSchema = new mongoose.Schema({
  type: String,
  validate: {
    validator: function (cnic) {
      // CNIC format: 12345-1234567-1 or 1234512345671
      const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$|^[0-9]{13}$/;
      return cnicRegex.test(cnic);
    },
    message:
      'Invalid CNIC format. Use the format 12345-1234567-1 or 1234512345671.'
  }
});

const addressSchema = new mongoose.Schema({
  street: String,
  area: String,
  city: String,
  state: String
});

const phoneSchema = new mongoose.Schema({
  type: String,
  validate: {
    validator: function (phoneNumber) {
      // Phone number format: +92 3XX-XXXXXXX or 03XX-XXXXXXX
      const phoneNumberRegex = /^(?:\+92\s|0)(?:(3[0-9]{2})[-\s]?([0-9]{7}))$/;
      return phoneNumberRegex.test(phoneNumber);
    },
    message: 'Invalid phone number format. Use +92 3XX-XXXXXXX or 03XX-XXXXXXX.'
  }
});

module.exports = { cnicSchema, addressSchema, phoneSchema };
