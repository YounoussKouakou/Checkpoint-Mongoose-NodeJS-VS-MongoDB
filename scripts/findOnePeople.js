require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");

const findOneByFavoriteFood = async (food) => {
  try {
    await connectToDatabase();

    const person = await Person.findOne({ favoriteFoods: food });

    if (!person) {
      console.log(`⚠️ Aucune personne trouvée qui aime "${food}".`);
    }
    console.log(`✅ Personne trouvée qui aime "${food}" :`, person);
  } catch (error) {
    console.error("❌ Erreur lors de la recherche :", error.message);
  } finally {
    mongoose.connection.close();
  }
};

// Exécuter la recherche
findOneByFavoriteFood("riz");