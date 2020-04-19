const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const koaBody = require('koa-body')
const mongo = require('koa-mongo')
const logger = require('koa-logger')
const cors = require('@koa/cors')
const helmet = require('koa-helmet')
const compose = require('koa-compose')
const static = require('koa-static')
const router = require('./routes/routes')

const isDev = process.env.NODE_ENV === 'development'

// error handler
onerror(app)

// middlewares
const middlewares = compose([
  koaBody(),
  logger(),
  helmet(),
  cors(),
  static(__dirname + '/public')
])
app.use(middlewares)

if(isDev) {
  app.use(compress())
}

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// mongodb
app.use(mongo({
  uri: 'mongodb://127.0.0.1/medicines' // e:/db1
}))

// routes
app.use(router())

module.exports = app
