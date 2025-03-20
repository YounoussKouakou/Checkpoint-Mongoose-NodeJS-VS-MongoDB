require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connection/mongoDBConnection");



const findPeopleWhoLikeBurritos = async () => {
  try {
    await connectToDatabase();

    const people = await Person.find({ favoriteFoods: "Burritos" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age")
      .exec();

    if (people.length === 0) {
      console.log("⚠️ Aucune personne ne semble aimer les Burritos.");
    } else {
      console.log("✅ Personnes trouvées :", people);
    }
  } catch (error) {
    console.error("❌ Erreur lors de la recherche :", error);
  } finally {
    mongoose.connection.close();
  }
};

// Exécuter la recherche avancée
findPeopleWhoLikeBurritos();