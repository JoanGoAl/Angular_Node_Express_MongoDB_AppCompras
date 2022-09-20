<<<<<<< HEAD
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: String, 
    content: String
}, {
    timestamps: true
})

=======
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: String,
    content: String,
    category: String
}, {
    timestamps: true
})

>>>>>>> fce29b3f22345ace2716398a0efb58ac9a200d31
module.exports = mongoose.model('product', ProductSchema)