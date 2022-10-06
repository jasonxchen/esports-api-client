import { Link } from "react-router-dom";

function TeamCard(props) {
    return (
        <Link to={`/teams/${props.team._id}`}>
            <div>
                <p>{props.team.name}</p>
                <p>Total Earnings: ${props.team.winnings}</p>
            </div>
        </Link>
    );
}

export default TeamCard;
