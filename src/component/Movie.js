import React from "react";

const IMG_URL = 'https://image.tmdb.org/t/p/w1280'

function Movie({movie}){
    console.log(movie);
    const setColor=(num)=>{
        if(num >= 8){
            return 'red'
        }
    }

    return (
        <div className="card">
            <img src={IMG_URL+movie.poster_path} alt={movie.title} />
            <div className="info">
                <h4>{movie.title || movie.name}</h4>
                <span className={`rate ${setColor(movie.vote_average)}`}>{movie.vote_average}</span>
                <span className="overview">{movie.overview.slice(0,120)}...</span>
            </div>
        </div>
    )
}

export default Movie;