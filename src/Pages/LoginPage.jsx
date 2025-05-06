import React from 'react';
import PreSignUpNavbar from '../components/PreSignUpNavbar';
import SignInForm from '../components/SignInForm';
import backgroundImage from '../assets/Background.jpeg'; // Import the background image
import Footer from '../components/Footer';

export default function LoginPage() {
  return (<>
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <PreSignUpNavbar hideNavElements={true} />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <SignInForm />
      </div>
    </div>
    <Footer/>
    </>
  );
}