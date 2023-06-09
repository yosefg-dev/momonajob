'use strict';
const {Model, DataTypes} = require('sequelize');
import connection from '../connection';
const initApplicationDetail = (sequelize, DataTypes) => {
  class ApplicationDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationDetail.belongsTo(models.applicant)
      ApplicationDetail.hasOne(models.jobInformation)
    }
  }
  ApplicationDetail.init({
    fileURL: DataTypes.STRING,
    applicaitonStatus: DataTypes.STRING,
    ApplicantID: DataTypes.STRING,
    JobInformationID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApplicationDetail',
  });
  return ApplicationDetail;
};

export default initApplicationDetail(connection, DataTypes)