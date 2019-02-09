'use strict'
/*eslint no-unused-vars: off*/

module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    price: DataTypes.STRING,
  }, {})
  menu.associate = function(models) {
    // associations can be defined here
  }
  return menu
}
