const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')

const app = express()

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

//Connect DB

mongoose.connect("mongodb+srv://bellobambo:Ayodeji2001@cluster0.diakoyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to MongoDB')
    }).catch(() => {
        console.log('Error connecting to MongoDB')
    })


//Create Product

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
})


// Get Single Product

app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

// Get All Product

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
})


// Update A Product

app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

//Delete A product

app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Hello From Node API');
})

