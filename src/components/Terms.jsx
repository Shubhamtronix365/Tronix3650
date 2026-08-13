import React from 'react';

const Terms = () => {
    return (
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
            <div className="glass-panel p-8 rounded-xl border border-outline-variant/30 shadow-[0_0_20px_rgba(0,242,255,0.05)]">
                <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-6 uppercase tracking-wider flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-fixed">verified_user</span>
                    Terms &amp; Conditions
                </h3>
                <ul className="space-y-3 font-body-md text-on-surface-variant text-sm list-disc pl-5">
                    <li>Fees once paid are non-refundable &amp; non-transferable under any circumstances.</li>
                    <li>Certificates will be issued only upon successful completion of the final project.</li>
                    <li>Tronix365 reserves the right to modify the syllabus to keep up with industry trends.</li>
                    <li>Any misconduct during the program will lead to immediate termination without refund.</li>
                </ul>
            </div>
        </section>
    );
};

export default Terms;
