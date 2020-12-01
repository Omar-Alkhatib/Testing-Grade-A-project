const db = require('../db');

const {
	getAllCourses,
	courseDetails,
	searchCourses,
	filterCourses,
	historyCourses,
	enrollmentCourse,
} = require('./students_controllers/courses_controllers');
const {
	getAllCategories,
	getCategoryCourses,
} = require('./students_controllers/categories_controllers');
const {
	evaluate,
	getRating,
} = require('./students_controllers/rating_controllers');
const {} = require('./students_controllers/integration_controllers');
const {
	registeredCoursesInstructor,
} = require('./instructors_controllers/courses_controllers');
const {
	students_details,
} = require('./admin_controllers/students_controllers');
const { disable_user } = require('./admin_controllers/students_controllers');
const {
	instructors_details,
} = require('./admin_controllers/instructors_controllers');
module.exports = {
	getAllCourses,
	courseDetails,
	getAllCategories,
	searchCourses,
	filterCourses,
	historyCourses,
	enrollmentCourse,
	getCategoryCourses,
	evaluate,
	getRating,
	registeredCoursesInstructor,
	students_details,
	disable_user,
	instructors_details,
};
