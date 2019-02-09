'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('orders', 'metadata', {
      type: Sequelize.JSONB,
    })
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'metadata')
  },
}
