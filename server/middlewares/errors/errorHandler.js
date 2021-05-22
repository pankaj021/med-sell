const {ValidationError} = require('./index');

module.exports = (err, req, res, next) => {
  // set locals, only providing error in development
  if (err.name == 'ValidationError') {
    console.error(err)
    err = new ValidationError();
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if(!err.status) err.status = 500;
  console.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - ${err.stack}`);

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({
      status: err.status,
      message: err.message,
      name: err.name || "DefaultError",
  });
}