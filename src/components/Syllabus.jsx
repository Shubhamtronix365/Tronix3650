import React from 'react';

const Syllabus = () => {
    return (
        <section id="syllabus" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-tronix-secondary/20">
            <h2 className="text-5xl font-bold text-center mb-16 text-white tracking-tight">
                40-Day Internship <span className="text-tronix-primary">Syllabus</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Column 1: Microcontrollers & Core */}
                <div className="bg-tronix-dark/50 p-6 rounded-xl border border-tronix-secondary/30">
                    <h3 className="text-2xl font-bold mb-4 pb-2 border-b border-tronix-secondary/50 text-tronix-secondary">Core Embedded Systems</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Microcontrollers: Arduino , PIC Microcontroller, ESP32, 8051, Raspberry Pi , STM32 etc...</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Protocols: SPI, UART (Serial Comm), I2C etc...</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Networking Protocols: HTTP & HTTPS etc...</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Real-World Implementation: Hands-on from soldering to final product assembly.</li>
                    </ul>
                </div>

                {/* Column 2: Sensors & Actuators */}
                <div className="bg-tronix-dark/50 p-6 rounded-xl border border-tronix-secondary/30">
                    <h3 className="text-2xl font-bold mb-4 pb-2 border-b border-tronix-secondary/50 text-tronix-secondary">Sensors, Actuators & IoT</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Key Sensors: IR, Ultrasonic, PIR, ECG, Touch, LDR, PZEM , Gas , Sound Sensor etc...</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Motors: Servo, DC Motors, Stepper Motors , BLDC Motor etc...</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Advanced IoT: Connecting devices to the cloud and web platforms etc...</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Web Integration: Displaying sensor data onto a live website.</li>
                    </ul>
                </div>

                {/* Column 3: Industrial & PCB */}
                <div className="bg-tronix-dark/50 p-6 rounded-xl border border-tronix-secondary/30">
                    <h3 className="text-2xl font-bold mb-4 pb-2 border-b border-tronix-secondary/50 text-tronix-secondary">PCB Design & Robotics</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> PCB Design (Proteus): Schematic to Layout design.</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> PCB Fabrication: Heat Press, Etching, Tinning, Component Mounting, Masking.</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Robotics: Concepts and hands-on application of robotic systems.</li>
                        <li className="flex items-start"><span className="text-tronix-primary mr-3 text-xl">&raquo;</span> Innovation: Developing new sensors during the internship.</li>
                    </ul>
                </div>
            </div>

            <p className="text-center mt-12 text-lg font-medium text-gray-400">This intensive program is designed to cover all topics in a hands-on, course-like structure over 40 days.</p>
        </section>
    );
};

export default Syllabus;
