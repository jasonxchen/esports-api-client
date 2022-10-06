import TeamCard from "../partials/TeamCard";

function TeamList(props) {
    const teamCardComponents = props.teams.map(team => {
        return (
            <TeamCard 
                key={team._id}
                team={team}
            />
        );
    });
    return (
        <div className="mt-3 w-full flex flex-col gap-2">
            {teamCardComponents}
        </div>
    );
}

export default TeamList;
