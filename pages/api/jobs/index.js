import jobController from '../../../controllers/jobController'
import db from '../../../database'
export default async function handler(req, res) {
    if (req.method === "POST") {
        // TODO take the title and description from the request body
        const { name, description, location, jobcatagory } = req.body
        const user = await db.User.findOne({where:{email:req.body.email}})
        const UserId = user.id
        const job = await jobController.create({
            name, description,  location, jobcatagory, UserId
        })
        res.status(200).redirect(`/company`);
    }
    // the redirect metod sends the user to the specified path
}