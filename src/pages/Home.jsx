import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Syllabus from '../components/Syllabus';
import Pricing from '../components/Pricing';
import Terms from '../components/Terms';
import EnrollmentForm from '../components/EnrollmentForm';
import PaymentModal from '../components/PaymentModal';
import Footer from '../components/Footer';

const Home = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [registeredUser, setRegisteredUser] = useState(null);

    const handleRegisterSuccess = (user) => {
        setRegisteredUser(user);
        setShowPaymentModal(true);
    };

    return (
        <div className="bg-tronix-dark text-gray-100 font-sans tech-bg min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Highlights />
                <Syllabus />
                <Pricing />
                <Terms />
                <EnrollmentForm onRegisterSuccess={handleRegisterSuccess} />
            </main>
            <Footer />

            {showPaymentModal && registeredUser && (
                <PaymentModal
                    user={registeredUser}
                    onClose={() => setShowPaymentModal(false)}
                />
            )}
        </div>
    );
};

export default Home;
