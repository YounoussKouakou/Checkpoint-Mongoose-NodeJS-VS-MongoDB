require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");


const deletePersonById = async (personId) => {
  try {
    await connectToDatabase();

    const deletedPerson = await Person.findByIdAndDelete(personId);

    if (!deletedPerson) {
      console.log(`⚠️ Aucune personne trouvée avec l'ID "${personId}".`);
    }
    console.log("✅ Personne supprimée :", deletedPerson);
  } catch (error) {
    console.error("❌ Erreur lors de la suppression :", error.message);
  } finally {
    mongoose.connection.close();
  }
};

// Exécuter la suppression avec un ID spécifique (à remplacer)
deletePersonById("67cea7765f199e36ac9a9fa5");