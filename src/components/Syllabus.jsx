import React from 'react';

const Syllabus = () => {
    return (
        <section className="py-section-gap bg-surface-container-lowest border-y border-outline-variant/10 relative" id="syllabus">
            <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 uppercase">
                        <span className="tech-gradient-text">Internship Syllabus</span>
                    </h2>
                    <p className="font-code-snippet text-outline">Interactive IoT/Robotics Engineering Lab Interface</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Module 1 */}
                    <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 relative group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-fixed/20 to-transparent rounded-tr-xl"></div>
                        <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4 group-hover:scale-110 transition-transform block">
                            developer_board
                        </span>
                        <h3 className="font-headline-lg text-xl text-on-surface mb-4 font-bold">Core Embedded Systems</h3>
                        <ul className="font-body-md text-on-surface-variant space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed mt-2 shrink-0"></span>
                                <span><strong className="text-on-surface">Microcontrollers:</strong> Arduino, PIC, ESP32, 8051, Raspberry Pi, STM32 etc...</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed mt-2 shrink-0"></span>
                                <span><strong className="text-on-surface">Protocols:</strong> SPI, UART, I2C etc...</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed mt-2 shrink-0"></span>
                                <span><strong className="text-on-surface">Networking Protocols:</strong> HTTP &amp; HTTPS etc...</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed mt-2 shrink-0"></span>
                                <span><strong className="text-on-surface">Real-World Implementation:</strong> Hands-on from soldering to final product assembly.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Module 2 */}
                    <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 relative group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/20 to-transparent rounded-tr-xl"></div>
                        <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform block">
                            sensors
                        </span>
                        <h3 className="font-headline-lg text-xl text-on-surface mb-4 font-bold">Sensors, Actuators &amp; IoT</h3>
                        <ul className="font-body-md text-on-surface-variant space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                                <span><strong className="text-on-surface">Key Sensors:</strong> IR, Ultrasonic, PIR, ECG, Touch, LDR, PZEM, Gas, Sound Sensor etc...</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                                <span><strong className="text-on-surface">Motors:</strong> Servo, DC Motors, Stepper Motors, BLDC Motor etc...</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                                <span><strong className="text-on-surface">Advanced IoT:</strong> Connecting devices to the cloud and web platforms etc...</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                                <span><strong className="text-on-surface">Web Integration:</strong> Displaying sensor data onto a live website.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Module 3 */}
                    <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
                            <img
                                alt="Robotic Arm"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida/AP1WRLslMROVhAiJCIYwFdJ3G-Dua7gPKTXMK_a-p9QTCR9R9qnYY_RqR-ROhbx83lb916Fcpn9DSly0HIi1MIE23hQk-sZrJTmSYRr8eb3aWbLfQbwl2ReME9v7vXY-xA0_NzB9-cEsIL1-a_IeBm0RysvvAZTyz3ibdAXGPx5v9_VapcJgCK6kmkrZVn9RbWHQYU7m-tZ9Wrv7_DVp8dc_jQFVk0vgQW_scWzo7iuju_YGjxT_y2m3TWI35A"
                            />
                        </div>
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-4 group-hover:scale-110 transition-transform block">
                                precision_manufacturing
                            </span>
                            <h3 className="font-headline-lg text-xl text-on-surface mb-4 font-bold">PCB Design &amp; Robotics</h3>
                            <ul className="font-body-md text-on-surface-variant space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim mt-2 shrink-0"></span>
                                    <span><strong className="text-on-surface">PCB Design (Proteus):</strong> Schematic to Layout design</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim mt-2 shrink-0"></span>
                                    <span><strong className="text-on-surface">PCB Fabrication:</strong> Printing, Etching, Tinning, Component Mounting, Masking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim mt-2 shrink-0"></span>
                                    <span><strong className="text-on-surface">Robotics:</strong> Concepts and hands-on application of robotic systems</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim mt-2 shrink-0"></span>
                                    <span><strong className="text-on-surface">Innovation:</strong> Developing new sensors during the internship</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Syllabus;
