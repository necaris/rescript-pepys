// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Decco from "@rescript-labs/decco/src/Decco.res.mjs";
import * as React from "react";
import * as Js_dict from "rescript/lib/es6/js_dict.js";
import * as Js_json from "rescript/lib/es6/js_json.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as JsxRuntime from "react/jsx-runtime";

function App$Sync(props) {
  return JsxRuntime.jsx("button", {
              children: "Load / Save",
              className: "btn btn-primary"
            });
}

var Sync = {
  make: App$Sync
};

function App$Tools(props) {
  return JsxRuntime.jsx("ul", {
              children: JsxRuntime.jsx("li", {
                    children: JsxRuntime.jsx(App$Sync, {})
                  }),
              className: "menu menu-horizontal"
            });
}

var Tools = {
  make: App$Tools
};

function dbResult_encode(value) {
  return Js_dict.fromArray([
              [
                "id",
                Decco.intToJson(value.id)
              ],
              [
                "type_",
                Decco.stringToJson(value.type_)
              ],
              [
                "temperature",
                Decco.intToJson(value.temperature)
              ]
            ]);
}

function dbResult_decode(value) {
  var dict = Js_json.classify(value);
  if (typeof dict !== "object") {
    return Decco.error(undefined, "Not an object", value);
  }
  if (dict.TAG !== "JSONObject") {
    return Decco.error(undefined, "Not an object", value);
  }
  var dict$1 = dict._0;
  var id = Decco.intFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "id"), null));
  if (id.TAG === "Ok") {
    var type_ = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "type_"), null));
    if (type_.TAG === "Ok") {
      var temperature = Decco.intFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "temperature"), null));
      if (temperature.TAG === "Ok") {
        return {
                TAG: "Ok",
                _0: Decco.unsafeAddFieldToObject("id", id._0, Decco.unsafeAddFieldToObject("type_", type_._0, Decco.unsafeAddFieldToObject("temperature", temperature._0, {})))
              };
      }
      var e = temperature._0;
      return {
              TAG: "Error",
              _0: {
                path: ".temperature" + e.path,
                message: e.message,
                value: e.value
              }
            };
    }
    var e$1 = type_._0;
    return {
            TAG: "Error",
            _0: {
              path: ".type_" + e$1.path,
              message: e$1.message,
              value: e$1.value
            }
          };
  }
  var e$2 = id._0;
  return {
          TAG: "Error",
          _0: {
            path: ".id" + e$2.path,
            message: e$2.message,
            value: e$2.value
          }
        };
}

function rowTuple_encode(value) {
  return [
          Decco.intToJson(value[0]),
          Decco.stringToJson(value[1]),
          Decco.intToJson(value[2])
        ];
}

function rowTuple_decode(value) {
  var match = Js_json.classify(value);
  if (typeof match !== "object") {
    return Decco.error(undefined, "Not a tuple", value);
  }
  if (match.TAG !== "JSONArray") {
    return Decco.error(undefined, "Not a tuple", value);
  }
  var match$1 = match._0;
  if (match$1.length !== 3) {
    return Decco.error(undefined, "Incorrect cardinality", value);
  }
  var v0 = match$1[0];
  var v1 = match$1[1];
  var v2 = match$1[2];
  var match$2 = Decco.intFromJson(v0);
  var match$3 = Decco.stringFromJson(v1);
  var match$4 = Decco.intFromJson(v2);
  if (match$2.TAG === "Ok") {
    if (match$3.TAG === "Ok") {
      if (match$4.TAG === "Ok") {
        return {
                TAG: "Ok",
                _0: [
                  match$2._0,
                  match$3._0,
                  match$4._0
                ]
              };
      }
      var e = match$4._0;
      return {
              TAG: "Error",
              _0: {
                path: "[2]" + e.path,
                message: e.message,
                value: e.value
              }
            };
    }
    var e$1 = match$3._0;
    return {
            TAG: "Error",
            _0: {
              path: "[1]" + e$1.path,
              message: e$1.message,
              value: e$1.value
            }
          };
  }
  var e$2 = match$2._0;
  return {
          TAG: "Error",
          _0: {
            path: "[0]" + e$2.path,
            message: e$2.message,
            value: e$2.value
          }
        };
}

