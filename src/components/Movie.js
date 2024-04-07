import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// props를 모두 부모 컴포넌트로부터 받아옴
// props는 object -> object에 있는 item을 꺼내 쓰는 것 
function Movie({id, coverImage,title, summary, genres})
{
  return( // 각 요소에 해당하는 id값을 받아옴  
  <div>
    <img src={coverImage} alt={title}></img>
    <h2>
      {/* <a> 문법을 사용하면 페이지 전체가 재 실행됨 */}
      {/* 리액트에서 제공하는 Link를 사용 to속성을 사용하면 해당 url에 맞는 route(컴포넌트)로 이동 */}
      
      <Link to={`/movie/${id}`}> {title}</Link>
    </h2>
    <p>{summary}</p>
    {/* 영화중에 장르가 없는 영화 정보도 있기 때문에 장르가 없다면 null 처리 */}
    {(genres) ? (
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    ) : null}
  </div>);    

}

// 변수 타입 설정 
Movie.propTypes={
  id:PropTypes.number.isRequired,
  coverImage:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  // String 타입을 가진 배열
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;