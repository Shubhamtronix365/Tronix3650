import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-[#151515] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl my-16 shadow-2xl shadow-tronix-secondary/20 border border-tronix-secondary/20">
            <h2 className="text-5xl font-bold text-center mb-16 text-white tracking-tight">
                Investment & <span className="text-tronix-primary">Enrollment</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                {/* Plan 1: Actual Price (Strikethrough) */}
                <div className="p-8 rounded-xl bg-tronix-dark border-2 border-red-500/50 text-center transition-all duration-500">
                    <p className="text-lg uppercase font-semibold text-red-500 mb-2">Actual Program Value</p>
                    <p className="text-4xl font-extrabold text-red-500 line-through mb-4">₹16,800</p>
                    <p className="text-sm text-gray-500">Full Course Price</p>
                </div>

                {/* Plan 2: Discounted Price (Recommended) */}
                <div className="p-8 rounded-xl bg-tronix-dark border-4 border-tronix-primary text-center shadow-lg shadow-tronix-primary/40 transition-all duration-500 scale-105">
                    <p className="text-lg uppercase font-semibold text-tronix-primary mb-2 animate-pulse">Special Discount</p>
                    <p className="text-5xl font-extrabold text-white mb-4">₹10,000</p>
                    <p className="text-sm text-gray-300">40-Day Full Program Access</p>
                    <p className="text-xs mt-4 text-tronix-primary font-bold">(Save ₹6,800 Instantly)</p>
                </div>

                {/* Plan 3: Early Bird Offer (The Hook) */}
                <div className="relative p-8 rounded-xl bg-tronix-secondary/20 border-4 border-tronix-secondary text-center shadow-lg shadow-tronix-secondary/50 transition-all duration-500">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        Limited 10 Seats!
                    </div>
                    <p className="text-lg uppercase font-semibold text-tronix-secondary mb-2">Super Early Bird</p>
                    <p className="text-5xl font-extrabold text-tronix-secondary mb-4">₹6,000</p>
                    <p className="text-sm text-gray-300">For the First 10 Enrollments Only</p>
                    <p className="text-xs mt-4 text-red-400 font-bold">FEES PAYABLE ONE TIME ONLY</p>
                </div>
            </div>

            <div className="text-center mt-12">
                <a href="#enroll" className="inline-block py-4 px-12 bg-tronix-secondary text-white font-extrabold text-xl rounded-full uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-tronix-secondary/50 hover:bg-[#a352ff]">
                    Enroll Now & Pay ₹10,000
                </a>
                <p className="text-sm mt-4 text-gray-400">Contact us immediately to secure the ₹6,000 early bird slot!</p>
            </div>
        </section>
    );
};

export default Pricing;
