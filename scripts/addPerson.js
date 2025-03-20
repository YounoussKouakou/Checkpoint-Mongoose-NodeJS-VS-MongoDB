require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");

const addPerson = async () => {
  try {
    // connection à la base de donnee
    await connectToDatabase();

    // Creation d'une nouvelle personne
    const newPerson = new Person({
      name: "Younouss",
      age: 30,
      favoriteFoods: ["Foutou igname & sauce aubergine", "foufou & sauce claire"],
    });
    // Sauvegarde dans MongoDB
    const savedPerson = await newPerson.save();
    console.log("✅ Personne ajoutée :", savedPerson);
  } catch (error) {
    console.error("❌ Erreur lors de l'ajout :", error.message);
  } finally {
    // Fermeture de la connection à la base de données
    mongoose.connection.close();
  }
};

addPerson();