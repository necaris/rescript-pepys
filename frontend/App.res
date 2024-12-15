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

@react.component
let make = () => {
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
            <th> {React.string("Name")} </th>
            <th> {React.string("Job")} </th>
            <th> {React.string("Favorite Color")} </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
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
                  <div className={"font-bold"}> {React.string("Hart Hagerty")} </div>
                  <div className={"text-sm opacity-50"}> {React.string("United States")} </div>
                </div>
              </div>
            </td>
            <td>
              {React.string("Zemlak, Daniel and Leannon")}
              <br />
              <span className={"badge badge-ghost badge-sm"}>
                {React.string("Desktop Support Technician")}
              </span>
            </td>
            <td> {React.string("Purple")} </td>
            <th>
              <button className={"btn btn-ghost btn-xs"}> {React.string("details")} </button>
            </th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th />
            <th> {React.string("Name")} </th>
            <th> {React.string("Job")} </th>
            <th> {React.string("Favorite Color")} </th>
            <th />
          </tr>
        </tfoot>
      </table>
    </div>
  </>
}
