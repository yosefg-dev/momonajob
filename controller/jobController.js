import db from '../database'

const jobsController = {
  
  all: async () => {
    const jobs = await db.Job.findAll()
    const parsedJobs = JSON.parse(JSON.stringify(jobs))
    return parsedJobs
  },
  find: async (id) => {
    const job = await db.Job.findByPk(id)
    const parsedJob = JSON.parse(JSON.stringify(job))
    return parsedJob
  },
  create: async (data) => {
    const job = await db.Job.create(data)
    return JSON.parse(JSON.stringify(job))
  },
  update: async (id, data) => {
    const cake = await db.Job.findByPk(id)
    job.update(data)
    return JSON.parse(JSON.stringify(job))
  },
  delete: async (id) => {
    const job = await db.Job.findByPk(id)
    job.destroy()
    return JSON.parse(JSON.stringify(job))
  },
}

export default jobsController