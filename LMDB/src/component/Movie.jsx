import { useState } from "react"
import FavoriteButton from "./buttons/FavoriteButton"
import InformationButton from "./buttons/InformationButton"
import RatingButton from "./buttons/RatingButton"
import RatingDialogbox from "./dialogbox/RatingDialogbox"

const Movie = ({movie}) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="flex flex-col mx-auto p-4 w-[250px]">
            <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.title}></img>
            <div className="flex w-full ml-auto p-1">
                <h3><span className="text-[#1560bd] pr-1">&#9733;</span>{movie.vote_average.toFixed(1)}</h3>
                <RatingButton handleOpen={handleOpen}/>
                <RatingDialogbox open={open} handleClose={handleClose} movieName={movie.title}/>
                <InformationButton/>
            </div>
            <h3 className="p-1">{movie.title}</h3>
            <FavoriteButton/>
        </div>
    )
}

export default Movie