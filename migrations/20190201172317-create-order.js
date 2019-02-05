'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      menu: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      buyer: {
        type: Sequelize.STRING,
      },
      total_price: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('orders')
  },
}
