import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

mongoose.connect("");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send({status: 200});
});

app.post('/register', (req, res) => {
    const errors = validationResult(req);
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const token = jwt.sign({
        email: req.body.email,
        password: req.body.password,
    }, '',);
    res.json({
      success: true,
      token,
    });
});

app.listen(port, (err) => {
    if(err) {
        return console.log(err);
    }
});

