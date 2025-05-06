// src/pages/PreSignUpPage.jsx
import React from 'react';
import PreSignUpNavbar from '../components/PreSignUpNavbar';
import Banner1 from '../components/Banner1';
import GetStarted from '../components/GetStarted';
import ArcSeparator from '../components/ArcSeparator';
import ReasonsToJoin from '../components/ReasonsToJoin';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import RowPosters from '../components/RowPosters';

export default function PreSignUpPage() {
  return (
    <div className="bg-[#141414]">
      <PreSignUpNavbar /> {/* No props needed */}
      <Banner1 />
      <GetStarted />
      <ArcSeparator />
      <RowPosters title='Netflix Originals' endpoint='discover/tv?with_networks=213' size='lg' />
      <ReasonsToJoin />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  );
}