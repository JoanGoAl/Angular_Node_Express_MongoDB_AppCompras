const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name: String,
    description: String
}, {
    timestamps: true
})

module.exports = mongoose.model('category', CategorySchema)