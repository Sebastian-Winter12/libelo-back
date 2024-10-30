const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        default: 0
    }
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;

// {
//     "name": "",
//     "subject": "",
//     "professor": "",
//     "year": 
// }