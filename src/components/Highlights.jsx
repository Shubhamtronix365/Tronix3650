import React from 'react';

const Highlights = () => {
    return (
        <section id="internship" className="py-20 bg-[#111] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl my-16 shadow-inner shadow-tronix-primary/10">
            <h2 className="text-5xl font-bold text-center mb-16 text-white tracking-tight">
                Program <span className="text-tronix-secondary">Highlights</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Highlight Card 1 */}
                <div className="p-6 rounded-xl bg-tronix-dark border border-tronix-secondary/30 text-center syllabus-card">
                    <div className="text-5xl text-tronix-primary mb-4">🔬</div>
                    <h3 className="text-xl font-bold mb-2">100% Hands-On</h3>
                    <p className="text-gray-400 text-sm">Everything is covered practically, from basic soldering to creating the final product. Learn by doing.</p>
                </div>
                {/* Highlight Card 2 */}
                <div className="p-6 rounded-xl bg-tronix-dark border border-tronix-secondary/30 text-center syllabus-card">
                    <div className="text-5xl text-tronix-primary mb-4">🛠️</div>
                    <h3 className="text-xl font-bold mb-2">End-to-End PCB Design</h3>
                    <p className="text-gray-400 text-sm">Master PCB designing & PCB Fabrication using screen printing & heat press, etching, tinning, component mounting, and masking.</p>
                </div>
                {/* Highlight Card 3 */}
                <div className="p-6 rounded-xl bg-tronix-dark border border-tronix-secondary/30 text-center syllabus-card">
                    <div className="text-5xl text-tronix-primary mb-4">🎓</div>
                    <h3 className="text-xl font-bold mb-2">Dedicated Project Support</h3>
                    <p className="text-gray-400 text-sm">Total support in making and perfecting your final year or semester college project.</p>
                </div>
                {/* Highlight Card 4 */}
                <div className="p-6 rounded-xl bg-tronix-dark border border-tronix-secondary/30 text-center syllabus-card">
                    <div className="text-5xl text-tronix-primary mb-4">🤝</div>
                    <h3 className="text-xl font-bold mb-2">Placement Guidance</h3>
                    <p className="text-gray-400 text-sm">Receive valuable support and guidance to kickstart your career in the engineering industry.</p>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
