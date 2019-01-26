const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const TelegramBot = require('node-telegram-bot-api')
const indexRouter = require('./routes/index');
const order = require('./routes/order')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', order)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


// Bot usage

require('dotenv-extended').load({
  encoding: 'utf8',
  silent: true,
  path: '.env',
  defaults: '.env.defaults',
  schema: '.env.schema',
  errorOnMissing: false,
  errorOnExtra: false,
  includeProcessEnv: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false
});

const token = process.env.BOTTOKEN
const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/menu/, (msg) => {
  const response = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Nasi + Kangkung Tumis + Perkedel + Jeruk'],
        ['Nasi + Daun Ubi Santan + Bakwan + Ayam Penyet']
      ]
    })
    
  }
  bot.sendMessage(msg.chat.id, 'What do you want to order?', response)
  return response.reply_markup.keyboard = []
})

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id

  const syntax = [
    '/order',
    '/menu',
    '/checkPayment',
  ]
  bot.sendMessage(chatId, `Use this for order: ${syntax[0]} , this one for list menu ${syntax[1]} , and this one for check your payment status ${syntax[2]}`)
})
module.exports = app;
