import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  return (
    <div className="container">
      {favorites.map((character) => {
        return (
          <div className="card">
            <img src={character.image} alt="imagen" width={"100%"} />
            <Link to={`/detail/${character.id}`}>
              <h4 className="card-name">{character.name}</h4>
            </Link>
            <h4>{character.status}</h4>
            <h4>{character.species}</h4>
            <h4>{character.gender}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
