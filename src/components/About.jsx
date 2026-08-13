import React from 'react';

const About = () => {
    return (
        <section className="py-section-gap relative overflow-hidden" id="about">
            <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center opacity-10"></div>
            <div className="w-full max-w-[1280px] mx-auto px-margin-desktop md:px-margin-desktop px-margin-mobile relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 uppercase tracking-widest">
                        About <span className="text-primary-fixed">Tronix365</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col gap-6 pl-4 border-l-4 border-secondary/50">
                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                            Tronix365 specializes in advanced industrial solutions, focusing on Robotics, Embedded Systems and IoT. Our expertise spans the entire development cycle, from PCB design and development to full-scale R&amp;D. We also provide comprehensive electronic guidance and services, alongside essential development support and training.
                        </p>
                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                            Our vision is to empower the future of industry by delivering pioneering Robotics, Embedded and IoT solutions, while simultaneously fostering a culture of practical innovation through comprehensive R&amp;D and dedicated guidance for emerging engineering talent.
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-xl border border-outline-variant/30">
                        <h3 className="font-headline-lg text-xl text-primary-fixed mb-6 font-bold">Our Commitment: Skill Mastery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-body-md text-on-surface-variant">
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Embedded Systems Programming</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Soldering &amp; Hardware Assembly</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Sensor Integration</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Product Development</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Motor &amp; Actuator Control</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Real-Time Data Processing</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> IoT Development</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Industrial Project Exposure</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Communication Protocols</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Technical Documentation</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Robotics &amp; Automation</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Mobile &amp; Web Integration</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> PCB Designing</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Cloud Connectivity</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> PCB Fabrication</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">play_arrow</span> Career &amp; Placement Skills</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
