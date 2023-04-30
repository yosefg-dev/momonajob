'use strict';
const {Model, DataTypes} = require('sequelize');
import connection from '../connection';
const initJobCegory = (sequelize, DataTypes) => {
  class JobCategroy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobCategroy.belongsTo(models.applicaitonDetail)
    }
  }
  JobCategroy.init({
    name: DataTypes.STRING,
    EmployeeID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobCategroy',
  });
  return JobCategroy;
};

export default initJobCegory(connection, DataTypes);