const db = require('../util/database');

module.exports = class Dolphin {
  constructor(id, name, age, mood) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.mood = mood;
  }

  save() {
    return db.execute(
      'INSERT INTO dolphins (name, age, mood) VALUES (?, ?, ?)',
      [this.name, this.age, this.mood]
    );
  };

  static fetchAll() {
    return db.execute('SELECT * FROM dolphins');
  }
}