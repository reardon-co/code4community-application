import { Database } from "sqlite3"

const dbSource = "db.sqlite"

const db = new Database(dbSource, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    }
    else {
        console.log("connected to database")
        db.run(
            `CREATE TABLE post(
                id      PRIMARY KEY AUTOINCREMENT,
                content TEXT,
                date    TEXT
            )`,
            (e) => {
                if (e) {
                    console.log("Table already created")
                }
            }
        )
    }
})

export default db