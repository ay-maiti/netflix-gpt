import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        movieList: null
    },
    reducers:{
        fillMovies: (state, action)=>{
            state.movieList = action.payload
        }
    }
})

export const {fillMovies} = movieSlice.actions
export default movieSlice.reducer;