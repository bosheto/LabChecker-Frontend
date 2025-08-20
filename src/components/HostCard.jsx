import { NavLink } from 'react-router-dom';
import styles from './css/HostCard.module.css'; // Import your CSS Module

function HostCard (props) {

    const statusClass = props.status ? props.status.toLowerCase() : 'down'; // Default to 'down' if status is missing

    // Combine base class with status-specific class
    const cardClassName = `${styles.hostCard} ${styles[`status_${statusClass}`]}`;


    
    return (
        <div className={cardClassName}>
                <NavLink to={"/host?id=" + props.id}>
                    <div className={styles.hostCardHeader}>
                            <h2>{props.name}</h2>
                    </div>
                    <div className={styles.hostCardContent}>
                        <p className={styles.hostCardIp}>IP: {props.ip}</p>
                        <p className={styles.hostCardVersion}>Version: {props.version}</p>
                    </div>
                    {/* <div className={styles.hostCardControls}>
                        <button>Edit</button>
                    </div> */}
                </NavLink>
              
        </div>
    );
}

export default HostCard;