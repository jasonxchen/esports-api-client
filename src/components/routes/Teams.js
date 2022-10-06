import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CreateTeamButton from "../partials/CreateTeamButton";
import TeamCard from "../partials/TeamCard";

function Teams() {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);
    const [newTeam, setNewTeam] = useState({
        name: "",
        createdOn: "",
        region: "",
        winnings: 0
    });
    const [showForm, setShowForm] = useState(false);
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
    const handleFormSubmit = async (e, additionalTeam) => {
        try {
            e.preventDefault();
            setShowForm(false);
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/teams`, additionalTeam);
            navigate(`/teams/${response.data._id}`);
        }
        catch (error) {
            console.log(error);
            if (error.response) {
                setErrorMsg(error.response.data.message);
            }
        }
    }
    const teamCardComponents = teams.map(team => {
        return (
            <TeamCard 
                key={team._id}
                team={team}
            />
        );
    });
    return (
        <div className="flex flex-col items-center w-6/12">
            <h1 className="text-4xl">Esports Teams</h1>
            <CreateTeamButton 
                showForm={showForm}
                setShowForm={setShowForm}
                team={newTeam}
                setTeam={setNewTeam}
                handleFormSubmit={handleFormSubmit}
            />
            <p>{errorMsg}</p>
            {teamCardComponents}
        </div>
    );
}

export default Teams;
