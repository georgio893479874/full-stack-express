import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

mongoose.connect("");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const token = jwt.sign({
        email: req.body.email,
        password: req.body.password,
    }, '',);
    res.json({
      success: true,
    });
});

app.listen(port, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('not error');
});

