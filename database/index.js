import Sequelize from 'sequelize';
import config from './config/config.mjs';
import Applicant from './models/applicant.js';
import ApplicationDetail from './models/applicationDetail.js';
import Company from './models/company.js';
import JobCategory from './models/jobCategory.js';
import JobInformation from './models/jobInformation.js';
import JobLocation from './models/jobLocation.js';

const db = {};
db.Applicant = Applicant;
db.ApplicationDetail = ApplicationDetail;
db.Company = Company;
db.JobCategory = JobCategory;
db.JobInformation = JobInformation;
db.JobLocation = JobLocation;

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else {
  sequelize = new Sequelize(config.development);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
