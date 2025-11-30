import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-tronix-dark tech-bg px-4">
            <div className="max-w-md w-full bg-[#111] border border-green-500/30 p-8 rounded-xl shadow-2xl shadow-green-500/20 text-center">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Registration Successful!</h1>
                <p className="text-gray-400 mb-8">
                    Thank you for enrolling in the Tronix365 Internship Program. A confirmation email has been sent to your registered email address.
                </p>
                <Link
                    to="/"
                    className="inline-block w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition duration-300"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default Success;
