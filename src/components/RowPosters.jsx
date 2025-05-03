import React, { useEffect, useState, useRef } from 'react';
import instance from '../constants/axios';
import { API_KEY, imageUrl } from '../constants/constants';
import YouTube from 'react-youtube';

export default function PosterRow(props) {
  const scrollRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlID]= useState('');

  useEffect(() => {
    instance
      .get(`${props.endpoint}&api_key=${API_KEY}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error('Network Error:', err);
      });
  }, []);

  const scrollLeft = () => {
    const container = scrollRef.current;
    const posterWidth = window.innerWidth >= 768 ? 256 : 160; // md:w-64 or w-40
    container.scrollLeft -= posterWidth + 16; // Poster width + space-x-4
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    const posterWidth = window.innerWidth >= 768 ? 256 : 160; // md:w-64 or w-40
    container.scrollLeft += posterWidth + 16; // Poster width + space-x-4
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    console.log(id)
    instance.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.lenght!==0){
        setUrlID(response.data.results[0])
      }else{alert("Trailer Not available")}
    }
    )
  }



  return (
    <div className="px-2 py-2 bg-[#141414] relative">
      <h2 className="text-2xl font-bold text-white mb-4">{props.title}</h2>
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        {movies.map((movie) => (
          <img
            onClick={()=>handleMovie(movie.id)}
            key={movie.id}
            src={movie.poster_path ? `${imageUrl}${movie.poster_path}` : '/path/to/fallback-image.jpg'}
            alt={movie.name || 'TV Show Poster'}
            className={props.size==='lg' ? "w-40 md:w-64 h-auto rounded-lg pb-2":
              "w-24 md:w-32 h-auto rounded-lg pb-2"}
            loading="lazy"
          />
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white w-8 
        h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center z-10"
        onClick={scrollLeft}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white 
        w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center z-10"
        onClick={scrollRight}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
      {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  );
}