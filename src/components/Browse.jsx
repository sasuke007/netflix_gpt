import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = () => {
    useNowPlayingMovies();
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            {/*
                 - fetch data from youtube and put it in main container
                 - layout for main container
                 - layout for secondary container
                 - layout for video title.
            */}

        </div>
    )
}

export default Browse;