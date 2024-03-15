import React, { useEffect } from 'react'
import Movie from './Movie'
import { useState } from 'react';

export default function MovieList() {
    const [movie,setMovie] = useState([]);

    const getMovies = () => {
        fetch("https://65f16b83034bdbecc762707e.mockapi.io/movie",{
            method : "GET",
        })
        .then((data) => data.json())
        .then((mvs) => setMovie(mvs));
    };

    useEffect(() =>{
        getMovies()
    },[])
    console.log(movie);

    // const data = [
    //     {
    //         id: "99",
    //         name: "Aashiqui 2",
    //         poster: "https://image.tmdb.org/t/p/w500/z18DWXBRxn3kz00sIVhC7ZK39Qm.jpg",
    //         rating: 9.9,
    //         summary: "Rahul loses his fans and fame due to alcoholism. But he then decides to turn a small time singer into a rising star",
    //         trailer: "https://www.youtube.com/watch?v=FyXXgpPqe6w"
    //     },
    //     {
    //         id: "100",
    //         name: "Sanam Teri Kasam",
    //         poster: "https://m.media-amazon.com/images/M/MV5BMTQ3ZTJkYjItNTRhOC00ZjQ2LTgxMzgtZjE3NDY0NTlhYjcxXkEyXkFqcGdeQXVyOTA3MTM0MTM@._V1_FMjpg_UX1000_.jpg",
    //         rating: 9.5,
    //         summary: "After being disowned by her family, an awkward librarian relies on the help of her brooding neighbour",
    //         trailer: "https://www.youtube.com/watch?v=1IpBoMWRjm8"
    //     },
    //     {
    //         id: "101",
    //         name: "Ek Villain",
    //         poster: "https://rukminim2.flixcart.com/image/850/1000/av-media/movies/4/b/g/ek-villain-original-imadykq6cmjbvbc5.jpeg?q=90&crop=false",
    //         rating: 9.2,
    //         summary: "Guru is a gangster whose life changes after he falls in love with Aisha and decides to mend his ways. When Aisha gets murdered by a serial killer, Guru begins to search for the culprit",
    //         trailer: "https://www.youtube.com/watch?v=ruO0VrqOkdE"
    //     },
    //     {
    //         id: "102",
    //         name: "M.S. Dhoni: The Untold Story",
    //         poster: "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    //         rating: 10,
    //         summary: "The untold story of Mahendra Singh Dhoni's journey from ticket collector to trophy collector - the world-cup-winning captain of the Indian Cricket Team",
    //         trailer: "https://www.youtube.com/watch?v=6L6XqWoS8tw"
    //     },
    //     {
    //         id: "103",
    //         name: "Ae Dil Hai Mushkil",
    //         poster: "https://m.media-amazon.com/images/M/MV5BZTM1OTI3ZjItOWE3ZS00OTE2LWE2YjAtZTVlM2Q0MGQ5ZThmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    //         summary: "This story explores love - the shapes it takes, the ways it changes us and the exhilarating and often terrifying ride it takes us on. It is the journey of two characters, Alizeh and Ayan, as they navigate life, love and heartbreak",
    //         rating: 9,
    //         trailer: "https://www.youtube.com/watch?v=Z_PODraXg4E"
    //     },
    //     {
    //         id: "104",
    //         name: "Shershaah",
    //         poster: "https://m.media-amazon.com/images/S/pv-target-images/94f844722fbb6c7b92e0cbd1a71297e949349c306c938ce7c9bc402366789313.jpg",
    //         rating: 9.4,
    //         summary: "Shershaah is the story of PVC awardee Indian soldier Capt. Vikram Batra, whose bravery and unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999",
    //         trailer: "https://www.youtube.com/watch?v=Q0FTXnefVBA"
    //     },
    //     {
    //         id: "105",
    //         name: "Rab Ne Bana Di Jodi",
    //         poster: "https://m.media-amazon.com/images/M/MV5BMTQ0NzIzMTM3MF5BMl5BanBnXkFtZTcwNzY4NTk5Mw@@._V1_.jpg",
    //         rating: 8.9,
    //         summary: "A breathtaking, goose flesh igniting, awe inspiring love journey of an ordinary man Suri and his 'total opposite' love Taani",
    //         trailer: "https://www.youtube.com/watch?v=eBi8syxPd14"
    //     },
    //     {
    //         id: "106",
    //         name: "Fidaa",
    //         poster: "https://m.media-amazon.com/images/M/MV5BNjlkNWI1OGUtMzU0YS00M2Y4LTg2YTYtOTVhNDA4N2IzZGVmXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
    //         rating: 9.1,
    //         summary: "Varun, an NRI medical student, and Bhanu, a vivacious, young woman, fall in love with each other. However, they face many personal differences that create complications in their relationship",
    //         trailer: "https://www.youtube.com/watch?v=AVtvjfoXNXc"
    //     },
    //     {
    //         id: "107",
    //         name: "Sita Ramam",
    //         poster: "https://media.themoviedb.org/t/p/w500/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg",
    //         rating: 9.7,
    //         summary: "An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir,After he gets caught in jail, he sends a letter to Sita which won't reach her",
    //         trailer: "https://www.youtube.com/watch?v=Ljk6tGZ1l3A"
    //     },
    //     {
    //         id: "108",
    //         name: "Hi Nanna",
    //         poster: "https://wallpapercave.com/wp/wp13303851.jpg",
    //         summary: "A single father begins to narrate the story of the missing mother to his child and nothing remains the same",
    //         rating: 9.2,
    //         trailer: "https://www.youtube.com/embed/KsH2LA8pCjo",
    //     },
    //     {
    //         id: "109",
    //         name: "Yeh Jawaani Hai Deewani ",
    //         poster: "https://m.media-amazon.com/images/M/MV5BM2UwY2M3NjctM2E1Ni00MGExLWJmZmQtNGViZThiNjYxMjJjXkEyXkFqcGdeQXVyNDYwMjI1MzI@._V1_.jpg",
    //         summary: "Kabir and Naina bond during a trekking trip. Before Naina can express herself, Kabir leaves India to pursue his career. They meet again years later, but he still cherishes his dreams more than bonds.",
    //         rating: 9.6,
    //         trailer: "https://www.youtube.com/watch?v=Rbp2XUSeUNE",
    //     },
    //     {
    //         id: "110",
    //         name: "Brahmotsavam",
    //         poster: "https://lh3.googleusercontent.com/proxy/-ov3o95iSxBv6TgMLBYsJeMI_x2Ww1p8b1OyiKfzN4y9ryQ1Fm4O44szg20Kl6m9rwbeVdpHv7CVCqe5Aqm3zR7nnGeXpZHb5K6zEy6DJoEzEqK0kRVSpW437_9CIg",
    //         summary: "To consolidate his position in the family, a man tries to arrange a marriage for his daughter, but the suitable boy he has in mind is already in love with another.",
    //         rating: 9,
    //         trailer: "https://www.youtube.com/watch?v=cWRYYZjCMgY",
    //     }
    // ]

  return (
    <div className="movie-list">
        {
            movie.map((list,index) => (
                <div key={index}>
                    <Movie movieTake={list} getMovies={getMovies}/>
                </div>
            ))
        }
    </div>
  )
}
