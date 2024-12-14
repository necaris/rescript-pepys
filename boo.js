import { createClient } from "@libsql/client";

const db = createClient({ url: "file:local.db" });
const result = await db.execute("SELECT * FROM beans;");

console.log(result);
