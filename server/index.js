const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const contactsRouter = require('./routes/contacts');
const contributorRouter = require('./routes/contributor');
const targetRouter = require('./routes/target');
const teacherRouter = require('./routes/teacher');
const donationRouter = require('./routes/donation');

const db = require('./db');
const {NoRouteFound} = require('./middlewares/errors');
const errorHandler = require('./middlewares/errors/errorHandler');

const NODE_PATH = process.cwd();
db.init();
const app = express();

app.set('views', path.join(NODE_PATH, '/ui/templates'));
app.set('view engine', 'pug');
app.use(favicon(path.join(NODE_PATH, 'public', 'icons/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(NODE_PATH, 'public')));

app.use('/', indexRouter);
app.use('/contacts', contactsRouter);
app.use('/contributor', contributorRouter);
app.use('/target', targetRouter);
app.use('/teacher', teacherRouter);
app.use('/donation', donationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(new NoRouteFound('Not Found'));
});

// error handler
app.use(errorHandler);

module.exports = app;
