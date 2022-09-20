const { ProductModel } = require('../../model/index')

exports.getProducts = () => {
    return ProductModel.find({ title: { $exists: true } }).then((docs) => {
        return docs
    }).catch(err => err)
}

exports.addProduct = (data) => {
    return ProductModel.create(data).then(res => {
        return res
    }).catch(err => err)
}

exports.deleteProduct = (id) => {
    return ProductModel.deleteOne({ _id: id }).then(res => {
        return res
    }).catch(err => err)
}

exports.getById = (id) => {
    return ProductModel.findOne({ _id: id }).then(res => {
        return res
    }).catch(err => err)
}

exports.updateProduct = ({ id, data }) => {
    return ProductModel.updateOne({ _id: id }, data).then(res => {
        return res
    }).catch(err => err)
}