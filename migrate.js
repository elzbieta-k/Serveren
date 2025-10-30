const db = require("./database/database")

db.prepare("DROP TABLE IF EXISTS employees").run();

db.prepare(
  `
    CREATE TABLE employees
    (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    job_title TEXT NOT NULL
    )
    `
).run();

console.log("Migration done")