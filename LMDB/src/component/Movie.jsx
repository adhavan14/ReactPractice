import { useState } from "react"
import FavoriteButton from "./buttons/FavoriteButton"
import InformationButton from "./buttons/InformationButton"
import RatingButton from "./buttons/RatingButton"
import RatingDialogbox from "./dialogbox/RatingDialogbox"

const Movie = ({movie}) => {

    const [open, setOpen] = useState(false)
    const [favorite, setFavorite] = useState(false)

    const handleFavorite = () => {
        setFavorite(prev => !prev)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="flex flex-col mx-auto p-4 w-[250px]">
            <div className="flex">
                {favorite && <p className="absolute z-10">&#10084;</p>}
                <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.title}></img>
            </div>
            <div className="flex w-full ml-auto p-1">
                <h3><span className="text-[#1560bd] pr-1">&#9733;</span>{movie.vote_average.toFixed(1)}</h3>
                <RatingButton handleOpen={handleOpen}/>
                <RatingDialogbox open={open} handleClose={handleClose} movieName={movie.title}/>
                <InformationButton/>
            </div>
            <h3 className="p-1">{movie.title}</h3>
            <FavoriteButton handleFavorite={handleFavorite} name={favorite?"Remove" : "Add to favorite"}/>
        </div>
    )
}

export default Movie