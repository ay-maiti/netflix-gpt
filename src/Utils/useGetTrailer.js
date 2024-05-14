import { useEffect } from "react";
import { GET_MOVIE_VIDEOS_API } from "./APIList";
import { options } from "./options";
import { useDispatch } from "react-redux";
import { fillHeroTrailer } from "./movieSlice";

const useGetTrailer = (movie_id)=>{
    const VIDEO_API = GET_MOVIE_VIDEOS_API(movie_id)
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchVideo();
    }, [])

    const fetchVideo = async function(){
        const raw_data = await fetch(VIDEO_API, options)
        const data = await raw_data.json();
        //console.log("trailer",data.results)
        const trailers = data ? data.results.filter((video)=>video.type==="Trailer"):{};
        console.log("trailer",trailers[0])
        // if(trailers===null){
        //     trailers = [data.results[0]];
        // }
        dispatch(fillHeroTrailer(trailers[0]));
    }
}

export default useGetTrailer;
// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));