import {useState, useEffect} from 'react'; 

export function useDriversData(meetingKey: number, sessionKey: number) {
    const [drivers, setDrivers] = useState<driver[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect (() => {
        async function fetchDrivers() {
            setLoading(true);
            try {
                const data = await window.electron.loadDriversByMeetingAndSession(meetingKey, sessionKey);
                setDrivers(data); 
                setLoading(false);
            }catch (error) {
                setError(error as Error);
            }
        }

        fetchDrivers();
       
    }, [meetingKey, sessionKey]);
    
    return { 
        drivers, 
        loading, 
        error };
}