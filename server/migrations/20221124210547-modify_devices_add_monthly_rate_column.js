'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'devices', // table name
        'monthlyRate', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('devices', 'monthlyRate')
    ]);
  },
  };
