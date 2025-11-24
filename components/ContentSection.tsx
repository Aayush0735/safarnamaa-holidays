import React from 'react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './icons';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ContentSection: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden bg-white animate-on-scroll animate-fadeInUp-scroll">
             {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-block border-b-2 border-orange-400 mb-6 pb-2">
                             <span className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase">Discover Real India</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-slate-800 leading-tight mb-8">
                            JOURNEYS THAT <br/> <span className="font-script text-orange-500 lowercase text-6xl">inspire</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg font-light mb-6">
                            Embark on a journey that transcends boundaries. At <span className="font-semibold text-slate-800">Safarnamaa Holidays</span>, we don't just plan trips; we curate immersive experiences. Whether you crave the adrenaline of white-water rafting in Rishikesh, the spiritual calm of Varanasi, or the serenity of Kerala's backwaters, our itineraries are crafted to connect you with the authentic soul of India.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-sm mb-10">
                            Leave the logistics to us. With expert guides, premium accommodations, and seamless travel arrangements, your only job is to soak in the beauty, culture, and flavors of this incredible land.
                            <a href="#" className="text-orange-500 hover:text-orange-600 ml-2 font-medium hover:underline transition-colors">Start planning your custom itinerary today.</a>
                        </p>
                        
                        <div className="flex items-center space-x-4 border-t border-gray-100 pt-8">
                            <span className="text-xs font-bold tracking-widest text-gray-400 mr-4">SHARE THE VIBE</span>
                            <a 
                                href="https://www.instagram.com/safarnamaaholidays/#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-pink-600 text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <InstagramIcon className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <FacebookIcon className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <YoutubeIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Image Collage */}
                    <div className="relative h-[500px] w-full order-1 lg:order-2">
                        {/* Main Image */}
                        <div className="absolute top-0 right-0 w-[85%] h-[80%] z-10 transform transition-transform hover:scale-[1.01] duration-700 ease-out">
                             <img 
                                src="https://picsum.photos/seed/travel-mountains-himalaya-snow/600/700" 
                                alt="Himalayan Mountains Landscape" 
                                className="w-full h-full object-cover rounded-sm shadow-2xl" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                        </div>
                        
                        {/* Secondary Image */}
                        <div className="absolute bottom-0 left-0 w-[55%] h-[55%] z-20 transform translate-x-2 -translate-y-6 border-8 border-white shadow-xl transition-transform hover:scale-[1.03] duration-500">
                            <img 
                                src="https://picsum.photos/seed/indian-culture-dance/400/500" 
                                alt="Cultural Dance" 
                                className="w-full h-full object-cover" 
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-[40%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-sm max-w-[220px] text-center -rotate-2 border border-gray-100 hidden sm:block">
                            <p className="font-script text-2xl text-slate-800 leading-none mb-2">"Collect moments, not things."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;