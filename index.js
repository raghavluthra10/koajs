const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = ctx.cookies.get("foo");
  console.log("ctx get req cookie", ctx);
});

app.listen(3000);
