const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const DOCUMENT_NAME = 'productModel';
const CONNECTION_NAME = 'product';
var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    id_cat: {
        type: mongoose.Types.ObjectId, 
        ref: 'catModel'
    }
}, {
    collection: CONNECTION_NAME,
    timestamps: true,
    versionKey: false
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, productSchema);