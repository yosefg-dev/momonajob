import 'bootstrap/dist/css/bootstrap.css';
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
    }