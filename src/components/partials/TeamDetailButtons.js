import TeamForm from "./TeamForm";

function TeamDetailButtons(props) {
    return (
        <div className="flex justify-between w-full">
            <button className="bg-red-500 text-white">
                Delete
            </button>
            <button className="bg-blue-500 text-white" onClick={() => props.setShowForm(true)}>
                Edit
            </button>
            {props.showForm ? 
                <TeamForm 
                    setShowForm={props.setShowForm} 
                    team={props.team} 
                    setTeam={props.setTeam} 
                    handleFormSubmit={props.handleFormSubmit}
                    action="update"
                /> 
                : 
                null
            }
        </div>
    );
}

export default TeamDetailButtons;
