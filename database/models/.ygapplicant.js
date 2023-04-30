import connection from '../connection';
const {Model, DataTypes} = require('sequelize');
const initApplicant = (sequelize, DataTypes) => {

  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Applicant.belongsTo(models.applicaitonDetail)
    }
  }
  Applicant.init({
    applicant: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.TEXT,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    professionalSummary: DataTypes.STRING,
    highestEducaitonalQualificaiton: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    applicantStatus:DataTypes.STRING
    //UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Applicant',
  });
  return Applicant;
};

export default initApplicant(connection, DataTypes)