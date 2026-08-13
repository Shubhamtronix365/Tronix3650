import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentModal = ({ user, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [livePrice, setLivePrice] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentPrice = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                const res = await axios.get(`${apiUrl}/api/seats/available`);
                if (res.data && res.data.price_info) {
                    setLivePrice(res.data.price_info);
                }
            } catch (err) {
                console.error("Failed to fetch live price from server:", err);
            }
        };
        fetchCurrentPrice();
    }, []);

    const isFreeCoupon = user.amount === 0;

    // Determine pricing tier (Early Bird vs Standard Tier)
    let isEarlyBird = false;
    let basePrice = 14999;
    let gstAmount = 2700;

    if (isFreeCoupon) {
        basePrice = 0;
        gstAmount = 0;
        isEarlyBird = false;
    } else if (livePrice) {
        basePrice = livePrice.base_price;
        gstAmount = livePrice.gst;
        isEarlyBird = livePrice.is_early_bird;
    } else if (user.amount === 11799 || user.amount === 9999 || user.amount === 6000) {
        basePrice = 9999;
        gstAmount = 1800;
        isEarlyBird = true;
    } else {
        basePrice = 14999;
        gstAmount = 2700;
        isEarlyBird = false;
    }

    // Total Amount is ALWAYS exactly Base Price + GST Amount
    const totalAmount = basePrice + gstAmount;

    const handlePayment = async () => {
        setLoading(true);
        setError('');
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

            // Special handling for Coupon (Amount 0)
            if (isFreeCoupon) {
                setTimeout(() => {
                    navigate('/success');
                }, 800);
                return;
            }

            // 1. Get PayU Details from Backend
            const orderResponse = await axios.post(`${apiUrl}/api/payment/create`, {
                registration_id: user.id,
                amount: totalAmount
            });

            const { action, ...formData } = orderResponse.data;

            // 2. Create Form and Submit
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = action;
            form.style.display = 'none';

            for (const key in formData) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = formData[key];
                form.appendChild(input);
            }

            document.body.appendChild(form);
            form.submit();

        } catch (err) {
            console.error(err);
            setError('Failed to initiate payment. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4 py-6 overflow-y-auto">
            <div className="glass-panel border-2 border-primary-fixed/40 p-6 sm:p-8 rounded-xl max-w-md w-full my-auto shadow-[0_0_40px_rgba(0,242,255,0.25)] relative text-on-surface">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-on-surface-variant hover:text-white text-xl font-bold transition-colors p-1"
                >
                    ✕
                </button>

                <div className="text-center mb-6">
                    <span className="material-symbols-outlined text-primary-fixed text-5xl mb-2 inline-block">
                        verified
                    </span>
                    <h3 className="font-headline-lg text-2xl font-bold text-on-surface uppercase tracking-wide">
                        Complete Registration
                    </h3>
                </div>

                <div className="space-y-3 mb-8 bg-surface-dim/70 p-5 rounded-xl border border-outline-variant/40 font-body-md text-sm">
                    <div className="flex justify-between items-center text-on-surface-variant">
                        <span>Student Name:</span>
                        <span className="font-semibold text-on-surface">{user.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                        <span>Email Address:</span>
                        <span className="font-semibold text-on-surface">{user.email}</span>
                    </div>

                    {!isFreeCoupon ? (
                        <>
                            <div className="border-t border-outline-variant/30 pt-3 mt-3">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="font-label-caps text-xs text-primary-fixed uppercase tracking-wider font-bold">
                                        Real-Time Pricing Breakdown
                                    </p>
                                    {isEarlyBird ? (
                                        <span className="bg-[#FF9933]/20 border border-[#FF9933]/50 text-[#FF9933] px-2 py-0.5 rounded text-[10px] font-bold">
                                            🇮🇳 Independence Offer
                                        </span>
                                    ) : (
                                        <span className="bg-primary-fixed/10 border border-primary-fixed/30 text-primary-fixed px-2 py-0.5 rounded text-[10px] font-bold">
                                            Standard Tier
                                        </span>
                                    )}
                                </div>

                                <div className="flex justify-between items-center text-on-surface-variant py-1">
                                    <span>Course Base Fee:</span>
                                    <span className="font-mono text-on-surface font-semibold">₹{basePrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-on-surface-variant py-1">
                                    <span>GST (18%):</span>
                                    <span className="font-mono text-on-surface font-semibold">+₹{gstAmount.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-on-surface border-t-2 border-primary-fixed/40 pt-3 mt-2">
                                <span className="font-bold text-base">Total Amount Payable:</span>
                                <span className="font-headline-xl text-primary-fixed text-2xl font-extrabold">
                                    ₹{totalAmount.toLocaleString()}
                                </span>
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-between items-center text-on-surface border-t border-outline-variant/20 pt-3">
                            <span className="font-bold text-on-surface">Total Amount:</span>
                            <span className="font-headline-xl text-primary-fixed text-2xl font-bold">
                                FREE (Coupon Applied)
                            </span>
                        </div>
                    )}
                </div>

                {error && (
                    <div className="p-3 rounded bg-error/10 border border-error/30 text-error text-sm text-center font-medium mb-4">
                        {error}
                    </div>
                )}

                <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full py-4 bg-primary-fixed text-on-primary-fixed font-headline-lg text-[16px] font-bold rounded-md uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] hover:bg-primary-fixed-dim disabled:opacity-50"
                >
                    {loading ? 'REDIRECTING TO PAYU...' : (isFreeCoupon ? 'COMPLETE REGISTRATION' : 'PAY NOW VIA PAYU')}
                </button>
            </div>
        </div>
    );
};

export default PaymentModal;
