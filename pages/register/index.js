import React from 'react'
import styles from './register.module.css'

const register = () => {
    return (
        <div>
            
            <div>
                
                <form className={styles.form}>
                    <h1 className={styles.title}>Register</h1>
                    <input className={styles.input}  placeholder="Enter Your Name" type="text"></input> <br></br>
                    <input className={styles.input}  placeholder="Enter Your Email" type="email"></input> <br></br>
                    <input className={styles.input}  placeholder="Enter Your Password" type="password"></input> <br></br>
                    <input className={styles.input}  placeholder="Enter Your Phone Number" type="text"></input> <br></br>
                    <input className={styles.input}  placeholder="Enter Your Address" type="text"></input> <br></br>
                    <button className={styles.buy}>Register</button>
                </form>
            </div>
            
        </div>
    )

}

export default register;