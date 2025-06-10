import { Button } from "react-bootstrap";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, removeFavorite } = useStore();
  return (
    <>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
            <p>By User: <Link to={`/users/${photo.id}`}>{photo.id}</Link></p>
            <Button onClick={() => removeFavorite(photo.id)}>Remove</Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Favorites;
