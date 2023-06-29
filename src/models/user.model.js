const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const DOCUMENT_NAME = 'userModel';
const CONNECTION_NAME = 'user';
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
    },
    id_role: {
        type: mongoose.Types.ObjectId, 
        ref: 'roleModel'
    }
}, {
    collection: CONNECTION_NAME,
    timestamps: true,
    versionKey: false
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, userSchema);