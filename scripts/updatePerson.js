require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");

const updateFavoriteFoods = async (personId) => {
  try {
    await connectToDatabase();

    const person = await Person.findById(personId);

    if (!person) {
      console.log(`⚠️ Aucune personne trouvée avec l'ID "${personId}".`);
      return;
    }
    // Ajouter "Hamburger" à favoriteFoods
    person.favoriteFoods.push("placli");

    person.markModified("favoriteFoods");

    // Sauvegarder les modifications
    const updatedPerson = await person.save();
    console.log("✅ Personne mise à jour :", updatedPerson);
  } catch (error) {
    console.error("❌ Erreur lors de la mise à jour :", error.message);
  } finally {
    mongoose.connection.close();
  }
};

// Exécuter la mise à jour avec un ID spécifique (à remplacer)
updateFavoriteFoods("67ceace7a658e2ee14e86259");