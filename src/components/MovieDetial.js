import { Link } from "react-router-dom";

function MovieDetail({ large_cover_image, title, description_full, genres,rating,runtime }) {
  return (
    <div>
    <div>
      <h2>
      <Link to={`/`}>HOME</Link>
      </h2>

    </div>
    <div>
      <img alt={title} src={large_cover_image}></img>
      <div>
        <h1>{title}</h1>
        <h2>영화 내용</h2>
        <p>{description_full}</p>
        <h2>rating: {rating}</h2>
        <h2>runtime: {runtime}</h2>
        <div>
          {genres ? (
            <div>
              <h2>genres</h2>
              <ul>
                {genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    </div>
  );
}

export default MovieDetail;
