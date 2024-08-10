import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle.jsx";

const MainContainer = () => {
    const movies = useSelector(store => store.movie.nowPlayingMovies);
    if (movies == null) return;
    console.log(movies);
    const mainMovie = movies[0];
    const {original_title, overview} = mainMovie;
    console.log(original_title);
    return (
        <div className="relative h-[50vh] bg-red-600">
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    );
}

export default MainContainer;