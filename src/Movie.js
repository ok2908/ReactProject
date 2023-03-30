import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Movie = () => {
  const [data, setdata] = useState([]);

  const params = useParams();
  const getdata = async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=227a32cba05e634337990b504eafffe6&language=en-US`
    );
    setdata([result.data]);
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log('-single movie data---', data);
  const img = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      {data.map((val) => (
        <div className="main">
          <div className="sub">
            <img src={img + val.poster_path} height="300px" width={200}></img>
          </div>
          <div className="opa">
            <img src={img + val.backdrop_path} height="300px" width={800}></img>
          </div>
          <div className="sub1">
            <h1>{val.original_title}</h1>
          </div>
          <div className="sub1">
            <h2>overview:</h2>
            <h4>{val.overview}</h4>
          </div>
        </div>
      ))}
    </>
  );
};
export default Movie;
