const { Sequelize } = require('../../models');
// const {Op} = require('sequelize');
let db = require('../../models');

const Courses = db.course;

let getCourses = async (req,res) => {
    const data = await Courses.findAll({});
    res.status(200).json({data:data});
}
let getCourse = async (req,res)=>{
    const data = await Courses.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({data:data});
}
let postCourses = async (req,res)=>{
    let postData = req.body;
    console.log(postData);
    // let data = await Courses.create(postData);
    // console.log("data", data);
    if(postData.length >1){
       var data = await Courses.bulkCreate(postData);
    }else{
        var data = await Courses.create(postData);
    }
    res.status(200).json({data:data});
}
let deleteCourse = async (req,res)=>{
    const data = await Courses.destroy({
        where: {
            id : req.params.id
        }
    });
    res.status(200).json({data:data});
}
let patchCourse = async (req,res)=>{
    var updatedData = req.body;
    const data = await Courses.update(updatedData,{
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({data:data});
}

module.exports = {
    getCourses,
    getCourse,
    postCourses,
    deleteCourse,
    patchCourse
 }