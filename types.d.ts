interface session { 
    circuit_key: number, 
    circuit_short_name: string,
    country_code: string,
    country_key: number,
    country_name: string,
    date_end: string,
    date_start: string,
    location: string,
    meeting_key: number,
    session_key: number,
    session_name: string,
    session_type: string,
    year: number
}

type meeting = {
    circuit_key: number,
    circuit_image: string,
    circuit_short_name: string,
    country_code: string,
    country_key: number,
    country_name: string,
    country_flag: string,
    date_end: string,
    date_start: string,
    location: string,
    meeting_key: number,
    meeting_name: string, 
    meeting_official_name: string, 
    year: number
}

type driver = {
    broadcast_name: string, 
    country_code: string,
    driver_number: number, 
    full_name: string, 
    name_anacronym: string, 
    team_color: string, 
    team_name: string, 
    meeting_key: undefined | number,
    session_key: undefined | number 
}

interface Window {
    electron: {
        getSessionData: (meeting_key: number, year: number, session_type: string) => Promise<session[]>; 
        loadMeetingByYear: (year: number) => Promise<meeting[]>;
    };
}
