const db = require("../models");
const User = db.user;
const Role = db.role;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        Role.findOne({name: "teacher"}, (err, role) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            user.roles = role._id;
            console.log(user);
            user.save(err => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }
                res.send({message: "User was registered successfully!"});
            });
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({email: req.body.email})
        .populate("roles")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            if (!user) {
                return res.status(404).send({message: "User Not found"});
            }
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) {
                return res.status(401).send({accessToken: null, message: "Invalid Password!"});
            }
            const token = jwt.sign({id: user.id}, "secret-key", {expiresIn: 86400});
            console.log(user.roles)
            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.roles.name,
                accessToken: token,
                message: "User was logged successfully!"
            });
        });
};
