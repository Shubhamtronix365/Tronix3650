import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full relative bottom-0 bg-surface-dim border-t border-outline-variant/10 flex flex-col items-center justify-center py-section-gap px-margin-mobile md:px-margin-desktop z-10">
            <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3">
                        <img
                            className="h-8 w-8 object-contain rounded-full"
                            src="https://lh3.googleusercontent.com/aida/AP1WRLurHHJH0EOEkq47vmtHA_-Z6kTkX-yXJXaLi7gN5VPgPjOinmh-19p8cDKQnoAJOKIxYj2yU9rpF_GPiLsZ5OIjkUkdypowv4ztwhjbtM4L4rlY4913XWw1inRmjIzN1uOkwkfh36B3Zl8fZdP1REC2XcfpL9yuqoW8b-ezFeNmBwtZKdQ3MVLHtxCu1qa19UvAm1AAJzflwfr5Ziw2S8kY4lR-nl-W8NGdIN4Uoc7O80VXYamU_mKbs2g"
                            alt="Tronix365 circular emblem logo."
                            onError={(e) => { e.target.src = '/Tronix3650final_circular.png'; }}
                        />
                        <span className="font-headline-lg text-[24px] font-bold text-on-surface tracking-tighter">Tronix365</span>
                    </div>
                    <p className="font-code-snippet text-code-snippet text-outline max-w-xs">
                        Transforming Innovative Ideas Into Reality<br />Since 2017
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest border-b border-outline-variant/30 pb-2 inline-block w-max">Contact Us</h4>
                    <div className="flex flex-col gap-2 font-code-snippet text-code-snippet text-outline">
                        <p><span className="text-primary-fixed-dim">Email:</span> admin@tronix365.in</p>
                        <p><span className="text-primary-fixed-dim">Phone:</span> +91 88301 53805</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest border-b border-outline-variant/30 pb-2 inline-block w-max">Visit Us</h4>
                    <div className="flex flex-col gap-2 font-code-snippet text-code-snippet text-outline">
                        <p>Tronix365, Near Datta Mandir,<br />Sinhgad College Campus, Vadgaon Budruk,<br />Pune, Maharashtra 411041</p>
                        <a className="text-secondary hover:text-secondary-fixed transition-colors text-[12px] flex items-center gap-1 mt-2" href="https://maps.app.goo.gl/V65P7a6YWds7MqNN6" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-[14px]">map</span> View on Google Maps
                        </a>
                    </div>
                    <div className="mt-4 border-t border-outline-variant/20 pt-4">
                        <p className="font-code-snippet text-[10px] text-outline uppercase">Founder &amp; CEO</p>
                        <p className="font-body-md text-[14px] text-primary-fixed font-bold">Mangesh Sanjay Adsule</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1280px] mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center">
                <p className="font-code-snippet text-[12px] text-outline opacity-80 hover:opacity-100 transition-opacity">
                    © 2026-2027 TRONIX365 ENGINEERING LABS. ALL SYSTEMS OPERATIONAL.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
