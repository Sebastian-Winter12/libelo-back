const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: false
    },
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;

// {
//     "subject": "",
//     "professor": ""
// }