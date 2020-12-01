const db = require('../../db');

const instructors_details = (req, res) => {
	const query = `SELECT * FROM users u JOIN roles r WHERE u.role_id = r.id AND r.type LIKE 'instructor'`;
	db.query(query, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

module.exports = {
	instructors_details,
};
