import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TeamForm from "./TeamForm";

function CreateTeamButton() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        name: "",
        createdOn: "",
        region: "",
        winnings: 0
    });
    const handleNewClick = () => setShowForm(true);
    const handleFormSubmit = async (e, form) => {
        try {
            e.preventDefault();
            setShowForm(false);
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/teams`, form);
            navigate(`/teams/${response.data._id}`);
        }
        catch (error) {
            console.log(error);
            // To do: add error message in form?
        }
    }
    return (
        <div className="self-end">
            <button className="bg-green-500 text-white" onClick={handleNewClick}>
                New
            </button>
            {showForm ? 
                <TeamForm 
                    setShowForm={setShowForm} 
                    form={form} 
                    setForm={setForm} 
                    handleFormSubmit={handleFormSubmit}
                /> 
                : 
                null
            }
        </div>
    );
}

export default CreateTeamButton;
