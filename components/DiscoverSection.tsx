import React from 'react';
import { MapLocation } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Updated locations based on the Uttarakhand itinerary with location-specific images
const locations: MapLocation[] = [
    { 
        name: 'MUMBAI', 
        date: 'DAY 1 - DEC 26', 
        imageUrl: '/images/mumbai.jpg', 
        position: { top: '55%', left: '2%' },
        pinPosition: {},
        animationDelay: '0.5s'
    },
    { 
        name: 'DELHI', 
        date: 'DAY 2 - DEC 27', 
        imageUrl: '/images/delhi.jpg',
        position: { top: '28%', left: '22%' },
        pinPosition: {},
        animationDelay: '1.5s'
    },
    { 
        name: 'JIM CORBETT', 
        date: 'DAY 3 - DEC 28', 
        imageUrl: '/images/jim corbett.webp',
        position: { top: '55%', left: '38%' },
        pinPosition: {},
        animationDelay: '2.5s'
    },
    { 
        name: 'NAINITAL', 
        date: 'DAY 4 & 5 - DEC 29/30', 
        imageUrl: '/images/nainital.jpg',
        position: { top: '28%', left: '55%' },
        pinPosition: {},
        animationDelay: '3.5s'
    },
    { 
        name: 'RISHIKESH', 
        date: 'DAY 6 & 7 - DEC 31/JAN 1', 
        imageUrl: '/images/rishikesh.jpg',
        position: { top: '55%', left: '75%' },
        pinPosition: {},
        animationDelay: '4.5s'
    },
    { 
        name: 'MUSSOORIE', 
        date: 'DAY 8 - JAN 2', 
        imageUrl: '/images/uttarakhand/mussorie.jpg',
        position: { top: '28%', left: '88%' },
        pinPosition: {},
        animationDelay: '5.5s'
    },
];

// New path to accommodate 6 locations with precise alignment to the percentage positions
// ViewBox is 1200x350. 
// Y coordinates: Top 28% -> ~98. Top 55% -> ~192.
// X coordinates: 2% -> 24. 25% -> 300. 42% -> 504. 58% -> 696. 75% -> 900. 90% -> 1080.
const discoverPath = "M 24 192 C 160 192, 160 98, 300 98 S 400 192, 504 192 S 600 98, 696 98 S 800 192, 900 192 S 990 98, 1080 98";

const DiscoverSection: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();

    return (
        <section ref={sectionRef} className="relative py-24 my-16 overflow-hidden">
            {/* <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] lg:text-[12vw] font-bold text-gray-500/5 -z-10 select-none">
                Discover
            </h2> */}
            
            <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl md:text-4xl font-light tracking-wider">NEVER ENDING FOOTSTEPS</h3>
                <p className="mt-6 text-gray-500 leading-relaxed">
                    Follow the path of our Ultimate Uttarakhand adventure, a 10-day journey through majestic mountains, serene lakes, and spiritual havens. From the bustling streets of Delhi to the tranquil foothills of the Himalayas, this is a trip of a lifetime.
                </p>
            </div>

            <div className="relative mt-16 h-80 w-full">
                <svg className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 350">
                    <defs>
                        <mask id="discover-mask">
                            <path
                                d={discoverPath}
                                stroke="white"
                                strokeWidth="3"
                                fill="transparent"
                                strokeLinecap="round"
                                className="path-to-draw"
                                vectorEffect="non-scaling-stroke"
                            />
                        </mask>
                    </defs>
                    <path
                        d={discoverPath}
                        stroke="#d1d5db"
                        strokeWidth="2"
                        strokeDasharray="1 12"
                        strokeLinecap="round"
                        mask="url(#discover-mask)"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {locations.map((loc) => (
                  <div key={loc.name} className="absolute location-item" style={{ ...loc.position, animationDelay: loc.animationDelay }}>
                      <div className="flex items-center space-x-3">
                          <img src={loc.imageUrl} alt={`Iconic view of ${loc.name}`} className="w-16 h-16 object-cover rounded-full shadow-md"/>
                          <div>
                              <p className="font-bold text-sm tracking-widest">{loc.name}</p>
                              <p className="text-xs text-gray-500">{loc.date}</p>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
        </section>
    );
}

export default DiscoverSection;