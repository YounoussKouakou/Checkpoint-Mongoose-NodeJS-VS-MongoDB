require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");

const addPeople = async () => {
  try {
    await connectToDatabase();
    const peopleArray = [
      { name: "Ali", age: 20, favoriteFoods: ["placli", "mangue"] },
      { name: "abou", age: 17, favoriteFoods: ["poulet"] },
      { name: "moussa", age: 9, favoriteFoods: ["garba", "yaourt", "gateau"] },
    ];

    // Création de plusieurs personnes
    const savedPeople = await Person.create(peopleArray);
    console.log("✅ Personnes ajoutées :", savedPeople);
  } catch (error) {
    console.error("❌ Erreur lors de l'ajout :", error.message);
  } finally {
    mongoose.connection.close();
  }
}

addPeople();