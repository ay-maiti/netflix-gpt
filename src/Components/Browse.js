import React from 'react'
import Header from './Header'
import useFetchMovies from '../Utils/useFetchMovies'
import { NOW_PLAYING_API } from '../Utils/APIList'
import { useSelector } from 'react-redux'

const Browse = () => {
  const movies = useSelector((store)=>store.movies.movieList)

  console.log("movies from store", movies)

  useFetchMovies(NOW_PLAYING_API)
  
  return (
    <>
      <Header/>
      Browse
    </>
  )
}

export default Browse