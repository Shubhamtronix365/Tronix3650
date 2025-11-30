import React from 'react';
import { Link } from 'react-router-dom';

const Failure = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-tronix-dark tech-bg px-4">
            <div className="max-w-md w-full bg-[#111] border border-red-500/30 p-8 rounded-xl shadow-2xl shadow-red-500/20 text-center">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Payment Failed</h1>
                <p className="text-gray-400 mb-8">
                    We couldn't process your payment. Please try again or contact support if the issue persists.
                </p>
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="inline-block w-full py-3 bg-tronix-primary text-tronix-dark font-bold rounded-lg hover:bg-white transition duration-300"
                    >
                        Try Again
                    </Link>
                    <Link
                        to="/"
                        className="inline-block w-full py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Failure;
