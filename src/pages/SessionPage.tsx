import { useParams, useNavigate } from "react-router-dom";   
import { useEffect } from "react";
import { useKeyPointsStore } from "../store/useMeetingStore";

function SessionPage() {
    const { meetingKey } = useParams<{ meetingKey: string }>();
    const navigate = useNavigate();
    const {meeting, clearData}= useKeyPointsStore(); 

    useEffect(() => {
        // Clear meeting data when component unmounts
        return () => {
            clearData();
        };
    }, [clearData]);

    
    const handleBack = () => {
        navigate('/'); // Navigate back to the previous page
    }

    return (
        <div>
            <button onClick={handleBack}>Back</button>
            Session Page for meeting key: {meetingKey}
            meeting data: {meeting ? JSON.stringify(meeting) : "No meeting data "}
        </div>
    );
}

export default SessionPage;