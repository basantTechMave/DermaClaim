// models/user.js
module.exports = function (db) {
  return db.define('user', {
    id: { type: 'serial', key: true },
    username: { type: 'text', required: true, unique: true },
    email: { type: 'text', required: true, unique: true },
    password: { type: 'text', required: true },
  });
};
