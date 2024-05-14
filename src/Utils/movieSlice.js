import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        movieList: null,
        heroTrailer: null
    },
    reducers:{
        fillMovies: (state, action)=>{
            state.movieList = action.payload
        },
        fillHeroTrailer:(state, action)=>{
            state.heroTrailer = {...state.heroTrailer, ...action.payload}
        }
    }
})

export const {fillMovies, fillHeroTrailer} = movieSlice.actions
export default movieSlice.reducer;