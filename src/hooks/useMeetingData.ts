import { useState, useEffect } from "react";


export function useMeetingData(year: number) {
    const [meetings, setMeetings] = useState<meeting[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchMeetings() {
            setLoading(true); 
            try {
                const data = await window.electron.loadMeetingByYear(year);
                setMeetings(data); 
                setLoading(false);

            }catch (error){
                setError(error as Error);
            }
        }

        fetchMeetings(); 
    }, [year]);

    return ({
        meetings,
        loading,
        error
    })
}