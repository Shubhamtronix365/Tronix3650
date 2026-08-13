import React from 'react';

const Highlights = () => {
    return (
        <section className="py-section-gap relative bg-surface-container-low/50" id="highlights">
            <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 uppercase tracking-widest">
                        Program <span className="text-secondary">Highlights</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Highlight 1 */}
                    <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 text-center flex flex-col items-center border border-outline-variant/30">
                        <div className="text-5xl mb-4">🔬</div>
                        <h3 className="font-headline-lg text-xl text-on-surface mb-4 font-bold">100% Hands-On</h3>
                        <p className="font-body-md text-on-surface-variant text-sm">
                            Everything is covered practically, from basic soldering to creating the final product. Learn by doing.
                        </p>
                    </div>
                    {/* Highlight 2 */}
                    <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 text-center flex flex-col items-center border border-outline-variant/30">
                        <div className="text-5xl mb-4">🛠️</div>
                        <h3 className="font-headline-lg text-xl text-on-surface mb-4 font-bold">End-to-End PCB Design</h3>
                        <p className="font-body-md text-on-surface-variant text-sm">
                            Master PCB designing &amp; PCB Fabrication using screen printing &amp; heat press, etching, tinning, component mounting, and masking.
                        </p>
                    </div>
                    {/* Highlight 3 */}
                    <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 text-center flex flex-col items-center border border-outline-variant/30">
                        <div className="text-5xl mb-4">🎓</div>
                        <h3 className="font-headline-lg text-xl text-on-surface mb-4 font-bold">Dedicated Project Support</h3>
                        <p className="font-body-md text-on-surface-variant text-sm">
                            Providing mentorship to assist students in planning, developing, and improving their projects.
                        </p>
                    </div>
                    {/* Highlight 4 */}
                    <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 text-center flex flex-col items-center border border-outline-variant/30">
                        <div className="text-5xl mb-4">🤝</div>
                        <h3 className="font-headline-lg text-xl text-on-surface mb-4 font-bold">Placement Guidance</h3>
                        <p className="font-body-md text-on-surface-variant text-sm">
                            Receive valuable support and guidance to kickstart your career in the engineering industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
