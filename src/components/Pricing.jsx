import React from 'react';

const Pricing = () => {
    return (
        <section className="py-section-gap relative" id="pricing">
            <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center relative z-10">
                <div className="text-center mb-12 md:mb-16 flex flex-col items-center justify-center">
                    <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider uppercase">
                        <span className="tech-gradient-text">Investment &amp; Enrollment</span>
                    </h2>
                    <p className="font-code-snippet text-outline text-sm md:text-base mt-3 tracking-wide">
                        Transparent &amp; Flexible Program Investment
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-fixed to-secondary mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-16">
                    {/* Left Card: Actual Value */}
                    <div className="glass-panel border-error/30 p-10 rounded-2xl text-center relative flex flex-col justify-center h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,180,171,0.15)]">
                        <h3 className="font-label-caps text-error mb-4 tracking-widest uppercase font-bold text-xs">ACTUAL PROGRAM VALUE</h3>
                        <div className="font-headline-xl text-[52px] text-on-surface mb-2 tracking-tighter line-through opacity-60">₹19,999</div>
                        <p className="font-body-md text-sm text-outline">Original Course Value</p>
                    </div>

                    {/* Center Card: Regular Price */}
                    <div className="glass-panel border-outline-variant p-10 rounded-2xl text-center relative flex flex-col justify-center h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                        <h3 className="font-label-caps text-primary-fixed-dim mb-4 tracking-widest uppercase font-bold text-xs">STANDARD PRICE</h3>
                        <div className="font-headline-xl text-[56px] text-on-surface mb-2 tracking-tighter font-extrabold">₹14,999</div>
                        <p className="font-body-md text-sm text-on-surface font-semibold mb-1">Standard Course Fee</p>
                    </div>

                    {/* Right Card: Super Early Bird Offer (Featured) */}
                    <div className="glass-panel border-primary-fixed/70 p-10 rounded-2xl text-center relative flex flex-col justify-center h-full shadow-[0_0_35px_rgba(0,242,255,0.25)] lg:scale-105 z-10 border-2">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-surface-container-highest border border-primary-fixed/60 px-4 py-1.5 rounded-full text-[11px] font-black tracking-wider shadow-lg whitespace-nowrap">
                            <span className="bg-gradient-to-r from-primary-fixed via-white to-secondary-container bg-clip-text text-transparent">
                                ⚡ EARLY BIRD OFFER — FIRST 10 SEATS ONLY!
                            </span>
                        </div>
                        <h3 className="font-label-caps text-primary-fixed mb-4 tracking-widest uppercase font-bold text-xs mt-2">SUPER EARLY BIRD TICKET</h3>
                        <div className="font-headline-xl text-[64px] text-on-surface mb-2 tracking-tighter font-extrabold text-primary-fixed">₹9,999</div>
                        <p className="font-body-md text-sm text-on-surface font-semibold">
                            First 10 Registered Students Only!
                        </p>
                    </div>
                </div>

                <a
                    className="w-full max-w-md text-center bg-secondary-container text-on-surface font-headline-lg text-[22px] px-12 py-5 rounded-full hover:bg-secondary transition-all shadow-[0_0_30px_rgba(119,1,208,0.3)] hover:shadow-[0_0_40px_rgba(119,1,208,0.5)] uppercase font-bold tracking-wider"
                    href="#enroll"
                >
                    ENROLL NOW &amp; PAY
                </a>
                <p className="mt-8 font-body-md text-outline text-sm text-center max-w-xl">
                    Enroll early to grab the ₹9,999 Early Bird seat before all 10 early slots are filled!
                </p>
            </div>
        </section>
    );
};

export default Pricing;
