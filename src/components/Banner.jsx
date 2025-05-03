import { useEffect, useState } from 'react';
import squidGameImage from '../assets/Squid-2.jpg';
import  axios from '../constants/axios' //instance is named as axios as it is default import
import { API_KEY, imageUrl } from '../constants/constants';

function Banner() {
  const [movie, setMovie]=useState([]);


  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })

  },[])
  return (
    <div className="w-full h-[320px] md:h-[480px] relative z-0">
      <img
  src={movie && movie.backdrop_path ? `${imageUrl}${movie.backdrop_path}` : ''}
  alt="Banner Image"
  className="w-full h-full object-contain object-top"
/>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center z-10">
        <div className="text-left ml-4 md:ml-8 max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Watch {movie? movie.title: ""} Now
          </h2>
          <div className="flex space-x-4">
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600"
              onClick={() => console.log('Play clicked')}
            >
              Play
            </button>
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600"
              onClick={() => console.log('+ My List clicked')}
            >
              + My List
            </button>
          </div>
          <p className="text-lg md:text-xl text-white mb-4">
            {movie ? movie.overview : ""}
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-[7rem] h-full bg-gradient-to-r from-[#141414] to-transparent"
      ></div>
    </div>
  );
}

export default Banner;