const db = require("../models");
const Flashcards = db.flashcards;

exports.addFlashcard = (req, res) => {
    console.log(req.body);
    const flashcards = new Flashcards({
        word: req.body.word,
        meaning: req.body.meaning,
        category: req.body.category,
        urladdress: req.body.urladdress
    });
    flashcards.save((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        res.send({message: "Flashcard add successfully!"});
    })
}

exports.getFlashcards = (req, res) => {
    Flashcards.find({})
        .exec((err, cards) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            res.status(200).send({
                cards: cards
            });
        });
}

exports.deleteFlashcard = (req, res) => {
    console.log(req.params.id);
    Flashcards.deleteOne({_id: req.params.id}, function (err, results) {
        if (err) {
            console.log("failed");
            throw err;
        }
        console.log("success");

    });
    res.status(200);
}

exports.getFlashcard = (req, res) => {
    Flashcards.findOne({_id: req.params.id})
        .exec((err, cards) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            res.status(200).send({
                cards: cards
            });
        });
}

exports.getFlashcardsCategory = (req, res) => {
    let cat = req.params.category
    Flashcards.find({category: cat})
        .exec((err, cards) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            res.status(200).send({
                cards: cards
            });
        });
}
