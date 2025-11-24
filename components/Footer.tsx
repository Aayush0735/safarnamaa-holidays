import React, { useState } from 'react';
import { InstagramIcon, TwitterIcon, PinterestIcon, YoutubeIcon, FacebookIcon, SafarnamaaLogoIcon, WhatsappIcon } from './icons';

const SocialLink: React.FC<{ icon: React.ReactNode; name: string; href?: string }> = ({ icon, name, href = "#" }) => (
    <a href={href} target={href !== "#" ? "_blank" : undefined} rel={href !== "#" ? "noopener noreferrer" : undefined} className="flex flex-col items-center text-gray-600 hover:text-red-500 transition-colors group">
        <div className="w-8 h-8">{icon}</div>
        <span className="mt-2 text-xs tracking-wider">{name}</span>
    </a>
);

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic email validation pattern
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!email || !emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Successfully subscribed to the newsletter.");
        setEmail('');
    };

    return (
        <footer className="relative bg-[#FDFBF8] border-t border-gray-200/80 pt-20 pb-8">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Column 1: Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center space-x-2">
                           <SafarnamaaLogoIcon className="h-12 w-auto" />
                            <span className="font-script">
                                <span style={{color: '#1E40AF'}} className="text-3xl block">Safarnamaa</span>
                                <span style={{color: '#EF4444'}} className="text-3xl block">Holidays</span>
                            </span>
                        </div>
                        <p className="mt-4 text-gray-500 max-w-xs text-center md:text-left text-sm">
                            Your Story of India Begins Here. Crafting unforgettable travel experiences across India.
                        </p>
                    </div>

                    {/* Column 2: Follow us */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400">Follow us</h3>
                        <div className="mt-6 grid grid-cols-3 gap-x-8 gap-y-6 w-full max-w-xs">
                            <SocialLink icon={<InstagramIcon />} name="INSTAGRAM" href="https://www.instagram.com/safarnamaaholidays/#" />
                            <SocialLink icon={<FacebookIcon />} name="FACEBOOK" />
                            <SocialLink icon={<TwitterIcon />} name="TWITTER" />
                            <SocialLink icon={<PinterestIcon />} name="PINTEREST" />
                            <SocialLink icon={<YoutubeIcon />} name="YOUTUBE" />
                            <SocialLink icon={<WhatsappIcon />} name="WHATSAPP" href="https://wa.me/918779988156" />
                        </div>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400">Newsletter</h3>
                        <form className="mt-6 w-full max-w-xs" onSubmit={handleSubscribe} noValidate>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 bg-white border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="w-full mt-2 px-4 py-3 bg-gray-800 text-white text-sm font-bold tracking-wider hover:bg-gray-700 transition-colors"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-200/80 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
                    <p>&copy; {new Date().getFullYear()} Safarnamaa Holidays, All Rights Reserved</p>
                    {/* <nav className="flex space-x-6">
                        <a href="#" className="hover:text-gray-800">LIFESTYLE</a>
                        <a href="#" className="hover:text-gray-800">MOMENTS</a>
                        <a href="#" className="hover:text-gray-800">ADVENTURE</a>
                        <a href="#" className="hover:text-gray-800">EXPLORE</a>
                        <a href="#" className="hover:text-gray-800">VACATION</a>
                    </nav> */}
                </div>
            </div>
            
            <button
                onClick={scrollToTop}
                className="absolute -top-5 right-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group"
                aria-label="Scroll to top"
            >
                <span className="font-script text-sm transition-transform group-hover:-translate-y-1">Get to the Top</span>
            </button>
        </footer>
    );
};

export default Footer;