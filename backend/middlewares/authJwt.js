const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({message: "No token provided!"});
    }
    jwt.verify(token, "secret-key", (err, decoded) => {
        if (err) {
            return res.status(401).send({message: "Unauthorized!"});
        }
        req.userId = decoded.id;
        next();
    });
};

isTeacher = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        Role.findOne({_id: user.roles}, (err, role) => {
                if (role.name === "teacher") {
                    next();
                    return;
                }
                res.status(403).send({message: "Only teacher role user may make this action"});
            }
        );
    });
};

checkDuplicateEmail = (req, res, next) => {
    User.findOne({email: req.body.email})
        .exec((err, user) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            if (user) {
                res.status(400).send({message: "Failed! Username is already in use!"});
                return;
            }
            next();
        });
};

const authJwt = {
    verifyToken,
    isTeacher,
    checkDuplicateEmail
};
module.exports = authJwt;


