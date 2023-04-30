import connection from '../connection';
const {Model, DataTypes} = require('sequelize');
const initJobCegory = (sequelize, DataTypes) => {

  class JobCategroy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobCategroy.belongsTo(models.applicaitonDetail)
    }
  }
  JobCategroy.init({
    name: DataTypes.STRING,    
    EmployeeID:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobCategory',
  });
  return JobCategroy;
};

export default initJobCegory(connection, DataTypes)