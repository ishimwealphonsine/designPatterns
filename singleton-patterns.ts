// Singleton Pattern: ensures only one instance of a class is created.
class DatabaseConnection {
  // The single shared instance is stored here.
  private static instance: DatabaseConnection | null = null;

  // The constructor is private so outside code cannot create extra instances.
  private constructor() { }

  public static getInstance(): DatabaseConnection {
    // Create the instance the first time it is requested.
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }

    return DatabaseConnection.instance;
  }

  public query(sql: string): string {
    return `Running query: ${sql}`;
  }
}

// Example usage: both variables point to the same shared object.
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log(db1 === db2); // true
console.log(db1.query("SELECT * FROM users"));
