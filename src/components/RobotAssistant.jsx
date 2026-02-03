import React from 'react';

const RobotAssistant = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 animate-fade-in-up delay-300">
            {/* Robot Container */}
            <div className="relative w-32 h-32 mb-4">
                {/* Floating Animation Wrapper */}
                <div className="w-full h-full animate-[bounce_3s_infinite_ease-in-out]">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                        {/* Glow Behind */}
                        <circle cx="50" cy="50" r="40" className="fill-tronix-primary/20 animate-pulse" />

                        {/* Head */}
                        <rect x="25" y="25" width="50" height="45" rx="8" className="fill-slate-900 stroke-tronix-primary stroke-2" />

                        {/* Eyes Container */}
                        <g className="animate-[pulse_4s_infinite]">
                            {/* Left Eye */}
                            <circle cx="40" cy="45" r="5" className="fill-cyan-400" />
                            {/* Right Eye */}
                            <circle cx="60" cy="45" r="5" className="fill-cyan-400" />
                        </g>

                        {/* Antenna */}
                        <line x1="50" y1="25" x2="50" y2="10" className="stroke-tronix-secondary stroke-2" />
                        <circle cx="50" cy="10" r="3" className="fill-red-500 animate-[ping_1.5s_infinite]" />

                        {/* Mouth */}
                        <path d="M 35 60 Q 50 65 65 60" className="stroke-cyan-400 stroke-2 fill-none" />

                        {/* Headphones/Ears */}
                        <rect x="20" y="35" width="5" height="15" rx="2" className="fill-gray-600" />
                        <rect x="75" y="35" width="5" height="15" rx="2" className="fill-gray-600" />
                    </svg>
                </div>

                {/* Shadow */}
                <div className="absolute -bottom-2 left-1/2 min-w-[60%] h-2 bg-black/50 blur-sm rounded-full transform -translate-x-1/2 animate-[pulse_3s_infinite_ease-in-out]"></div>
            </div>

            {/* Text Message */}
            <div className="text-center relative">
                <div className="absolute inset-0 bg-tronix-primary/20 blur-xl rounded-full"></div>
                <h3 className="relative text-3xl md:text-4xl font-black text-white uppercase tracking-widest font-mono">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        Admissions Open
                    </span>
                </h3>

            </div>
        </div>
    );
};

export default RobotAssistant;
