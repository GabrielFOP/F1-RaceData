import { useParams, useNavigate } from "react-router-dom";   
import { useEffect } from "react";
import { useKeyPointsStore } from "../store/useMeetingStore";
import { DriversGrid } from "../components/driversGrid";

function SessionPage() {
    const { meetingKey } = useParams<{ meetingKey: string }>();
    const navigate = useNavigate();
    // const {meeting, clearData}= useKeyPointsStore(); 

    // useEffect(() => {
    //     // Clear meeting data when component unmounts
    //     return () => {
    //         clearData();
    //     };
    // }, [clearData]);

    
    const handleBack = () => {
        navigate('/'); // Navigate back to the previous page
    }

    return (
        <div>
            <button onClick={handleBack}>Back</button>
            <DriversGrid meetingKey={1219} sessionKey={9158}></DriversGrid>
        </div>
    );
}

export default SessionPage;