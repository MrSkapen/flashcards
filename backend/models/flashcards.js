const mongoose = require("mongoose");

const Flashcards = mongoose.model(
    "Flashcards",
    new mongoose.Schema({
        word: String,
        meaning: String,
        category: String,
        urladdress: String
    })
);

module.exports = Flashcards;
