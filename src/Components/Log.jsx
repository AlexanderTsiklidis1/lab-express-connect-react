import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>
        {log.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <a href={log.url} target="_blank" rel="noreferrer">
          {log.name}
        </a>
      </td>
      <td>
        <Link to={`/bookmarks/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Bookmark;