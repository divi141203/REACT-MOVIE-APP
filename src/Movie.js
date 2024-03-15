import React, { useState } from 'react'
import Counter from './Counter'
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import image1 from "./Aashiqui_2.jpg" - for single directory
// import image1 from "../Aashiqui_2.jpg" - for two directory

export default function Movie({movieTake,getMovies}) {
    const [show,setshow] = useState(true);
    const navigate = useNavigate();

    const deleteMovie = (id) => {
       
        fetch(`https://65f16b83034bdbecc762707e.mockapi.io/movie/${id}`, {
            method:"DELETE",
        })
        .then(() => getMovies())
        .then(() => alert("This card gets deleted now"))
    }

  return (
    <Card className="movie-container">
        <img className='movie-poster' src={movieTake.poster} />

        <CardContent>
            <div className='movie-spec'>
                <h2 className='movie-name' style={{fontFamily:" Gabriola", fontSize: "26px"}}>{movieTake.name}

                    <IconButton color="error" aria-label="Toggle-Description" onClick={() =>setshow(!show)}>
                        {show ? <ExpandMoreIcon fontSize='small' /> : <ExpandLessIcon fontSize='small' />}
                    </IconButton>

                    <IconButton color='error' aria-label='Movie-Info' onClick={() => navigate(`/portal/view/${movieTake.id}`)}>
                        <InfoIcon fontSize='small' />
                    </IconButton>
                </h2>
                <h2 className='movie-rating'>⭐{movieTake.rating}</h2>
            </div>
         </CardContent>

        {!show ? <p className='movie-summary'>{movieTake.summary}</p> : null}
        
        <CardActions>
            <Counter />
            <IconButton sx={{marginLeft:"auto"}} 
                aria-label="editMovie" 
                onClick={() => navigate(`/portal/edit/${movieTake.id}`)}>
                    <EditIcon color="error" />
            </IconButton>
            <IconButton sx={{marginLeft:"auto"}} 
                aria-label="editMovie" onClick = { () => deleteMovie(movieTake.id)} >
                    <DeleteIcon color="error" />
            </IconButton>
        </CardActions>
        
    </Card>
  )
}
