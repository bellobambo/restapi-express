const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

mongoose.connect("mongodb+srv://bellobambo:Ayodeji2001@cluster0.diakoyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to MongoDB')
    }).catch(() => {
        console.log('Error connecting to MongoDB')
    })


app.get('/', (req, res) => {
    res.send('Hello From Node API');
})

