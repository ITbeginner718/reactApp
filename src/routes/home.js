import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home (){

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //api를 호출하고 반환하는 방법2
  const getMovies = async () => {
    // await 안에 await가 있는 것
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    // api가 호출되면 로딩 텍스트는 사라짐
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {movies.map((movie) => (
            // 해당 코드를 컴포넌트로 변경
            <Movie
            // 영화 정보 id를 꼭 해줘야 함 
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );

}

export default Home;