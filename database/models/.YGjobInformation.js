import connection from '../connection';
const {Model, DataTypes} = require('sequelize');
const initJobInformaiton = (sequelize, DataTypes) => {

  class JobInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobInformation.belongsTo(models.applicaitonDetail)
    }
  }
  JobInformation.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    salary: DataTypes.STRING,
    postingDate: DataTypes.date,
    endDate: DataTypes.date,
    vacantNumber: DataTypes.INTEGER,
    status:DataTypes.STRING,
    JobCategoryID: DataTypes.STRING,
    CompanyID:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobInformation',
  });
  return JobInformation;
};

export default initJobInformaiton(connection, DataTypes)