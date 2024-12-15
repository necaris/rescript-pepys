open Express

let app = express()

app->use(jsonMiddleware())

app->get("/", (_req, res) => {
  let _ = res->status(200)->json({"ok": true})
  Promise.resolve()
})

app->get("/db", async (_req, res) => {
  let c = DB.local("local.db")
  let r = await DB.execute(c, "SELECT * FROM beans;")
  Js.Console.log(r);

  let _ = res->status(200)->json({"result": r, "details": %raw(` {"rows": r.rows, "columns": r.columns} `)})

})

app->useWithError((err, _req, res, _next) => {
  Js.Console.error(err)
  let _ = res->status(500)->endWithData("An error occurred")
})

let port = 8081
let _ = app->listenWithCallback(port, _ => {
  Js.Console.log(`Listening on http://localhost:${port->Belt.Int.toString}`)
})
