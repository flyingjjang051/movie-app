import axios from "axios";
import qs from "qs";
import { gsap } from "gsap";

import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Movie from "./Movie";

export default function List() {
  //const movieList = useRef();
  //const items = gsap.utils.selector(movieList);
  //const query = "슈퍼맨";
  const [movies, setMovies] = useState([]);
  //console.log(useLocation());
  const location = useLocation();
  const searchMovie = qs.parse(location.search, { ignoreQueryPrefix: true }).movie; //? 무시하기....
  //const test = qs.parse(location.search, { ignoreQueryPrefix: true }).test;
  //console.log(searchMovie);
  //console.log("test===", test);
  // useLocation()에 있는 search에 query string정보가 들어가 있음...

  useEffect(() => {
    axios
      .get(
        `
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1&query=${searchMovie}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="title">
          <strong>popolar</strong> movie
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            // return <Movie imgSrc={item.poster_path} point={item.vote_average} />;
            //console.log({ ...item });
            return <Movie movieInfo={item} key={idx} className="item" />;
          })}
        </ul>
      </div>
    </>
  );
}
