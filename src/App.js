// import { render } from "react-dom";
import "./styles.css";
import Movie from "./components/Movie";
import { useState } from "react";
import MovieForm from "./components/MovieForm";

export default function App() {
  const [movies, setMovies] = useState([
    //   [ 영화제목이 같은 제목일 수도 있어서 시작은 빈 배열로 시작
    //   { title: "hello world1", year: 2001 },
    //   { title: "hello world2", year: 2002 },
    //   { title: "hello world3", year: 2003 },
    //   { title: "hello world4", year: 2004 }
    // ]
  ]);

  // id 에 moive.id 넣어주고 밑 함수 실행
  //id 를 통해 영화를 찾고 지워주고 나머지 정보의 배열을 넣어줌
  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return (
          <div>
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
          </div>
        );
      })
    : "추가된 영화가 없습니다";

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}
