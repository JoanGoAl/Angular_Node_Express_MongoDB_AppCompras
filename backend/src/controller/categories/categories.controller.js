const { CategoryModel } = require('../../model/index')

exports.getCategories = () => {
    return CategoryModel.find({ title: { $exists: true } }).then((docs) => {
        return docs
    }).catch(err => err)
}

exports.getById = (id) => {
    return CategoryModel.findOne({ _id: id }).then(res => {
        return res
    }).catch(err => err)
}

exports.addCategory = (data) => {
    return CategoryModel.create(data).then(res => {
        return res
    }).catch(err => err)
}

exports.deleteCategory = (id) => {
    return CategoryModel.deleteOne({ _id: id }).then(res => {
        return res
    }).catch(err => err)
}


exports.updateCategory = ({ id, data }) => {
    return CategoryModel.updateOne({ _id: id }, data).then(res => {
        return res
    }).catch(err => err)
}