import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constants.jsx";
import {addNowPlayingMovies} from "../utils/movieSlice.jsx";
import {useEffect} from "react";

const useNowPlayingMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            url, API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, []);
}

export default useNowPlayingMovies;