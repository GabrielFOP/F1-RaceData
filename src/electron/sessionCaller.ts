const session = 'https://api.openf1.org/v1/sessions?'

export async function getSessionData(meeting_key: number, year: number, session_type: string): Promise<session[]> {
    
    const url = `${session}meeting_key=${meeting_key}&year=${year}&session_type=${session_type}`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data: session[]) => data)
}   

