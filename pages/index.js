import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
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
             <div className={styles.divCards}>
             <Image className={styles.image} width="250px" height="150px" src={require('../images/Jaw-Dropping.jpg')}/>
             <p className={styles.paragraph}>Bakala<br></br>$118</p>
             <button className={styles.btn}><a href="">Select</a></button>
             </div>
             <div className={styles.divCard}>
             <Image className={styles.image} width="250px" height="150px" src={require('../images/Beautiful-Braid.jpg')}/>
             <p className={styles.paragraph}>Braid<br></br>$108</p>
             <button className={styles.btn}><a href="">Select</a></button>
             </div>
             <div className={styles.divCard}>
             <Image className={styles.image} width="250px" height="150px" src={require('../images/Brumming.jpg')}/>
             <p className={styles.paragraph}>Beauti-Braid<br></br>$128</p>
             <button className={styles.btn}><a href="">Select</a></button>
             </div>
             <div className={styles.divCard}>
             <Image className={styles.image} width="250px" height="150px" src={require('../images/Braid.jpg')}/>
             <p className={styles.paragraph}>Jaw_Braid<br></br>$178</p>
             <button className={styles.btn}><a href="">Select</a></button>
             </div>
            {/* <div className={styles.divTwo}>
            <Image className={styles.image} width="500px" height="500px" src={require('../images/Jaw-Dropping.jpg')}/>
            </div> */}
            <br></br>
            
            </div>

            
        </div>
  )
}
