'use strict';
const {Model, DataTypes} = require('sequelize');

import connection from '../connection';
const initApplicant = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Applicant.belongsTo(models.applicaitonDetail)
    }
  }
  Applicant.init({
    applicant: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    contact: DataTypes.STRING,
    professionalSummary: DataTypes.STRING,
    highestEducaitonalQualificaiton: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    applicantStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Applicant',
  });
  return Applicant;
};
export default initApplicant(connection, DataTypes)