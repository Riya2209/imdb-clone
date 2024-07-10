import React, {useEffect, useState} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "./Card.css"
import { Link } from "react-router-dom";

const Card = ({movie}) => {
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return(
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {
            isLoading ? ( 
                <div className="cards">
                        <Skeleton height={300} duration={2}/>
                </div>
            ) : ( 
                <div>
                    <Link to={`movie/${movie.id}`} style={{textDecoration: "none", color:"white"}}>
                        <div className="cards">
                            <img className="cards-img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
                            <div className="cards-overlay">
                                <div className="cards-title">{movie?movie.original_title:""}</div>
                                <div className="cards-runtine">
                                    {movie? movie.release_date:""}
                                    <span className="cards-rating">{movie?movie.vote_average:""}<i className="fas fa-star"/></span>
                                </div>
                                <div className="cards-description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        </SkeletonTheme>
        </>
    )
}

export default Card;