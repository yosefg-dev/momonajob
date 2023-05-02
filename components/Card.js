import Link from "next/link"
import styles from "../styles/Card.module.css";

export default function Component({ job }) {
  return (
    <>
      <div className={styles.card} >
        /*<div className={styles.cardimg}>
          <img src={cake.imageUrl} className={styles.cardimg1} alt="cardImage"/>
        </div>
        */
        <div className={styles.cardDetails}>
          <div className={styles.topDetails}>
            <h5>{job.name}</h5>
            <h6>{job.location}</h6>
            <h6>{job.description}$</h6>
          </div>
          <div className={styles.downDetails}>
            <Link href={`/jobs/${job.id}`} className={styles.selectOne}>
              <div className={styles.button}>Select</div>
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}