/*import 'bootstrap/dist/css/bootstrap.css';
//import db from '../database';
import React from "react";
import Navbar from '../components/Navbar'; 
import Footer from '..components/Footer'

export default function Home(props) {
    return (
        <>
          <Navbar/>        
          <div className={styles.containerImg}>
            <div className={styles.container}>
            </div>
          </div>
          <Footer/>
        </>
      )
    }*/

    
import styles from '../styles/Home.module.css';
import db from '../database';
import Card from '../components/Card';
import React from "react";
/* import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; */
import Navbar from '../components/Navbar';
import { useEffect, useState } from "react";
//import {getSession, signIn, signOut} from 'next-auth/react'; 
import { getSession } from 'next-auth/react';

export default function Home(props) {
  const curUser = props.currentUser
  const profile = props.profile
  //send the props current user to navbar componont 

  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState(props.jobs);
  useEffect(() => {
    if(query.length === 0 || query.length > 0){
    setJobs(props.jobs.filter(job => job.name.toLowerCase().includes(query) || 
    job.description.toLowerCase().includes(query) || 
    job.location.toLowerCase().includes(query)))
  }
  }, [query])

  return (
    <>
      <Navbar curuser={curUser} profile={profile}></Navbar>
      {props.new ?
        <div class="alert alert-primary" role="alert">
          Your default password is : {props.pswd}
        </div> :
        <p></p>
      }
      <div className={styles.containerImg}>
        <div className={styles.container}>
          <div className={styles.searchBar}>
            <h4 className={styles.searchTitle}>Search hear for your <span>Favorite Job</span></h4>
            <input className={styles.search} type="text" placeholder="Search..."  onChange={(e) => setQuery(e.target.value)}/>
          </div>
          <div className={styles.cards}>
            {jobs.map((job, index) => (<Card job={job} key={job.id} />))}
          </div>
        </div>
      </div>

     {/*  {!props.new ?
        <Sendemail curuser={curUser} /> :
        <h4></h4>
      } */}
    </>
  )
}
export async function getServerSideProps(req, res) {
  const session = await getSession(req) //await getSession(req)
 /*  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}` 
        //change the destination default login in to cusotm login
      }
    }
  } */

  let firstlogin = 0;
  let password = 'abcd1234';

  const user = await db.Applicant.findOne({ where: { email: session.user.email } })
  if (!user) {
    const name = session.user.name
    const email = session.user.email
    password = Math.random().toString(36).slice(-8)
    await db.Applicant.create({ name, email, gender, contact, professionalSummary, highestEducaitonalQualificaiton, password })
    firstlogin = 1
  }
  const jobs = await db.Job.findAll()
  const stringfyjobs = JSON.parse(JSON.stringify(jobs))
  const stringfyuser = JSON.parse(JSON.stringify(user))
  return {
    props: {profile: stringfyuser, pswd: password, new: firstlogin, jobs: stringfyjobs, currentUser: session?.user || null },
  }
}