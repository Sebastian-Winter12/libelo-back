const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;

// {
//     "body": "",
//     "likes": ,
//     "userId": "",
//     "subjectId": ""
// }