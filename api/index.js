const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


mongoose.connect('mongodb+srv://zainabkashif253:doOrrowdwIljwnaC@cluster0.2smoo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
)
    .then(() => {
        console.log('connected to mongodb')
    })
    .catch(error => {
        console.log('problem connecting')
    })


const User = require('./models/user')

// register
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    try {
        const oldUser = await User.findOne({ email: email });
        if (oldUser) {
            return res.send({ data: "User already exists!!" });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name: name,
            email: email,
            password: encryptedPassword
        })
        await newUser.save();
        res.status(201).send({ data: 'User registered successfully!' });
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ data: 'Internal server error' });
    }
})




app.listen(5001, () => {
    console.log("Node js server started.");
});