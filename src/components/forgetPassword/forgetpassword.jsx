import React, { useState } from 'react';
import ResetPassword from './resetpassword';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async(e) => {
    console.log(email);
    e.preventDefault();
    // Handle password reset logic here
    const res = await fetch("http://localhost:4000/reset-password-token", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    });
    console.log(res);

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-center text-white">Forgot Password</h2>
        <p className="text-sm text-center text-gray-400">Enter your email address to receive a password reset link.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Reset Link
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-400">
          Remembered your password?{' '}
          <Link to="/reset" className="font-medium text-indigo-500 hover:text-indigo-400">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
