import React from 'react'
import styles from './landing.module.css'

const landing  = () => {
    return (
        <div>
            
            <nav className={styles.title}>
                <ul>
                    <li><a href="">Appointment</a></li>
                    <li><a href="">Home</a></li>
                    <button><a href="">Login</a></button>
                    <button><a href="">Signup</a></button>
                </ul>
            </nav>
            
        </div>
    )

}

export default landing;