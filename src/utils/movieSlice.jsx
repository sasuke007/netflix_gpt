import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            // Redux Toolkit uses immer BTS
            state.nowPlayingMovies = action.payload;
        }
    },
});

export const {addNowPlayingMovies} = movieSlice.actions;

export default movieSlice.reducer;
