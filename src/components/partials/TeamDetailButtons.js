import TeamForm from "./TeamForm";
// "bg-green-500 text-white rounded-lg hover:bg-green-700"
function TeamDetailButtons(props) {
    return (
        <div className="flex justify-between w-full">
            <button className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700" onClick={props.handleDeleteClick}>
                Delete
            </button>
            <button className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={() => props.setShowForm(true)}>
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
