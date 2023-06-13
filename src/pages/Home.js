import { TypeAnimation } from "react-type-animation"
import styles from '../styles/home.module.css';
import bgImage from '../assets/images/background.png';

export default function Home(){
    return(
        <div className={styles.homeContainer}>
            <div className={styles.imageContainer}>
                <img src={bgImage} className={styles.bgImage} alt="backgroundimage"/>
            </div>
            <div className={styles.rightContent}>
            <h1 className={styles.heading}>One place for all your todos</h1>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Add Todos',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Edit or Update Todos',
                    1000,
                    'Delete Todos',
                    1000
                  ]}
                wrapper="span"
                speed={50}
                className={styles.typeWriter}
                repeat={Infinity}
            />
            </div>
        </div>
    )
}