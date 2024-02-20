import { useEffect } from "react"
import { ListMovies } from "../service/ApiService"
import { useState } from "react"
import Navbar from "./Navbar"

const Home = () => {

    const [movies, setMovies] = useState(null)

    const getAllMovies = async() => {
        const movies = await ListMovies()
        console.log(movies.results)
        setMovies(movies.results)
    }

    useEffect(() => {
        getAllMovies()
    },[])


    return (
        <>
        <Navbar/>
        <div className="">
            {
                movies != null && movies.map((movie, index) => {
                    return <img src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path} alt={movie.title}></img>
                })
            }
        </div>
        </>
    )

}

export default Home