import { useMeetingData } from '../hooks/useMeetingData';
import styles from './meetingsGrid.module.css';

export function MeetingsGrid({ year }: { year: number }) {
    const { meetings, loading, error } = useMeetingData(year);

    if (loading) {
        return <div className={styles.loaderContainer}>  
            <div className={styles.ball}></div> 
        </div>     
    }

    if (error) { 
        return <div>Error loading data {error.message} </div>
    }

    return (
        <div className={styles.meetingsGrid}> 
            {meetings.map((meeting) => (
                <div key={meeting.meeting_key} className={styles.meetingCard}>
                    <img src={meeting.circuit_image} alt={meeting.circuit_short_name} className={styles.circuitImage} />
                    <h3>{meeting.meeting_name}</h3>
                    <p>{meeting.circuit_short_name == meeting.location? meeting.location : meeting.circuit_short_name + " - " + meeting.location} <img src={meeting.country_flag} alt={meeting.country_name} className={styles.countryFlag} /> </p>
                    <p>{((new Date(meeting.date_start)).toLocaleDateString())} - {(new Date(meeting.date_end)).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    )

}