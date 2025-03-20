require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");

const deletePeopleByName = async (personName) => {
  try {
    await connectToDatabase();

    const result = await Person.deleteMany({ name: personName });

    if (result.deletedCount === 0) {
      console.log(`⚠️ Aucune personne trouvée avec le nom "${personName}".`);
    } else {
      console.log(`✅ ${result.deletedCount} personne(s) supprimée(s) avec le nom "${personName}".`);
    }
  } catch (error) {
    console.error("❌ Erreur lors de la suppression :", error.message);
  } finally {
    mongoose.connection.close();
  }
};

// Exécuter la suppression avec un nom spécifique
deletePeopleByName("Mary");
