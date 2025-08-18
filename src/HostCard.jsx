import styles from './HostCard.module.css'; // Import your CSS Module

function HostCard (props) {

    const statusClass = props.status ? props.status.toLowerCase() : 'down'; // Default to 'down' if status is missing

    // Combine base class with status-specific class
    const cardClassName = `${styles.hostCard} ${styles[`status_${statusClass}`]}`;


    
    return (
        <div className={cardClassName}>
           <div className={styles.hostCardHeader}>
                <h2>{props.name}</h2>
           </div>
           <div className={styles.hostCardContent}>
                <p className={styles.hostCardIp}>IP: {props.ip}</p>
                <p className={styles.hostCardVersion}>Version: {props.version}</p>
            </div>
        </div>
    );
}

export default HostCard;