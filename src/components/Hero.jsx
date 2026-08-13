import React, { useState, useEffect } from 'react';
import RobotAssistant from './RobotAssistant';

const Hero = () => {
    const [seats, setSeats] = useState({ available_seats: 150, total_seats: 150 });

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
        const eventSource = new EventSource(`${apiUrl}/api/seats/stream`);

        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setSeats(data);
            } catch (e) {
                console.error("Failed to parse seat SSE data:", e);
            }
        };

        eventSource.onerror = (err) => {
            console.error("EventSource failed:", err);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <section className="relative pt-32 pb-section-gap min-h-[90vh] flex items-center overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-[1280px] mx-auto px-margin-desktop md:px-margin-desktop px-margin-mobile grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center relative z-10">
                <div className="flex flex-col items-start gap-8">
                    {/* High-Impact Branded Tiranga Independence Day Banner */}
                    <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center gap-3 bg-surface-container-high/95 border-2 border-[#FF9933]/60 px-6 py-3.5 rounded-2xl shadow-[0_0_30px_rgba(255,153,51,0.3)] backdrop-blur-xl">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#FF9933] animate-pulse"></span>
                            <span className="font-headline-lg text-xs md:text-sm font-black tracking-widest uppercase text-white">
                                🇮🇳 INDEPENDENCE DAY OFFER
                            </span>
                        </div>
                        <div className="hidden sm:block text-outline-variant">|</div>
                        <div className="flex items-center gap-2">
                            <span className="font-code-snippet text-xs md:text-sm font-bold text-on-surface-variant">
                                FIRST 10 SEATS AT
                            </span>
                            <span className="font-headline-xl text-2xl md:text-3xl font-black bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                                ₹9,999
                            </span>
                            <span className="font-code-snippet text-[10px] md:text-xs text-outline uppercase font-semibold">
                                (UNTIL 15 AUG 11:59 PM)
                            </span>
                        </div>
                    </div>

                    <h1 className="font-headline-xl text-headline-xl md:text-[64px] leading-tight text-on-surface">
                        Embedded &amp; <br />
                        <span className="tech-gradient-text">IoT Internship</span>
                    </h1>

                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        Transforming Students into Industry-Ready Engineers. Master the art of hardware and firmware design.
                    </p>

                    <div className="w-full max-w-md">
                        <RobotAssistant />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full">
                        <a
                            className="w-full sm:w-auto text-center bg-surface-tint text-on-primary font-label-caps text-[16px] px-8 py-4 rounded-DEFAULT hover:bg-primary-fixed transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] uppercase font-bold tracking-wider"
                            href="#enroll"
                        >
                            SECURE YOUR SEAT NOW
                        </a>

                        <div className="flex items-center gap-3 border border-error/50 bg-error/10 px-4 py-2 rounded-lg">
                            <span className="material-symbols-outlined text-error fill-icon">warning</span>
                            <span className="font-code-snippet text-code-snippet text-error font-bold">
                                Only {seats.available_seats} Seats of {seats.total_seats} Left!
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[500px] hidden lg:block animate-float mt-12 lg:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none rounded-2xl"></div>

                    <div
                        className="w-full h-full bg-cover bg-center rounded-2xl border border-outline-variant/30 shadow-[0_0_50px_rgba(0,242,255,0.1)] relative z-0"
                        style={{
                            backgroundImage: `url('/hero-lab.png')`
                        }}
                    >
                        {/* Tech Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-fixed rounded-tl-2xl"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-fixed rounded-tr-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-fixed rounded-bl-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-fixed rounded-br-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
