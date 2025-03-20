require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require("./db-connection/mongoDBConnection");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send("Bienvenue sur mon site");
});

// Connexion à MongoDB
connectToDatabase()

app.listen(PORT, () => {
  console.log(`Le serveur a damaré sur le port http://localhost:${PORT}`);
});