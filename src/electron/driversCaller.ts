const driver = 'https://api.openf1.org/v1/drivers?'

export async function getDriversData(meeting_key: number, session_key: number): Promise<driver[]> {
    const url = `${driver}meeting_key=${meeting_key}&session_key=${session_key}`

    return fetch (url)
        .then (response => {
            if (!response.ok){ 
                throw new Error(`HTTP error! status: ${response.status}`); 
            }

            return response.json(); 

        }).then((data: driver[]) => data); 
}