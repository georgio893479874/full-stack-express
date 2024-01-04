import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

mongoose.connect("");

let productsSchema = new Schema({
        "id": Number,
        "title": String,
        "description": String,
        "price": Number,
        "category": String,
        "discountPercentage": Number,
        "rating": Number,
        "stock": Number,
        "brand": String,
        "thumbnail": String,
        "images": Array,
})

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("");
});

app.get('/shop', async (req, res) => {
    products = await Products.find({});
    res.render('template-shop', {products});
})

app.get('/administrator', (req, res) => {
    res.render('template-administrator');
})

app.get('/delete-product/:id',async (req, res) => {
    let id = +req.params.id;
    await Products.deleteOne({id: id})
    res.send({sucess: true})
})

app.listen(port, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("the site is running");
});

