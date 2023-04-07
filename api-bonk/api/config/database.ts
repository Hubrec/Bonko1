import SQLiteDatabase, { Database } from 'better-sqlite3';

let database: Database;

const connect = (): Promise<void> => {
    return new Promise((resolve) => {
        database = new SQLiteDatabase('bonko1.db');
        loadDatabase(database);
        return resolve();
    });
};

const loadDatabase = (db: Database): void => {

    // use to update the hole database but lose the data stored in it

    // DROP TABLE IF EXISTS comment;
    // DROP TABLE IF EXISTS announcement;
    // DROP TABLE IF EXISTS user;

    const sql = `

        DROP TABLE IF EXISTS comment;
        DROP TABLE IF EXISTS announcement;
        DROP TABLE IF EXISTS user;

        CREATE TABLE IF NOT EXISTS user
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS announcement
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            authorId INTEGER NOT NULL,

            FOREIGN KEY (authorId) REFERENCES user (id)
        );

        CREATE TABLE IF NOT EXISTS comment
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            authorId INTEGER NOT NULL,
            announcementId INTEGER NOT NULL,

            FOREIGN KEY (announcementId) REFERENCES announcement (id),
            FOREIGN KEY (authorId) REFERENCES user (id)
        )
    `;

    const statements = sql.split(';').map((s) => s.trim()).filter((s) => s);
    for (const statement of statements) {
        db.prepare(statement).run();
    }
    
};

export { connect, database };