const userRouter = require('./userRouter');
const subjectRouter = require('./subjectRouter');
const commentRouter = require('./commentRouter');

function routerAPI(app) {
    app.use('/api/users', userRouter);
    app.use('/api/subjects', subjectRouter);
    app.use('/api/comments', commentRouter);
}

module.exports = routerAPI;
