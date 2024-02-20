import axios from "axios"

const baseUrl = 'https://api.themoviedb.org/3/'

export const ListMovies = async() => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjIxNTc2YTAzMTA1YmJjMDBhZDJlMjkyYWQxZjIzYyIsInN1YiI6IjY1ZDQyODg0YmJjYWUwMDE0OTAzYWZkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOi3DxdxONP9l-zR7e3goAEhAhbKEv9N-pwKfjfavQA"
    const header = {Authorization: `Bearer ${token}`}
    const moviesList = await axios.get(baseUrl + "discover/movie", {headers:header})
    return moviesList.data
}