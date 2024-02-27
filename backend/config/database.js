const sqlite3 = require('sqlite3').verbose();

const conn = () => {
	return new sqlite3.Database('./backend/config/database.sqlite');
};

module.exports = conn;
