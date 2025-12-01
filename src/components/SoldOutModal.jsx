import React from 'react';

const SoldOutModal = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
            <div className="bg-[#111] border-2 border-red-600 p-8 rounded-2xl max-w-lg w-full shadow-[0_0_50px_rgba(220,38,38,0.3)] relative text-center transform scale-100 animate-bounce-in">

                <div className="text-6xl mb-6">🚫</div>

                <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
                    OOPS! <span className="text-red-500">SOLD OUT</span>
                </h2>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    You are a bit late! All seats for this batch have been booked.
                </p>

                <div className="bg-tronix-dark/50 p-6 rounded-xl border border-gray-800 mb-8">
                    <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-semibold">Still interested?</p>
                    <p className="text-white mb-4">Contact the team to check for any cancellations or next batch availability.</p>

                    <a
                        href="https://wa.me/918999613650"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all duration-300 w-full"
                    >
                        <span>💬 Chat on WhatsApp</span>
                    </a>
                </div>

                <p className="text-xs text-gray-500">
                    Tronix365 Internship Program
                </p>
            </div>
        </div>
    );
};

export default SoldOutModal;
