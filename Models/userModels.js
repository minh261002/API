const db = require('../Config/db');

const User = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, results);
    });
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM user WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, results[0]);
    });
  },

    getByUsername: (username, callback) => {
        const sql = 'SELECT * FROM user WHERE username = ?';
        db.query(sql, [username], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, results[0]);
        });
    },

  create: (newUser, callback) => {
    const sql = 'INSERT INTO user (username, password, email) VALUES (?, ?, ?)';
    db.query(sql, [newUser.username, newUser.password, newUser.email], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  },

  update: (id, updatedUser, callback) => {
    const sql = 'UPDATE user SET username = ?, password = ?, email = ? WHERE id = ?';
    db.query(sql, [updatedUser.username, updatedUser.password,updatedUser.email, id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM user WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  },
};

module.exports = User;
