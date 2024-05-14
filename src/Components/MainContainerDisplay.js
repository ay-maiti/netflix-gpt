import React from 'react'
import useGetTrailer from '../Utils/useGetTrailer'
import { useSelector } from 'react-redux'

const MainContainerDisplay = ({movie}) => {
    console.log("movie", movie)
    const trailer = useSelector(store=>store.movies.heroTrailer)
    useGetTrailer(movie?.id)
    console.log("trailer in MC", trailer)
  return (
    <div className='h-96 bg-red-300'>
        VideoBG
        <h1 className='mt-[250px] ml-[100px] text-3xl'>{movie?.title}</h1>
    </div>
  )
}

export default MainContainerDisplay