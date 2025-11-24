import React from 'react';
import { Photo } from '../types';
import PhotoCard from './PhotoCard';
import { PaperPlaneIcon, BridgeIcon, PinIcon, AirplaneIcon } from './icons';

const photos: Photo[] = [
    { id: 1, src: 'https://picsum.photos/seed/delhi/200/280', alt: 'India Gate', location: 'New Delhi', description: 'A war memorial', className: 'top-[8%] left-[5%] w-40 -rotate-[10deg]', animationDelay: '1.0s' },
    { id: 2, src: 'https://picsum.photos/seed/venice/250/180', alt: 'Varanasi Ghats', location: 'Varanasi', description: 'Ganges river cruise', className: 'top-[12%] left-[25%] w-48 rotate-[5deg]', animationDelay: '1.2s' },
    { id: 3, src: 'https://picsum.photos/seed/paris/200/300', alt: 'Taj Mahal', location: 'Agra', description: 'Symbol of love', className: 'top-[10%] right-[8%] w-44 rotate-[8deg]', animationDelay: '1.4s' },
    { id: 4, src: 'https://picsum.photos/seed/brazil/200/150', alt: 'Kerala Backwaters', location: 'Kerala', description: 'Houseboat journey', className: 'top-[55%] right-[15%] w-48 -rotate-[7deg]', animationDelay: '1.6s' },
    { id: 5, src: 'https://picsum.photos/seed/beach/280/200', alt: 'Goa Beach', location: 'Goa', description: 'Sun, sand and sea', className: 'bottom-[8%] left-[20%] w-56 rotate-[6deg]', animationDelay: '1.8s' },
    { id: 6, src: 'https://picsum.photos/seed/woman-traveler/200/280', alt: 'Woman on a road', location: 'The Journey', description: 'Meet the photographer', className: 'top-[25%] left-[-2%] w-36 rotate-[-20deg]', animationDelay: '1.7s' },
    { id: 7, src: 'https://picsum.photos/seed/beach-fly/300/200', alt: 'Beach from above', location: 'Coastal Dreams', description: 'A bird\'s eye view', className: 'bottom-[12%] right-[-3%] w-48 rotate-[15deg]', animationDelay: '1.9s' },
];

// Define the SVG path for the airplane
const flightPath = "M 120 120 C 250 80, 350 150, 480 140 S 700 100, 880 150 C 950 350, 700 450, 400 500 S 150 450, 250 350";

interface HeroProps {
    onNavigate: (nav: { page: 'home' | 'travel' | 'destination' | 'contact' | 'blog'; slug?: string }) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24">
            {/* Background elements */}
            {/* <h1 className="absolute text-[20vw] font-bold text-gray-500/10 -z-10 select-none opacity-80" style={{ top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Discover
            </h1> */}
            <BridgeIcon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] text-gray-500/20 -z-10" />

            {/* Foreground elements: The collage */}
            <div className="relative w-full h-[500px] sm:h-[600px]">
                {/* Animated Airplane and Path */}
                <div className="absolute inset-0 z-0">
                    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <mask id="hero-path-mask">
                                <path
                                    d={flightPath}
                                    stroke="white"
                                    strokeWidth="3"
                                    fill="transparent"
                                    strokeLinecap="round"
                                    className="hero-path-drawer"
                                />
                            </mask>
                        </defs>
                        <path
                            d={flightPath}
                            stroke="#EF4444"
                            strokeWidth="2"
                            strokeDasharray="4 8"
                            strokeLinecap="round"
                            mask="url(#hero-path-mask)"
                        />
                    </svg>
                    <PaperPlaneIcon
                        className="absolute w-8 h-8 text-red-500 hero-plane"
                        style={{
                            offsetPath: `path('${flightPath}')`,
                        }}
                    />
                </div>
                
                {/* Dropping Photos */}
                {photos.map(p => <PhotoCard key={p.id} photo={p} />)}

                {/* Central Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 text-center z-10">
                    <h2 className="font-script text-6xl sm:text-7xl md:text-8xl text-gray-800 animate-fadeInUp" style={{ animationDelay: '2.0s' }}>
                        Safarnamaa Holidays
                    </h2>
                    <p className="max-w-md animate-fadeInUp text-sm sm:text-base" style={{ animationDelay: '2.2s' }}>
                        Your Story of India Begins Here.
                    </p>
                    <button 
                        onClick={() => onNavigate({ page: 'travel' })}
                        className="bg-gray-800 text-white px-8 py-3 rounded-sm text-sm font-bold tracking-wider hover:bg-gray-700 transition-colors animate-fadeInUp" 
                        style={{ animationDelay: '2.4s' }}
                    >
                        Start Your Journey
                    </button>
                </div>
                
                {/* Decorative elements */}
                <PinIcon className="absolute w-8 h-8 text-red-500/70 top-[40%] right-[30%] animate-fadeInUp" style={{animationDelay: '2.5s'}}/>
                 <AirplaneIcon 
                    className="absolute w-8 h-8 text-blue-500/70 bottom-[20%] left-[10%] animate-float" 
                    style={{ animationDelay: '2.6s', transform: 'rotate(-45deg)' }}
                />

                <div className="absolute bottom-10 left-10 animate-fadeInUp" style={{ animationDelay: '2.8s' }}>
                    <p className="font-script text-2xl -rotate-6">Let your Journey begin...</p>
                </div>

                <div className="absolute top-10 right-10 animate-fadeInUp" style={{ animationDelay: '2.9s' }}>
                    <p className="font-script text-2xl rotate-6">Unforgettable Journeys...</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;