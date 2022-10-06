import { Link } from "react-router-dom";

function TeamCard(props) {
    return (
        <Link to={`/teams/${props.team._id}`} className="w-full" >
            <div className="px-2 py-1 flex justify-between border rounded hover:bg-gray-100">
                <p>{props.team.name}</p>
                <p>Total Earnings: ${props.team.winnings}</p>
            </div>
        </Link>
    );
}

export default TeamCard;
