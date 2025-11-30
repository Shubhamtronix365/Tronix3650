import React, { useState } from 'react';

const Contact = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSuccess(true);
        setStatusMessage('Thank you for your interest! Your enrollment request has been submitted. We will contact you shortly.');

        // Clear the form after a short delay
        setTimeout(() => {
            e.target.reset();
            setStatusMessage('');
            setIsSuccess(false);
        }, 3000);
    };

    return (
        <section id="contact" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-tronix-primary/20 mt-16">
            <h2 className="text-5xl font-bold text-center mb-12 text-white tracking-tight">
                Ready to <span className="text-tronix-secondary">Join?</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#111] p-8 rounded-xl shadow-2xl shadow-tronix-primary/20 border border-tronix-primary/30">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required className="mt-1 block w-full px-4 py-3 bg-tronix-dark border border-gray-600 rounded-lg text-white focus:ring-tronix-primary focus:border-tronix-primary transition duration-200" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="you@college.com" required className="mt-1 block w-full px-4 py-3 bg-tronix-dark border border-gray-600 rounded-lg text-white focus:ring-tronix-primary focus:border-tronix-primary transition duration-200" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required className="mt-1 block w-full px-4 py-3 bg-tronix-dark border border-gray-600 rounded-lg text-white focus:ring-tronix-primary focus:border-tronix-primary transition duration-200" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your College / Query (Optional)</label>
                    <textarea id="message" name="message" rows="3" placeholder="Tell us about your background or any questions you have." className="mt-1 block w-full px-4 py-3 bg-tronix-dark border border-gray-600 rounded-lg text-white focus:ring-tronix-primary focus:border-tronix-primary transition duration-200"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-tronix-primary text-tronix-dark font-extrabold rounded-lg text-lg uppercase transition-all duration-300 hover:bg-white hover:text-tronix-secondary shadow-lg shadow-tronix-primary/40">
                    Submit Enrollment Request
                </button>
                {statusMessage && (
                    <div id="status-message" className={`text-center text-sm font-medium ${isSuccess ? 'text-tronix-primary' : 'text-red-400'}`}>
                        {statusMessage}
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact;
