import connection from '../connection';
const {Model, DataTypes} = require('sequelize');
const initJobLocation = (sequelize, DataTypes) => {

  class JobLocaiton extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobLocaiton.belongsTo(models.jobInformation)
      JobLocaiton.hasOne(models.employee)
    }
  }
  JobLocaiton.init({
    name: DataTypes.STRING,    
    EmployeeID:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobLocaiton',
  });
  return JobLocaiton;
};

export default initJobLocation(connection, DataTypes)