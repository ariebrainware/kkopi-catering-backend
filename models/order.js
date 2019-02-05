'use strict'
/*eslint no-unused-vars: off*/

module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    menu: DataTypes.STRING,
    date: DataTypes.STRING,
    buyer: DataTypes.STRING,
    total_price: DataTypes.STRING,
    status: DataTypes.STRING,
    note: DataTypes.STRING,
  }, {})
  order.associate = function(models) {
    // associations can be defined here
  }
  return order
}
