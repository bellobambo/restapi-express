const express = require('express')
const mongoose = require('mongoose');
// const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

const app = express()


//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
app.use('/api/products', productRoute)



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

//Connect DB

MONGO_URI = 'mongodb+srv://bellobambo:Ayodeji2001@cluster0.diakoyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
    }).catch((error) => {
        console.log('Error connecting to MongoDB', error)
    })





