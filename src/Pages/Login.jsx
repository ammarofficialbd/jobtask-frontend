// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { setUser } from '../features/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }));
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {isSignUp ? 'SIGN UP' : 'LOGIN'}
      </h2>
      
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            {isSignUp ? 'SIGN UP' : 'LOGIN'}
          </button>
        </div>
      </form>
      
      <div className="mt-4 flex justify-center items-center">
        <span className="text-gray-600 text-sm">OR</span>
      </div>
      
    
      <div className="mt-4 flex justify-center space-x-4">
          <button className="text-red-600 text-2xl hover:bg-[#dde3fa] hover:py-2 hover:rounded-full hover:px-3" onClick={signInWithGoogle}>
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button className="text-blue-600 text-2xl">
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button className="text-blue-500 text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          {isSignUp ? 'Already a user? ' : "Don't have an account? "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={toggleForm}
          >
            {isSignUp ? 'LOGIN' : 'SIGN UP'}
          </span>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Login;
