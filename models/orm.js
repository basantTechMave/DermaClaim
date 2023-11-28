// orm/setup.js
const orm = require('orm');

function setupORM() {
  const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dermaclaim',
  };
  return orm.connect(`mysql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`, function (err, db) {
    if (err) throw err;
    console.log('Connected to MySQL database');
  });
}

module.exports = setupORM;
