'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type:DataTypes.STRING,
      validate:{
        is: {
          args: ["^[a-z]+$",'i'],
          msg: 'username format is incorrect'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-zA-Z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          msg: 'email format is incorrect'
        }
      }
    },
    password: DataTypes.STRING,
    Role : DataTypes.STRING
  }, {
    hooks : {
      beforeCreate(user, options){
        user.password = bcrypt.hashSync(user.password, process.env.SALT);
      }
    }
});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};