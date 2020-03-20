module.exports = function(ctx) {
  ctx.set({'Access-Control-Allow-Origin': "*"})
  ctx.set({'Access-Control-Allow-Headers': 'Content-Type, Authentication'})  // 允许跨域携带的请求头
  ctx.set({'Access-Control-Allow-Methods': 'PUT'})  // 允许跨域的请求方法，默认允许 GET POST，用来响应 OPTIONS 预检请求
  ctx.set({'Access-Control-Max-Age': 6})  // 预检的存活时间
  ctx.set({'Access-Control-Expose-Headers': 'name,id'})  // 跨域请求中，允许前端获取的响应头
  if(ctx.request.method === 'OPTIONS'){  // 需要对 OPTIONS 请求作出相应，否则会报 404 错误
    ctx.body = ['GET', 'POST', 'PUT']
  }
}