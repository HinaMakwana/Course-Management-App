module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("course",{
        cname: {
            type: DataTypes.STRING,
            notNull: true,
        },
        cduration:{
            type: DataTypes.STRING,
            isAlphanumeric: true,
            notNull: true
        },
        cfees:{
            type: DataTypes.STRING,
            notNull:true,
            isNumeric:true,
            set(value){
                this.setDataValue('cfees',value + 'rupee')
            }
        }
    },{
        timestamps:false
    });
    return Courses;
}