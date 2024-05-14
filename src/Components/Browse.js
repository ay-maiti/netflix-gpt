import React from 'react'
import Header from './Header'
import useFetchMovies from '../Utils/useFetchMovies'
import { NOW_PLAYING_API } from '../Utils/APIList'
import { useSelector } from 'react-redux'
import MainContainerDisplay from './MainContainerDisplay'
import SecondaryContainerDisplay from './SecondaryContainerDisplay'

const Browse = () => {
  const movies = useSelector((store)=>store.movies.movieList)

  console.log("movies from store", movies)
  const hero_movie = movies?movies[0]:null;
  useFetchMovies(NOW_PLAYING_API)
  
  return (
    <div className=''>
      <Header/>
      <MainContainerDisplay movie={hero_movie}/>
      <SecondaryContainerDisplay/>
    </div>
  )
}

export default Browse