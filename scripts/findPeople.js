require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");

const findPeopleByName = async (personName) => {
  try {
    await connectToDatabase();

    const people = await Person.find({ name: personName });

    if (people.length === 0) {
      console.log(`⚠️ Aucune personne trouvée avec le nom "${personName}".`);
    } else {
      console.log(`✅ Personnes trouvées avec le nom "${personName}" :`, people);
    }
  } catch (error) {
    console.error("❌ Erreur lors de la recherche :", error);
  } finally {
    mongoose.connection.close();
  }
};

// Exécuter la recherche
findPeopleByName("YOUNOUSSKOUAKOU");