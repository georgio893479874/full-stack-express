import express from 'express';

const app = express();
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('Hello45');
});

app.listen(port, (err) => {
    if(err) {
        return console.log(err);
    }

    console.log('not error');
});
// http://localhost:3000/