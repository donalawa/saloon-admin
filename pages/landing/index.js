import React from 'react'
import styles from './landing.module.css'
import Image from 'next/image'

const landing  = () => {
    return (
        <div>
            
            <nav className={styles.title}>
                <ul>
                    <li><a href="">Appointment</a></li>
                    <li><a href="">Home</a></li>
                    <li><button className={styles.button}><a href="">Login</a></button></li>
                    <li><button className={styles.button}><a href="">Signup</a></button></li>
                </ul>
            </nav>
            <div className={styles.divClass}>
            <div className={styles.divTwo}>
            <Image  source={require('../../images/Braid.jpg')}/>

            </div>
            <div className={styles.divTwo}>

            </div>
            <div className={styles.divTwo}>

            </div>
            <div className={styles.divTwo}>

            </div>
            <div className={styles.divTwo}>

            </div>
            <div className={styles.divTwo}>

            </div>
            </div>

            
        </div>
    )

}

export default landing;