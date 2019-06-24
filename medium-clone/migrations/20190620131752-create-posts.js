'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      titleDescription: {
        type: Sequelize.STRING
      },
      authorName: {
        type: Sequelize.STRING
      },
      subDomain: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      readTime: {
        type: Sequelize.INTEGER
      },
      postDescription: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};