// importing our database connection configuration
const db = require('../util/database');

module.exports = class Dolphin {
  constructor(id, name, age, mood) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.mood = mood;
  }

  // returns a promise
  save() {
    // db.execute takes a string representing a SQL query
    // we have the values as question marks to prevent SQL injection
    // we then pass our values to db.execute in an array
    return db.execute(
      'INSERT INTO dolphins (name, age, mood) VALUES (?, ?, ?)',
      [this.name, this.age, this.mood]
    );
  };

  // returns a promise
  static fetchAll() {
    return db.execute('SELECT * FROM dolphins');
  }
}
