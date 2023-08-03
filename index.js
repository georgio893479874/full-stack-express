import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/login', (req, res) => {
    console.log(req.body);
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

