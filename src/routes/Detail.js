import MovieDetail from "../components/MovieDetial";

//url에 있는 변수값을 가져오는 것
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movieDetail, setMovieDetail] = useState(" ");
  //자신과 연결되어 있는 movie/:id 에서 id값을 가져오는 것
  //const id = useParams(); console.log(id.id); 와 같음
  const { id } = useParams();
  console.log(id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieDetail(json.data.movie);
  };
  console.log(movieDetail);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <MovieDetail
      large_cover_image={movieDetail.large_cover_image}
      title={movieDetail.title}
      description_full={movieDetail.description_full}
      genres={movieDetail.genres}
      rating={movieDetail.rating}
      runtime={movieDetail.runtime}
    />
  );
}

export default Detail;
