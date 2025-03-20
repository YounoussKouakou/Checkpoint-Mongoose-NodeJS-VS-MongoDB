require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");

const updatePersonAge = async (personName) => {
  try {
    await connectToDatabase();

    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );

    if (!updatedPerson) {
      console.log(`⚠️ Aucune personne trouvée avec le nom "${personName}".`);
    } else {
      console.log("✅ Personne mise à jour :", updatedPerson);
    }
  } catch (error) {
    console.error("❌ Erreur lors de la mise à jour :", error.message);
  } finally {
    mongoose.connection.close();
  }
};

// Exécuter la mise à jour avec un nom spécifique
updatePersonAge("Traoré");