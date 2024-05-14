/* eslint-disable no-unused-expressions */

export const NOW_PLAYING_API = "https://api.themoviedb.org/3/movie/now_playing?language=hi-IN&page=1"

export const GET_MOVIE_VIDEOS_API = (movie_id)=>{
    return `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`
}

/* eslint-disable no-unused-expressions */