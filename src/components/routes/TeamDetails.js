import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TeamDetailButtons from "../partials/TeamDetailButtons";

function TeamDetails() {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    useEffect(() => {
        const getTeam = async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/teams/${teamId}`);
            // remove clock time from date
            response.data.createdOn = response.data.createdOn.split("T")[0];
            setTeam(response.data);
        }
        getTeam();
    }, [teamId]);
    const handleFormSubmit = async (e, updatedTeam) => {
        try {
            e.preventDefault();
            setShowForm(false);
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/teams/${team._id}`, updatedTeam);
        }
        catch (error) {
            console.log(error);
            if (error.response) {
                setErrorMsg(error.response.data.message);
            }
        }
    }
    return (
        <div className="flex flex-col items-center w-6/12">
            <p>{errorMsg}</p>
            <h2 className="text-2xl">{team.name}</h2>
            <p>Created on: {team.createdOn}</p>
            <p>Region: {team.region}</p>
            <p>Winnings: ${team.winnings}</p>
            <TeamDetailButtons 
                showForm={showForm}
                setShowForm={setShowForm}
                team={team} 
                setTeam={setTeam} 
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
}

export default TeamDetails;
