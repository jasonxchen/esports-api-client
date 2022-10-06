import { useState, useEffect } from "react";
import axios from "axios";
import CreateTeamButton from "../partials/CreateTeamButton";
import TeamCard from "../partials/TeamCard";

function Teams() {
    const [teams, setTeams] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    useEffect(() => {
        const getTeams = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/teams`);
                setTeams(response.data);
            }
            catch (error) {
                console.log(error);
                if (error.response) {
                    setErrorMsg(error.response.data.message);
                }
            }
        }
        getTeams();
    }, []);
    const teamCardComponents = teams.map((team, index) => {
        return (
            <TeamCard 
                key={team._id}
                team={team}
            />
        );
    });
    return (
        <div>
            <h1>Esports Teams</h1>
            <CreateTeamButton />
            <p>{errorMsg}</p>
            {teamCardComponents}
        </div>
    );
}

export default Teams;
