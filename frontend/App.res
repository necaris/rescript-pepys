// %%raw("import './App.css'")

module Sync = {
  @react.component
  let make = () => {
    <button className="btn btn-primary"> {React.string("Load / Save")} </button>
  }
}

module Tools = {
  @react.component
  let make = () => {
    <ul className="menu menu-horizontal">
      <li>
        <Sync />
      </li>
    </ul>
  }
}

module Api = {
  @decco
  type dbResult = {
    id: int,
    type_: string,
    temperature: int,
  }

  @decco
  type rowTuple = (int, string, int)

  @decco
  type dbResultSet = {
    columnTypes: array<string>,
    columns: array<string>,
    rows: array<rowTuple>,
    rowsAffected: int,
    lastInsertRowId: option<int>,
  }
  @decco
  type response = {result: dbResultSet}
}

module Row = {
  @react.component
  let make = (~row: Api.dbResult) => {
    let tempColor = if row.temperature > 60 {
      "red"
    } else {
      "blue"
    }
    <tr key={row.id->Belt.Int.toString}>
      <th>
        <label>
          <input type_={"checkbox"} className={"checkbox"} />
        </label>
      </th>
      <td>
        <div className={"flex items-center gap-3"}>
          <div className={"avatar"}>
            <div className={"mask mask-squircle h-12 w-12"}>
              <img
                src={"https://img.daisyui.com/images/profile/demo/2@94.webp"}
                alt={"Avatar Tailwind CSS Component"}
              />
            </div>
          </div>
          <div>
            <div className={"font-bold"}> {React.string(row.id->Belt.Int.toString)} </div>
          </div>
        </div>
      </td>
      <td>
        <span className={"badge"}> {React.string(row.type_)} </span>
      </td>
      <td style={ReactDOM.Style.make(~color=tempColor, ())}>
        {React.string(row.temperature->Belt.Int.toString)}
      </td>
      <th>
        <button className={"btn btn-ghost btn-xs"}> {React.string("details")} </button>
      </th>
    </tr>
  }
}

@react.component
let make = () => {
  let (rows: array<Api.dbResult>, setRows) = React.useState(_ => [])
  React.useEffect(() => {
    let load = async () => {
      open Fetch

      let response = await fetch(
        "/db",
        {
          method: #GET,
          body: Body.none,
          headers: Headers.fromObject({
            "Content-type": "application/json",
          }),
        },
      )

      let json = await response->Response.json
      let res = Api.response_decode(json)
      Js.Console.log(res)
      switch res {
      | Ok(d) =>
        setRows(_ =>
          Array.map(d.result.rows, ((i, ty, t)) => {Api.id: i, type_: ty, temperature: t})
        )
      | Error(e) => Js.Console.error(e)
      }
    }
    let _ = load()

    None
  }, [])
  let tblRows = Array.map(rows, row => <Row row />)
  <>
    <Tools />
    <div className={"overflow-x-auto"}>
      <table className={"table"}>
        <thead>
          <tr>
            <th>
              <label>
                <input type_={"checkbox"} className={"checkbox"} />
              </label>
            </th>
            <th> {React.string("ID")} </th>
            <th> {React.string("Type")} </th>
            <th> {React.string("Temperature")} </th>
            <th />
          </tr>
        </thead>
        <tbody> {React.array(tblRows)} </tbody>
        <tfoot>
          <tr>
            <th />
            <th> {React.string("ID")} </th>
            <th> {React.string("Type")} </th>
            <th> {React.string("Temperature")} </th>
            <th />
          </tr>
        </tfoot>
      </table>
    </div>
  </>
}
