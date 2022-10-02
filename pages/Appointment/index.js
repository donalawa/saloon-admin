import React from 'react'
import styles from './appointment.module.css'

const appointment  = () => {
    return (
        <div>
            
            <div>
                
                <form className={styles.form}>
                    <h1 className={styles.title}>Fill The Information </h1>
                    <h3 className={styles.label}>Date _____________________</h3>
                    <h3  className={styles.label}>Time _____________________</h3>
                    <h3  className={styles.label}>Status: <span className={styles.span}>Pending........</span></h3>
                    <button className={styles.buy}>Submit</button>
                </form>
            </div>
            
        </div>
    )

}

export default appointment;