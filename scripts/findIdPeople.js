require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");

const findPersonById = async (personId) => {
  try {
    await connectToDatabase();

    const person = await Person.findById(personId);

    if (!person) {
      console.log(`⚠️ Aucune personne trouvée avec l'ID "${personId}".`);
    }
    console.log(`✅ Personne trouvée avec l'ID "${personId}" :`, person);
  } catch (error) {
    console.error("❌ Erreur lors de la recherche :", error.message);
  } finally {
    mongoose.connection.close();
  }
};

// Exécuter la recherche avec un ID spécifique (à remplacer)
findPersonById("67ceace7a658e2ee14e86259");