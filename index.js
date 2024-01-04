import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

mongoose.connect("").then(() => console.log('Data base running')).catch((err) => console.log('Data base running', err));

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

let Products = mongoose.model('product', productsSchema);
let products = await Products.find({});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/products/:number', (req, res) => {
    let number = +req.params.number;
    res.render('template-goods.ejs', {data: products[number+1]});
})

app.post('/new-product', async (req, res) => {
    let name = req.body.name.toString();
    let price = req.body.price.toString();
    let description = req.body.description.toString();
    let image = req.body.image.toString();
    let select = req.body.category.toString();
    let products_ = await Products.find({});

    await Products.insertMany([             
        {
            "id": products_.length + 1,
            "title": name,
            "description": description,
            "price": price,
            "category": select,
            "discountPercentage": ,
            "rating": ,
            "stock": ,
            "brand": "",
            "thumbnail": "",
            "images": [
                image,
            ]
        }]);
    res.send('success: true');
})

app.get('/administrator', (req, res) => {
    res.render('template-administrator');
})

app.get('/shop', async (req, res) => {
    products = await Products.find({});
    res.render('template-shop', {products});
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

