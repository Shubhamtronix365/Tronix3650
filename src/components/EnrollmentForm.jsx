import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SoldOutModal from './SoldOutModal';

const EnrollmentForm = ({ onRegisterSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        confirmEmail: '',
        phone: '',
        college: '',
        branch: '',
        year: '',
        message: '',
        couponCode: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isSoldOut, setIsSoldOut] = useState(false);

    useEffect(() => {
        const checkSeats = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                const response = await axios.get(`${apiUrl}/api/seats/available`);
                if (response.data.available_seats <= 0) {
                    setIsSoldOut(true);
                }
            } catch (err) {
                console.error("Failed to fetch seat status", err);
            }
        };
        checkSeats();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.email !== formData.confirmEmail) {
            setError("Emails do not match!");
            setLoading(false);
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                college: formData.college,
                branch: formData.branch,
                year: formData.year,
                message: formData.message,
                coupon_code: formData.couponCode || null
            };
            const response = await axios.post(`${apiUrl}/api/register`, payload);
            onRegisterSuccess(response.data);
        } catch (err) {
            setError(err.response?.data?.detail || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-section-gap bg-surface-container-low border-t border-outline-variant/10 relative z-10" id="enroll">
            <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex justify-center">
                <div className="glass-panel p-8 rounded-xl border border-outline-variant/50 w-full max-w-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block font-jakarta font-medium text-on-surface mb-2 text-sm" htmlFor="fullName">Full Name</label>
                            <input
                                className="w-full bg-surface-dim border border-outline-variant rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-primary-fixed focus:border-primary-fixed"
                                id="fullName"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                type="text"
                            />
                        </div>

                        <div>
                            <label className="block font-jakarta font-medium text-on-surface mb-2 text-sm" htmlFor="email">Email Address</label>
                            <input
                                className="w-full bg-surface-dim border border-outline-variant rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-primary-fixed focus:border-primary-fixed"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                                type="email"
                            />
                        </div>

                        <div>
                            <label className="block font-jakarta font-medium text-on-surface mb-2 text-sm" htmlFor="confirmEmail">Confirm Email Address</label>
                            <input
                                className="w-full bg-surface-dim border border-outline-variant rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-primary-fixed focus:border-primary-fixed"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={formData.confirmEmail}
                                onChange={handleChange}
                                placeholder="Re-enter your email"
                                required
                                onPaste={(e) => e.preventDefault()}
                                type="email"
                            />
                        </div>

                        <div>
                            <label className="block font-jakarta font-medium text-on-surface mb-2 text-sm" htmlFor="phone">Phone Number</label>
                            <input
                                className="w-full bg-surface-dim border border-outline-variant rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-primary-fixed focus:border-primary-fixed"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your mobile number"
                                required
                                type="tel"
                            />
                        </div>

                        <div>
                            <label className="block font-jakarta font-medium text-on-surface mb-2 text-sm" htmlFor="collegeName">College Name</label>
                            <input
                                className="w-full bg-surface-dim border border-outline-variant rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-primary-fixed focus:border-primary-fixed"
                                id="collegeName"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                placeholder="Your College Name"
                                required
                                type="text"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-jakarta font-medium text-on-surface mb-2 text-sm" htmlFor="branch">Branch</label>
                                <input
                                    className="w-full bg-surface-dim border border-outline-variant rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-primary-fixed focus:border-primary-fixed"
                                    id="branch"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    placeholder="e.g. ECE/CSE"
                                    required
                                    type="text"
                                />
                            </div>

                            <div>
                                <label className="block font-jakarta font-medium text-on-surface mb-2 text-sm" htmlFor="yearOfStudy">Year of Study</label>
                                <select
                                    className="w-full bg-surface-dim border border-outline-variant rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-primary-fixed focus:border-primary-fixed"
                                    id="yearOfStudy"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Year</option>
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    <option value="3rd Year">3rd Year</option>
                                    <option value="4th Year">4th Year</option>
                                    <option value="Graduate">Graduate</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block font-jakarta font-medium text-secondary mb-2 text-sm" htmlFor="query">Your College / Query (Optional)</label>
                            <textarea
                                className="w-full bg-surface-dim border border-outline-variant rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-primary-fixed focus:border-primary-fixed"
                                id="query"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your background or any questions you have."
                                rows={3}
                            />
                        </div>

                        <div>
                            <label className="block font-jakarta font-medium text-secondary mb-2 text-sm" htmlFor="couponCode">Have a Coupon Code?</label>
                            <input
                                className="w-full bg-surface-dim border border-secondary/50 rounded-md px-4 py-3 text-on-surface font-jakarta font-medium tech-input transition-colors focus:ring-secondary focus:border-secondary"
                                id="couponCode"
                                name="couponCode"
                                value={formData.couponCode}
                                onChange={handleChange}
                                placeholder="Enter Code (e.g. TRONIX-XY92)"
                                type="text"
                            />
                        </div>

                        {error && (
                            <div className="p-3 rounded bg-error/10 border border-error/30 text-error text-sm text-center font-medium font-jakarta">
                                {error}
                            </div>
                        )}

                        <button
                            className="w-full text-center bg-primary-fixed text-on-primary-fixed font-jakarta text-[17px] font-bold px-8 py-4 rounded-md hover:bg-primary-fixed-dim transition-all shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] mt-4 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Processing Enrollment...' : 'Submit Enrollment Request'}
                        </button>
                    </form>
                </div>
            </div>
            {isSoldOut && <SoldOutModal />}
        </section>
    );
};

export default EnrollmentForm;
