/*eslint no-unused-vars: off*/
/*eslint no-undef: off*/

const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()

const indexRouter = require('./routes/index')
const menuRouter = require('./routes/menu/index')
const orderRouter = require('./routes/order')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/menu', menuRouter)
app.use('/order', orderRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // return the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
