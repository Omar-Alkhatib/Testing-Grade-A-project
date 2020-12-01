const db = require('../../db');

const registeredCoursesInstructor = (req, res) => {
	const query = `SELECT * FROM courses c JOIN registration r ON c.id = r.course_id AND instructor_id = ?`;
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

module.exports = {
	registeredCoursesInstructor,
};
