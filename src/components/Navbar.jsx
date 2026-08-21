import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(0,242,255,0.1)] transition-all duration-300">
            <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-[1280px] mx-auto">
                {/* Brand */}
                <div className="flex items-center gap-4 cursor-pointer" onClick={scrollToTop}>
                    <img
                        className="h-10 w-10 object-contain rounded-full border border-primary-fixed/30"
                        src="https://lh3.googleusercontent.com/aida/AP1WRLurHHJH0EOEkq47vmtHA_-Z6kTkX-yXJXaLi7gN5VPgPjOinmh-19p8cDKQnoAJOKIxYj2yU9rpF_GPiLsZ5OIjkUkdypowv4ztwhjbtM4L4rlY4913XWw1inRmjIzN1uOkwkfh36B3Zl8fZdP1REC2XcfpL9yuqoW8b-ezFeNmBwtZKdQ3MVLHtxCu1qa19UvAm1AAJzflwfr5Ziw2S8kY4lR-nl-W8NGdIN4Uoc7O80VXYamU_mKbs2g"
                        alt="Tronix365 Logo"
                        onError={(e) => { e.target.src = '/Tronix3650final_circular.png'; }}
                    />
                    <span className="font-headline-lg text-headline-lg font-bold text-primary-fixed tracking-tighter">TRONIX365</span>
                </div>

                {/* Links (Desktop) */}
                <div className="hidden md:flex gap-8 items-center">
                    <a className="font-jakarta text-[15px] font-medium text-on-surface-variant hover:text-white transition-colors duration-200" href="#about">About Us</a>
                    <a className="font-jakarta text-[15px] font-medium text-on-surface-variant hover:text-white transition-colors duration-200" href="#syllabus">Syllabus</a>
                    <a className="font-jakarta text-[15px] font-medium text-on-surface-variant hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
                    <a className="font-jakarta text-[15px] font-semibold text-primary-fixed hover:text-white transition-colors duration-200" href="#enroll">Enroll</a>
                </div>

                {/* Trailing Actions */}
                <div className="flex items-center gap-4">
                    <a
                        className="hidden md:flex items-center justify-center bg-primary-container text-on-primary font-jakarta text-[15px] font-semibold px-6 py-2.5 rounded-full hover:bg-primary-fixed-dim transition-all shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                        href="#enroll"
                    >
                        Enroll Now
                    </a>
                    <button
                        className="md:hidden text-primary-fixed focus:outline-none p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background/95 border-b border-outline-variant/30 px-6 py-4 flex flex-col gap-4">
                    <a className="font-jakarta text-base font-medium text-on-surface-variant hover:text-white py-2" href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    <a className="font-jakarta text-base font-medium text-on-surface-variant hover:text-white py-2" href="#syllabus" onClick={() => setIsMobileMenuOpen(false)}>Syllabus</a>
                    <a className="font-jakarta text-base font-medium text-on-surface-variant hover:text-white py-2" href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                    <a className="font-jakarta text-base font-semibold text-primary-fixed py-2" href="#enroll" onClick={() => setIsMobileMenuOpen(false)}>Enroll Now</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
