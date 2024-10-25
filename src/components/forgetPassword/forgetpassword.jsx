import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  console.log(process.env.REACT_APP_BACKEND_URL);
  const notify = (message, type) => {
    if (type === 'error') {
      toast.error(message);
    } else if (type === 'success') {
      toast.success(message);
    } else {
      toast(message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/reset-password-token`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status ===200) { // Check if the response status is in the range 200-299
        notify('Email sent successfully. Please check your inbox for the reset link.', 'success');
        console.log(data);
      } else if(res.status=== 404) {
        notify(data.message, "error");
      }
    } catch (error) {
      console.error("Error:", error);
      notify("Failed to send email. Please try again later.", "error");
    }
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
      <Toaster />
    </div>
  );
};

export default ForgotPassword;
