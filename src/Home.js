import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=227a32cba05e634337990b504eafffe6&language=en-US&page=1';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  const img = 'https://image.tmdb.org/t/p/w500/';

  const history = useNavigate();
  const handleMovieDetails = (dat) => {
    history('/home/' + dat.id);
  };
  return (
    <>
      <div>
        {movies ? (
          <div className="container">
            <div className="grid">
              <div className="row">
                {movies.map((movieReq) => (
                  <div className="col-4">
                    <Link to={`/home/${movieReq.id}`}>
                      <img
                        height="300px"
                        width={200}
                        className="card-img-top"
                        onClick={() => handleMovieDetails(movieReq)}
                        src={img + movieReq.poster_path}
                      />
                      <h3>{movieReq.titel}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </>
  );
};

export default Home;
