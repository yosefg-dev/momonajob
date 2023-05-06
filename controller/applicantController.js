import db from '../database'
import applicant from '../database/models/applicant';
const { Op } = require("sequelize");
const applicantController = {
    getone: async (email, password) => {
        const applicant = await db.Applicant.findOne({
            where: {
                [Op.and]: [
                    { email: email },
                    { password: password },
                ]
            }
        })
        const parsedApplicant = await JSON.parse(JSON.stringify(applicant))
        return parsedApplicant
    },
    getUserByEmail: async(applicant) => {
        const userId= await db.Applicant.findOne({
            where: {
                email: applicant.email
            }
            
        })
        const parsedApplicant = await JSON.parse(JSON.stringify(userId))
        return parsedApplicant
    }
}

export default applicantController