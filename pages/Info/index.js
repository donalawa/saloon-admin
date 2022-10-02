import React from 'react'
import styles from './fill.module.css'

const Info  = () => {
    return (
        <div>
            
            <div>
                
                <form className={styles.form}>
                    <h1 className={styles.title}>Fill The Information </h1>
                    <h3 className={styles.label}>Date _____________________</h3>
                    <h3  className={styles.label}>Time _____________________</h3>
                    <button className={styles.buy}>Submit</button>
                </form>
            </div>
            
        </div>
    )

}

export default Info;