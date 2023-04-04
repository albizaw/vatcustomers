import mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    unique: false,
  },
  lastname: {
    type: String,
    required: true,
    unique: false,
  },
  vat: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: false,
  },
  city: {
    type: String,
    required: true,
    unique: false,
  },
  zip: {
    type: String,
    required: true,
    unique: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('Customer', CustomerSchema);
