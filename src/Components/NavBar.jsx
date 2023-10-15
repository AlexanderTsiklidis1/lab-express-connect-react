import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/Logs">Logs</Link>
      </h1>
      <button>
        <Link to="/Logs/new">New Logs</Link>
      </button>
    </nav>
  );
}