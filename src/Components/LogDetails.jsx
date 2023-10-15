import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/logs/${index}`)
    .then(response => response.json())
    .then(log => {
      console.log(log)
      setLog(log)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const handleDelete = () => {};
  return (
    <article>
      <h3>
        {log.isFavorite ? <span>⭐️</span> : null} {log.name}
      </h3>
      <h5>
        <span>
          <a href={log.url}>{log.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {log.url}
      </h5>
      <h6>{log.category}</h6>
      <p>{log.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default LogDetails;
