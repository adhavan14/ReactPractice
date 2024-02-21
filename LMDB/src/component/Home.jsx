import { useEffect } from "react"
import { ListMovies } from "../service/ApiService"
import { useState } from "react"
import Navbar from "./Navbar"
import Movie from "./Movie"

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
        <div className="grid grid-cols-5 gap-2 p-4 w-[1500px] mx-auto">
            {
                movies && movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie}/>
                })        
            }
        </div>
        </>
    )

}

export default Home