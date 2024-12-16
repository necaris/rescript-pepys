open Express

let app = express()

app->use(jsonMiddleware())

app->use(staticMiddleware("public"))

app->get("/db", async (_req, res) => {
  let c = DB.local("local.db")
  let r = await DB.execute(c, "SELECT * FROM beans;")
  let _ = res->status(200)->json({"result": r})

})

app->useWithError((err, _req, res, _next) => {
  Js.Console.error(err)
  let _ = res->status(500)->endWithData("An error occurred")
})

let port = 8081
let _ = app->listenWithCallback(port, _ => {
  Js.Console.log(`Listening on http://localhost:${port->Belt.Int.toString}`)
})
