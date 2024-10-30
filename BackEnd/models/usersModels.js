// importo Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creo el Esquema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    },
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    }]
});

const User = mongoose.model('User', userSchema);
// Exporto el model
module.exports = User;

// {
//     "username": "",
//     "password": "",
//     "subjects": [""]
// }