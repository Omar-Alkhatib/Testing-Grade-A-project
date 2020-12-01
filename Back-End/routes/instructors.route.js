const instructorsRouter = require('express').Router();
const {
	registeredCoursesInstructor,
} = require('../controllers/main-controller');

// Add courses
// instructorsRouter.add('/course/',addCourse)

// Update courses
// instructorsRouter.update('/course/',updateCourse)

// View all courses
// instructorsRouter.get('/courses/',courses)

// View total number of courses registered
instructorsRouter.get('/registeredCourses/:id', registeredCoursesInstructor);

// Show a hidden course
// instructorsRouter.update('/view/:id',visiblity)

// View course rating
// instructorsRouter.get('/',)

// Add live videos
// instructorsRouter.get('/',)

// Chat with students
// instructorsRouter.get('/',)

module.exports = instructorsRouter;
