import TeamForm from "./TeamForm";

function CreateTeamButton(props) {
    return (
        <div className="self-end">
            <button className="bg-green-500 text-white" onClick={() => props.setShowForm(true)}>
                New
            </button>
            {props.showForm ? 
                <TeamForm 
                    setShowForm={props.setShowForm} 
                    team={props.team} 
                    setTeam={props.setTeam} 
                    handleFormSubmit={props.handleFormSubmit}
                    action="create"
                /> 
                : 
                null
            }
        </div>
    );
}

export default CreateTeamButton;
