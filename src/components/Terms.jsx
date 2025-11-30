import React from 'react';

const Terms = () => {
    return (
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111] border border-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Terms & Conditions</h3>
                <ul className="space-y-3 text-gray-400 list-disc pl-5">
                    <li>Fees once paid are non-refundable & non-transferable under any circumstances.</li>
                    <li>The internship duration is strictly 40 days starting from December 22, 2025.</li>
                    <li>Certificates will be issued only upon successful completion of the final project.</li>
                    <li>Tronix365 reserves the right to modify the syllabus to keep up with industry trends.</li>
                    <li>Any misconduct during the program will lead to immediate termination without refund.</li>
                    {/* <li>Support is provided via dedicated Discord channels during business hours.</li> */}
                </ul>
            </div>
        </section>
    );
};

export default Terms;
