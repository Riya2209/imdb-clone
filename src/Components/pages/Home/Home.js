import { set } from "mongoose";
import React, {useEffect, useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
        console.log(popularMovies)
    }, [])

    return(
        <>
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                autoFocus={true}
                interval={3000}
                transitionTime={500}
                infiniteLoop={true}
                showStatus={false}
                swipeable={true}
            >
                {
                    popularMovies.map((movie) => {
                        return(
                        <Link style={{textDecoration: "none", color: "white"}} to={`/movie/${movie.id}`}>
                            <div className="poster-image">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                            </div>
                            <div className="poster-image-overlay">
                                <div className="poster-image-title">
                                    {movie ? movie.original_title: ""}
                                </div>
                                <div className="poster-image-runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="poster-image-rating">
                                    {movie ? movie.vote_average : ""}
                                    <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/> {" "}
                                </span>
                                </div>
                            <div className="poster-image-description">
                                {movie ? movie.overview : "" }
                            </div>  
                            </div>
                        </Link>
                        )
                    })
                }
             
            </Carousel>
        </div>
        {/* <h1> Home Page</h1> */}
        </>
    )
}

export default Home;