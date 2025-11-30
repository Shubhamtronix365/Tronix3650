import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-tronix-primary/20">
            <h2 className="text-5xl font-bold text-center mb-16 text-white tracking-tight">
                About <span className="text-tronix-primary">Tronix365</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Tronix365 specializes in advanced industrial solutions, focusing on Robotics, Embedded Systems, and IoT. Our expertise spans the entire development cycle, from PCB design and development to full-scale R&D. We also provide comprehensive electronic guidance and services, alongside essential development support and training for engineering students.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-tronix-secondary pl-4 py-2">
                        Our vision is to empower the future of industry by delivering pioneering Robotics, Embedded, and IoT solutions, while simultaneously fostering a culture of practical innovation through comprehensive R&D and dedicated guidance for emerging engineering talent.
                    </p>
                </div>
                <div className="p-6 bg-tronix-dark/50 rounded-xl shadow-2xl shadow-tronix-secondary/20">
                    <h3 className="text-3xl font-bold text-tronix-primary mb-4">Our Commitment: Skill Mastery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-300 text-lg">
                        <div className="space-y-2">
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Embedded Systems Programming</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Sensor Integration</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Motor & Actuator Control</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> IoT Development</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Communication Protocols</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Robotics & Automation</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> PCB Designing</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> PCB Fabrication</div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Soldering & Hardware Assembly</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Product Development Lifecycle</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Real-Time Data Processing</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Industrial Project Exposure</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Technical Documentation</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Mobile & Web Integration</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Cloud Connectivity</div>
                            <div className="flex items-center"><span className="text-tronix-secondary mr-2">&#x27A4;</span> Career & Placement Skills</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
