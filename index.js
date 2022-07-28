const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.response.type = "text/plain";
  ctx.body = "Hello";

  console.log("ctx", ctx.response);
});

app.listen(3000);
