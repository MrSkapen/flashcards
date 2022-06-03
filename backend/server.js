const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {origin: "*"};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const MONGO_URI = "mongodb+srv://user01:Haslo123@cluster0.y4l5z.mongodb.net/my-page?retryWrites=true&w=majority";
const db = require("./models");
const Role = db.role;
db.mongoose
    .connect(MONGO_URI, {useNewUrlParser: true})
    .then(() => {
        addRoles()
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

require("./routes/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function addRoles() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({name: "user"}).save(err => {
                if (err) {
                    console.log("error", err);
                }
            });
            new Role({name: "teacher"}).save(err => {
                if (err) {
                    console.log("error", err);
                }
            });
        }
    });
}
