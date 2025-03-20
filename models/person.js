const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema(
  {
  name: { type: String, required: true, trim: true },
  age: { type: Number, min:0},
  favoriteFoods: { type: [String], default: []},
  },

  { timestamps: true }
);

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;