'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applicants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      applicant: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      professionalSummary: {
        type: Sequelize.STRING
      },
      highestEducaitonalQualificaiton: {
        type: Sequelize.STRING
      },
      imageURL: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      applicantStatus: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Applicants');
  }
};