import { useEffect, useState } from "react";
import { API_TOKEN } from "./APISecret";
import { useDispatch } from "react-redux";
import { fillMovies } from "./movieSlice";

const useFetchMovies = (api)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async ()=>{
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer '+API_TOKEN
            }
        };
        const data_raw = await fetch(api, options)
        const data = await data_raw.json();
        dispatch(fillMovies(data))
    }
}

export default useFetchMovies;