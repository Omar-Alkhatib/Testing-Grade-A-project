const db = require('../../db');

const getAllCourses = (req, res) => {
	const query = 'SELECT * FROM courses';
	db.query(query, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const courseDetails = (req, res) => {
	const query = 'SELECT * FROM courses WHERE id=?';
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const searchCourses = (req, res) => {
	const data = req.params.id;
	const query = `SELECT * FROM courses WHERE name LIKE'%${data}%'`;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const filterCourses = (req, res) => {
	const query = `SELECT * FROM courses JOIN rating ON rating.course_id=courses.id AND rating.rating_value > ?`;
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const historyCourses = (req, res) => {
	const query = `SELECT * FROM courses JOIN registration ON courses.id=registration.course_id AND registration.student_id =?`;
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const enrollmentCourse = (req, res) => {
	const query = `INSERT INTO registration (student_id, course_id) VALUES (?,?)`;
	const data = [req.params.i, req.params.id];
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.send('enrollment course');
		// res.json(result)
	});
};

module.exports = {
	getAllCourses,
	courseDetails,
	searchCourses,
	filterCourses,
	historyCourses,
	enrollmentCourse,
};
