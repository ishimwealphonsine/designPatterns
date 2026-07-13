"use strict";
// Singleton Pattern: ensures only one instance of a class is created.
class DatabaseConnection {
    // The constructor is private so outside code cannot create extra instances.
    constructor() { }
    static getInstance() {
        // Create the instance the first time it is requested.
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
    query(sql) {
        return `Running query: ${sql}`;
    }
}
// The single shared instance is stored here.
DatabaseConnection.instance = null;
// Example usage: both variables point to the same shared object.
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true
console.log(db1.query("SELECT * FROM users"));
