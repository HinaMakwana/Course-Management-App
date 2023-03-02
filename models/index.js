const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('hinamak','hinamak','VY7Iavm6iu5q1Asr8toi',{
    host:'15.206.7.200',
    port:'3310',
    logging:false, 
    dialect:'mysql'
});
 
sequelize.authenticate()
.then(() => {
    console.log("connected");
})
.catch(err=>{
    console.log("error" + err);
});

const db= {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync()
.then(()=>{
    console.log("yes re-sync");
});

db.course = require('./course')(sequelize,DataTypes);
module.exports = db;