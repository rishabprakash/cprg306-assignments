// Import necessary modules and hooks
"use client";
import React from 'react';
import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className=' flex flex-row items-center justify-center min-h-screen'>
      {!user ? (
        <button onClick={gitHubSignIn} className='p-3 duration-300 ease-in-out hover:scale-105 active:scale-95 bg-blue-600 rounded-xl text-white'>Login with GitHub</button>
      ) : (
        <div className='flex flex-col items-center justify-center bg-slate-600 p-4 rounded-xl text-white'>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut} className='bg-red-600 p-2 mt-5 rounded-lg duration-300 ease-in-out hover:bg-red-700 hover:scale-105'>Logout</button>
          <br />
          <Link href="week-9/shopping-list" className='bg-blue-600 p-2 rounded-lg duration-300 ease-in-out hover:bg-blue-700 hover:scale-105'>
            Go to Shopping List
          </Link>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
