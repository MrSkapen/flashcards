const authJwt = require("../middlewares/authJwt");

const controller = require("../controllers/user");
const controller2 = require("../controllers/auth");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/auth/signup",
        [
            authJwt.checkDuplicateEmail,
        ], controller2.signup);

    app.post("/api/auth/signin", controller2.signin);
    app.post("/api/test/add_flashcard",[authJwt.verifyToken, authJwt.isTeacher], controller.addFlashcard);
    app.get("/api/test/flashcards", [authJwt.verifyToken], controller.getFlashcards);
    app.get("/api/test/flashcards/:id", [authJwt.verifyToken], controller.getFlashcard);
    app.delete("/api/test/flashcards/:id", [authJwt.verifyToken], controller.deleteFlashcard);
    app.get("/api/test/flashcards/:category", [authJwt.verifyToken], controller.getFlashcardsCategory)
};
