import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TeamDetails() {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const getTeam = async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/teams/${teamId}`);
            // remove clock time from date
            response.data.createdOn = response.data.createdOn.split("T")[0];
            setTeam(response.data);
        }
        getTeam();
    }, []);
    return (
        <div>
            <h2>{team.name}</h2>
            <p>Created on: {team.createdOn}</p>
            <p>Region: {team.region}</p>
            <p>Winnings: ${team.winnings}</p>
        </div>
    );
}

export default TeamDetails;
