'use strict'
/*eslint no-unused-vars: off*/

module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
  }, {})
  admin.associate = function(models) {
    // associations can be defined here
  }
  return admin
}
