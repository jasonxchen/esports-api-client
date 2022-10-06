import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/" className="hover:text-gray-500">Home</Link>{" | "}
            <Link to="/teams" className="hover:text-gray-500">Teams</Link>
        </nav>
    );
}

export default Navbar;