function dbResultSet_encode(value) {
  return Js_dict.fromArray([
              [
                "columnTypes",
                (function (extra) {
                      return Decco.arrayToJson(Decco.stringToJson, extra);
                    })(value.columnTypes)
              ],
              [
                "columns",
                (function (extra) {
                      return Decco.arrayToJson(Decco.stringToJson, extra);
                    })(value.columns)
              ],
              [
                "rows",
                (function (extra) {
                      return Decco.arrayToJson(rowTuple_encode, extra);
                    })(value.rows)
              ],
              [
                "rowsAffected",
                Decco.intToJson(value.rowsAffected)
              ],
              [
                "lastInsertRowId",
                (function (extra) {
                      return Decco.optionToJson(Decco.intToJson, extra);
                    })(value.lastInsertRowId)
              ]
            ]);
}

function dbResultSet_decode(value) {
  var dict = Js_json.classify(value);
  if (typeof dict !== "object") {
    return Decco.error(undefined, "Not an object", value);
  }
  if (dict.TAG !== "JSONObject") {
    return Decco.error(undefined, "Not an object", value);
  }
  var dict$1 = dict._0;
  var extra = Belt_Option.getWithDefault(Js_dict.get(dict$1, "columnTypes"), null);
  var columnTypes = Decco.arrayFromJson(Decco.stringFromJson, extra);
  if (columnTypes.TAG === "Ok") {
    var extra$1 = Belt_Option.getWithDefault(Js_dict.get(dict$1, "columns"), null);
    var columns = Decco.arrayFromJson(Decco.stringFromJson, extra$1);
    if (columns.TAG === "Ok") {
      var rows = Decco.arrayFromJson(rowTuple_decode, Belt_Option.getWithDefault(Js_dict.get(dict$1, "rows"), null));
      if (rows.TAG === "Ok") {
        var rowsAffected = Decco.intFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "rowsAffected"), null));
        if (rowsAffected.TAG === "Ok") {
          var extra$2 = Belt_Option.getWithDefault(Js_dict.get(dict$1, "lastInsertRowId"), null);
          var lastInsertRowId = Decco.optionFromJson(Decco.intFromJson, extra$2);
          if (lastInsertRowId.TAG === "Ok") {
            return {
                    TAG: "Ok",
                    _0: Decco.unsafeAddFieldToObject("columnTypes", columnTypes._0, Decco.unsafeAddFieldToObject("columns", columns._0, Decco.unsafeAddFieldToObject("rows", rows._0, Decco.unsafeAddFieldToObject("rowsAffected", rowsAffected._0, Decco.unsafeAddFieldToObject("lastInsertRowId", lastInsertRowId._0, {})))))
                  };
          }
          var e = lastInsertRowId._0;
          return {
                  TAG: "Error",
                  _0: {
                    path: ".lastInsertRowId" + e.path,
                    message: e.message,
                    value: e.value
                  }
                };
        }
        var e$1 = rowsAffected._0;
        return {
                TAG: "Error",
                _0: {
                  path: ".rowsAffected" + e$1.path,
                  message: e$1.message,
                  value: e$1.value
                }
              };
      }
      var e$2 = rows._0;
      return {
              TAG: "Error",
              _0: {
                path: ".rows" + e$2.path,
                message: e$2.message,
                value: e$2.value
              }
            };
    }
    var e$3 = columns._0;
    return {
            TAG: "Error",
            _0: {
              path: ".columns" + e$3.path,
              message: e$3.message,
              value: e$3.value
            }
          };
  }
  var e$4 = columnTypes._0;
  return {
          TAG: "Error",
          _0: {
            path: ".columnTypes" + e$4.path,
            message: e$4.message,
            value: e$4.value
          }
        };
}

function response_encode(value) {
  return Js_dict.fromArray([[
                "result",
                dbResultSet_encode(value.result)
              ]]);
}

function response_decode(value) {
  var dict = Js_json.classify(value);
  if (typeof dict !== "object") {
    return Decco.error(undefined, "Not an object", value);
  }
  if (dict.TAG !== "JSONObject") {
    return Decco.error(undefined, "Not an object", value);
  }
  var result = dbResultSet_decode(Belt_Option.getWithDefault(Js_dict.get(dict._0, "result"), null));
  if (result.TAG === "Ok") {
    return {
            TAG: "Ok",
            _0: Decco.unsafeAddFieldToObject("result", result._0, {})
          };
  }
  var e = result._0;
  return {
          TAG: "Error",
          _0: {
            path: ".result" + e.path,
            message: e.message,
            value: e.value
          }
        };
}

var Api = {
  dbResult_encode: dbResult_encode,
  dbResult_decode: dbResult_decode,
  rowTuple_encode: rowTuple_encode,
  rowTuple_decode: rowTuple_decode,
  dbResultSet_encode: dbResultSet_encode,
  dbResultSet_decode: dbResultSet_decode,
  response_encode: response_encode,
  response_decode: response_decode
};

