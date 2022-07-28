const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.state.foo = "foo";
  console.log("ctx 1", ctx);
  await next();
});

app.use(async (ctx) => {
  ctx.body = ctx.state.foo;
  console.log("ctx 2", ctx);
});

app.listen(3000);
