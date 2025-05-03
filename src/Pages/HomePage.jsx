import Banner from '../components/Banner';
import Footer from '../components/Footer';
import RowPosters from '../components/RowPosters';
import axios from 'axios';
import { useState } from 'react';


function HomePage() {
  return (
    <div className="bg-[#141414] text-white min-h-screen pt-16">
      <Banner />
      <div className="pt-4 px-4">
        <RowPosters title='Netflix Originals' endpoint='discover/tv?with_networks=213'size='lg' />
        <RowPosters title='Comedy Movies' endpoint='discover/movie?with_genres=35' size='sm'/>
        <RowPosters title='Action Movies' endpoint='discover/movie?with_genres=28'size='sm'/>
        <RowPosters title='Romance Movies' endpoint='discover/movie?with_genres=10749'size='sm'/>
        <RowPosters title='Documentaries' endpoint='discover/movie?with_genres=99'size='sm'/>
        <Footer />
    </div>
    </div>
  );
}
export default HomePage;