function App$Row(props) {
  var row = props.row;
  var tempColor = row.temperature > 60 ? "red" : "blue";
  return JsxRuntime.jsxs("tr", {
              children: [
                JsxRuntime.jsx("th", {
                      children: JsxRuntime.jsx("label", {
                            children: JsxRuntime.jsx("input", {
                                  className: "checkbox",
                                  type: "checkbox"
                                })
                          })
                    }),
                JsxRuntime.jsx("td", {
                      children: JsxRuntime.jsxs("div", {
                            children: [
                              JsxRuntime.jsx("div", {
                                    children: JsxRuntime.jsx("div", {
                                          children: JsxRuntime.jsx("img", {
                                                alt: "Avatar Tailwind CSS Component",
                                                src: "https://img.daisyui.com/images/profile/demo/2@94.webp"
                                              }),
                                          className: "mask mask-squircle h-12 w-12"
                                        }),
                                    className: "avatar"
                                  }),
                              JsxRuntime.jsx("div", {
                                    children: JsxRuntime.jsx("div", {
                                          children: String(row.id),
                                          className: "font-bold"
                                        })
                                  })
                            ],
                            className: "flex items-center gap-3"
                          })
                    }),
                JsxRuntime.jsx("td", {
                      children: JsxRuntime.jsx("span", {
                            children: row.type_,
                            className: "badge"
                          })
                    }),
                JsxRuntime.jsx("td", {
                      children: String(row.temperature),
                      style: {
                        color: tempColor
                      }
                    }),
                JsxRuntime.jsx("th", {
                      children: JsxRuntime.jsx("button", {
                            children: "details",
                            className: "btn btn-ghost btn-xs"
                          })
                    })
              ]
            }, String(row.id));
}

var Row = {
  make: App$Row
};

function App(props) {
  var match = React.useState(function () {
        return [];
      });
  var setRows = match[1];
  React.useEffect((function () {
          var load = async function () {
            var response = await fetch("/db", {
                  method: "GET",
                  body: Caml_option.some(null),
                  headers: Caml_option.some(new Headers({
                            "Content-type": "application/json"
                          }))
                });
            var json = await response.json();
            var res = response_decode(json);
            console.log(res);
            if (res.TAG === "Ok") {
              var d = res._0;
              return setRows(function (param) {
                          return d.result.rows.map(function (param) {
                                      return {
                                              id: param[0],
                                              type_: param[1],
                                              temperature: param[2]
                                            };
                                    });
                        });
            }
            console.error(res._0);
          };
          load();
        }), []);
  var tblRows = match[0].map(function (row) {
        return JsxRuntime.jsx(App$Row, {
                    row: row
                  });
      });
  return JsxRuntime.jsxs(JsxRuntime.Fragment, {
              children: [
                JsxRuntime.jsx(App$Tools, {}),
                JsxRuntime.jsx("div", {
                      children: JsxRuntime.jsxs("table", {
                            children: [
                              JsxRuntime.jsx("thead", {
                                    children: JsxRuntime.jsxs("tr", {
                                          children: [
                                            JsxRuntime.jsx("th", {
                                                  children: JsxRuntime.jsx("label", {
                                                        children: JsxRuntime.jsx("input", {
                                                              className: "checkbox",
                                                              type: "checkbox"
                                                            })
                                                      })
                                                }),
                                            JsxRuntime.jsx("th", {
                                                  children: "ID"
                                                }),
                                            JsxRuntime.jsx("th", {
                                                  children: "Type"
                                                }),
                                            JsxRuntime.jsx("th", {
                                                  children: "Temperature"
                                                }),
                                            JsxRuntime.jsx("th", {})
                                          ]
                                        })
                                  }),
                              JsxRuntime.jsx("tbody", {
                                    children: tblRows
                                  }),
                              JsxRuntime.jsx("tfoot", {
                                    children: JsxRuntime.jsxs("tr", {
                                          children: [
                                            JsxRuntime.jsx("th", {}),
                                            JsxRuntime.jsx("th", {
                                                  children: "ID"
                                                }),
                                            JsxRuntime.jsx("th", {
                                                  children: "Type"
                                                }),
                                            JsxRuntime.jsx("th", {
                                                  children: "Temperature"
                                                }),
                                            JsxRuntime.jsx("th", {})
                                          ]
                                        })
                                  })
                            ],
                            className: "table"
                          }),
                      className: "overflow-x-auto"
                    })
              ]
            });
}

var make = App;

export {
  Sync ,
  Tools ,
  Api ,
  Row ,
  make ,
}
/* react Not a pure module */
