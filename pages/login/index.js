import React from 'react'
import styles from './login.module.css'

const login = () => {
    return (
        <div>
            
            <div>
                
                <form className={styles.form}>
                    <h1 className={styles.title}>Login and Buy</h1>
                    <input className={styles.input}  placeholder="Enter Your Email" type="email"></input> <br></br>
                    <input className={styles.input}  placeholder="Enter Your Password" type="password"></input> <br></br>
                    <button className={styles.buy}>Buy</button>
                </form>
            </div>
            
        </div>
    )

}

export default login;