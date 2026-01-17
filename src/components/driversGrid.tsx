import { useDriversData } from "../hooks/useDriversData"; 
import styles from './driversGrid.module.css';


export function DriversGrid({ meetingKey, sessionKey }: { meetingKey: number, sessionKey: number }) {
    const {drivers, loading, error} = useDriversData(meetingKey, sessionKey); 

    if ( loading) {
        return <div>Loading drivers...</div>
    }

    if (error) {
        return <div>Error loading drivers: {error.message} </div>
    }

    return (
        <div className={styles.driversGrid}>
            {drivers.map((drivers) => (
                <div key={drivers.driver_number} className={styles.driverCard} style={{borderColor: `#${drivers.team_colour}`, "--shadow-color": `#${drivers.team_colour}` } as React.CSSProperties}>
                        <h2>{drivers.driver_number}</h2>
                        <h3>{drivers.full_name}</h3>
                        <p style={{color: `#${drivers.team_colour}`}}>{drivers.team_name}</p>
                </div>
            ))}

        </div>      
    )
}