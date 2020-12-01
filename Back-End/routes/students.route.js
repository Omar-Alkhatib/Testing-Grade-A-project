const studentsRouter = require("express").Router();
const { getAllCourses,courseDetails,getAllCategories,searchCourses,
    filterCourses, historyCourses,enrollmentCourse,getCategoryCourses,
    evaluate,getRating} = require('../controllers/main-controller');

// View all courses
studentsRouter.get('/courses',getAllCourses);

// View a specific course's details
studentsRouter.get('/details/:id',courseDetails);

// View all categories
studentsRouter.get('/categories',getAllCategories);

// Search for courses
studentsRouter.get('/search/:id',searchCourses);

// Filter courses
studentsRouter.get('/filter/:id',filterCourses);

// View student's courses history
studentsRouter.get('/history/:id',historyCourses);

// Enrollment in multiple course
studentsRouter.post('/add_course:id/:i', enrollmentCourse); //send request with "course_id" in id params and "student_id" i params

// View courses by category
studentsRouter.get('/category_courses/:id', getCategoryCourses);

// Evaluation(Star rating)
studentsRouter.post('/evaluate/:c/:s/:r', evaluate); //send "course_id" in :c params, "student_id" in :s params, and "rating" in :r params

// Show all rating courses
studentsRouter.get('/rating/:id',getRating); // id = "rating_value"

// Chat integration with instructors

// Integration with Video service provider

module.exports = studentsRouter;

