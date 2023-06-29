const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const DOCUMENT_NAME = 'catModel';
const CONNECTION_NAME = 'cat';
var catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    collection: CONNECTION_NAME,
    timestamps: true,
    versionKey: false
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, catSchema);