import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fillMovies } from "./movieSlice";
import { options } from "./options";

const useFetchMovies = (api)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async ()=>{
        const data_raw = await fetch(api, options)
        const data = await data_raw.json();
        dispatch(fillMovies(data.results))
    }
}

export default useFetchMovies;