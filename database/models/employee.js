'use strict';
const {Model, DataTypes} = require('sequelize');
import connection from '../connection';
const initEmployee = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasMany(models.jobLocation)
      Employee.hasMany(models.jobCategory)
    }
  }
  Employee.init({
    name: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};

export default initEmployee(connection, DataTypes);