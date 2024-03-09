const Product = require('../models/product.model.js')


// Get All Product


const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

// Get Single Product


const getSingleProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}




// Create new Product

const createProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

//Update  Product

const updateProduct = async (req, res) => {
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
}

//Delete  Product


const deleteProduct = async (req, res) => {
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
}







module.exports = {
    getProducts,
    getSingleProducts,
    createProducts,
    updateProduct,
    deleteProduct
}