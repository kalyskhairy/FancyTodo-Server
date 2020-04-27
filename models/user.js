'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init({
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate :{
        isEmail : true,
        msg : `dont forget "@" and ".com"`
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo, {
      foreignKey : 'userId'
    })
  };
  return User;
};