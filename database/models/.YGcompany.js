import connection from '../connection';
const {Model, DataTypes} = require('sequelize');
const initCompany = (sequelize, DataTypes) => {

  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.jobInformation)
    }
  }
  Company.init({
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    accountStatus:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Applicant',
  });
  return Company;
};

export default initCompany(connection, DataTypes)