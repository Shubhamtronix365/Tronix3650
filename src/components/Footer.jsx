import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full relative bottom-0 bg-surface-dim border-t border-outline-variant/10 flex flex-col items-center justify-center py-6 md:py-8 px-margin-mobile md:px-margin-desktop z-10">
            <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-start gap-2.5">
                    <div className="flex items-center gap-3">
                        <img
                            className="h-9 w-9 object-contain rounded-full border border-primary-fixed/30"
                            src="https://lh3.googleusercontent.com/aida/AP1WRLurHHJH0EOEkq47vmtHA_-Z6kTkX-yXJXaLi7gN5VPgPjOinmh-19p8cDKQnoAJOKIxYj2yU9rpF_GPiLsZ5OIjkUkdypowv4ztwhjbtM4L4rlY4913XWw1inRmjIzN1uOkwkfh36B3Zl8fZdP1REC2XcfpL9yuqoW8b-ezFeNmBwtZKdQ3MVLHtxCu1qa19UvAm1AAJzflwfr5Ziw2S8kY4lR-nl-W8NGdIN4Uoc7O80VXYamU_mKbs2g"
                            alt="Tronix365 circular emblem logo."
                            onError={(e) => { e.target.src = '/Tronix3650final_circular.png'; }}
                        />
                        <span className="font-headline-lg text-2xl font-extrabold text-on-surface tracking-tight">Tronix365</span>
                    </div>
                    <p className="font-jakarta text-sm md:text-base text-on-surface-variant max-w-xs leading-snug font-medium">
                        Transforming Innovative Ideas Into Reality<br />Since 2017
                    </p>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h4 className="font-jakarta text-base md:text-lg font-bold text-on-surface border-b border-outline-variant/30 pb-1 inline-block w-max">Contact Us</h4>
                    <div className="flex flex-col gap-1.5 font-jakarta text-sm md:text-base text-on-surface-variant font-medium">
                        <p><span className="text-primary-fixed font-semibold">Email:</span> admin@tronix365.in</p>
                        <p><span className="text-primary-fixed font-semibold">Phone:</span> +91 88301 53805</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h4 className="font-jakarta text-base md:text-lg font-bold text-on-surface border-b border-outline-variant/30 pb-1 inline-block w-max">Visit Us</h4>
                    <div className="flex flex-col gap-1.5 font-jakarta text-sm md:text-base text-on-surface-variant font-medium">
                        <p className="leading-snug">Tronix365, Near Datta Mandir,<br />Sinhgad College Campus, Vadgaon Budruk,<br />Pune, Maharashtra 411041</p>
                        <a className="text-secondary hover:text-secondary-fixed transition-colors text-sm font-semibold flex items-center gap-1.5 mt-1 font-jakarta" href="https://maps.app.goo.gl/V65P7a6YWds7MqNN6" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-base">map</span> View on Google Maps
                        </a>
                    </div>
                    <div className="mt-2 border-t border-outline-variant/20 pt-2">
                        <p className="font-jakarta text-xs text-outline uppercase tracking-wider font-medium">Founder &amp; CEO</p>
                        <p className="font-jakarta text-base text-primary-fixed font-bold">Mangesh Sanjay Adsule</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1280px] mx-auto mt-6 pt-3 border-t border-outline-variant/10 text-center">
                <p className="font-jakarta text-xs md:text-sm text-on-surface-variant font-medium opacity-90">
                    © 2026 Tronix365 Engineering Labs. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
