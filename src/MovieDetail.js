import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MovieDetail() {
    const {id} = useParams();
    const [movie,setMovie] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://65f16b83034bdbecc762707e.mockapi.io/movie/${id}`,{
            method:"GET"
        })
        .then((data) => data.json())
        .then((mv) => setMovie(mv));
    },[]);
    console.log(movie);

    const ratingStyles = {
        color : movie.rating >=9 ? "green" : "red",
    }
  return (
    <div>
        <iframe 
            width="1000" 
            height="561" 
            src={movie.trailer} 
            title={movie.name} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>

        <div className='mpvie-detail-container'>
            <div className='movie-spec'>
                <h2 className='movie-name' style={{fontFamily:" Gabriola", fontSize: "40px"}}>&nbsp;&nbsp;{movie.name}</h2>

                <h3 style={ratingStyles} className='movie-rating'>⭐{movie.rating}&nbsp;&nbsp;</h3>
            </div>

            <p className='movie-summary' style={{fontFamily:" Gabriola", fontSize: "26px"}}>&nbsp;&nbsp;{movie.summary} </p>
        </div>
        <Button variant="contained" startIcon = {<ArrowBackIcon />} onClick={() => navigate(-1)}>Back</Button>
    </div>
  )
}
