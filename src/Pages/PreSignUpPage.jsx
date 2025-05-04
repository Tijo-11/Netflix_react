import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PreSignUpNavbar from '../components/PreSignUpNavbar';
import Banner1 from '../components/Banner1';
import GetStarted from '../components/GetStarted';
import ArcSeparator from '../components/ArcSeparator';
import ReasonsToJoin from '../components/ReasonsToJoin';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SignInForm from '../components/SignInForm';
import RowPosters from '../components/RowPosters';

export default function PreSignUpPage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showSignIn) {
      setShowSignIn(true);
    }
  }, [location.state]);

  return (
    <div className="bg-[#141414]">
      <PreSignUpNavbar showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      <Banner1 />
      {showSignIn ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <SignInForm />
        </div>
      ) : (
        <>
          <GetStarted />
          <ArcSeparator />
          <RowPosters title='Netflix Originals' endpoint='discover/tv?with_networks=213' size='lg' />
          <ReasonsToJoin />
          <FAQ />
          <GetStarted />
          <Footer />
        </>
      )}
    </div>
  );
}