// A terrible, bare-bones wrapper around libSQL's native client
type client
@module("@libsql/client")
external createClient: 'whatever => client = "createClient";

type result
@send
external execute: (client, string) => promise<result> = "execute";

let local = (path) => {
  let params = { "url": "file:" ++ path };
  createClient(params)
}

