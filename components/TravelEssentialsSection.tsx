import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const travelEssentials = [
    { name: 'Trekking Backpack', src: 'https://picsum.photos/seed/travel-backpack-mountains/400/500' },
    { name: 'Digital Camera', src: 'https://picsum.photos/seed/camera-photography-lens/400/500' },
    { name: 'UV Sunglasses', src: 'https://picsum.photos/seed/sunglasses-fashion/400/500' },
    { name: 'Hiking Boots', src: 'https://picsum.photos/seed/hiking-boots-shoes/400/500' },
    { name: 'Travel Journal', src: 'https://picsum.photos/seed/notebook-journal-pen/400/500' },
];

const TravelEssentialsSection: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();

    return (
        <section ref={sectionRef} className="py-24 text-center bg-white animate-on-scroll animate-fadeInUp-scroll">
            <div className="max-w-7xl mx-auto px-4">
                <div className="inline-block border-b-2 border-orange-400 mb-4 pb-2">
                     <span className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase">Must Haves</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wider text-slate-800 uppercase">Travel Essentials</h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto mb-16">
                    Curated gear to ensure your Safarnamaa journey is as comfortable as it is unforgettable.
                </p>
                
                <div className="flex flex-wrap justify-center gap-10">
                    {travelEssentials.map((item) => (
                        <div key={item.name} className="group flex flex-col items-center">
                            <div className="relative w-48 h-60 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <img 
                                    src={item.src} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <h3 className="mt-6 font-script text-2xl text-slate-700 group-hover:text-orange-500 transition-colors duration-300">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TravelEssentialsSection;