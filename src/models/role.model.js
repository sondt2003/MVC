const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const DOCUMENT_NAME = 'roleModel';
const CONNECTION_NAME = 'role';
var roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default:'inactive',
    },
}, {
    collection: CONNECTION_NAME,
    timestamps: true,
    versionKey: false
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, roleSchema);