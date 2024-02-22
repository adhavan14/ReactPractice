import Dialog from '@mui/material/Dialog';
import CloseButton from '../buttons/CloseButton';
import { MovieDetails } from '../../service/ApiService';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../buttons/Button';

const InformationDialogbox = ({open, handleClose, movie}) => {

    const[movieDetials, setMovieDetails] = useState(null)

    const getMovieDetails = async()=> {
        const movieDetails = await MovieDetails(movie.id)
        setMovieDetails(movieDetails)
    }

    useEffect(()=>{
        getMovieDetails()
    }, [])

    function getGenre() {
        let genres = ""
        movieDetials && movieDetials.genres.map((genre) => {
            genres = genres + genre.name + " "
        })
        return genres
    }
    return (
        <Dialog open={open}>
            <div className='flex flex-col w-[600px] h-[400px] p-6'>
                <div className='flex'>
                    <div className='flex'>
                        <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.title} className='w-24'></img>
                        <div className='pl-4 pt-2'>
                            <p className='text-2xl'>Title : {movie.title}</p>
                            <p>Released Date: {movie.release_date}</p>
                            <p>Duration : {movieDetials && movieDetials.runtime}m</p>
                            <p>Genre : {getGenre()}</p>
                            <p>Rating : <span className='text-[#1560bd]'>&#9733;</span>{movie.vote_average.toFixed(1)}/10</p>
                        </div>
                    </div>
                    <div className='ml-auto'>
                        <CloseButton handleClose={handleClose}/>
                    </div>
                </div>
                <p className='pt-4'>{movie.overview}</p>
                <div className='mx-auto mt-6'>
                    <Button name={"More information"}></Button>
                </div>
            </div>
        </Dialog>
    )
}

export default InformationDialogbox