const { urlencoded } = require('body-parser');
let bodyParser = require('body-parser');

let courseController = require('../controllers/courseController');
let router = require('express').Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended  : false}))

router.get('/',(req,res)=>{
    res.send("home page");
});

router.get('/course',courseController.getCourses)
router.get('/course/:id',courseController.getCourse)
router.post('/course', courseController.postCourses)
router.delete('/course/:id',courseController.deleteCourse)
router.put('/course/:id',courseController.patchCourse)

module.exports = router