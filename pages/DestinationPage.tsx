import React from 'react';
import { Destination } from '../types';
import { ChatBubbleLeftIcon } from '../components/icons';

interface DestinationPageProps {
    destination: Destination;
}

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-3xl md:text-4xl font-bold text-gray-800">{value}</p>
        <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{label}</p>
    </div>
);


const DestinationPage: React.FC<DestinationPageProps> = ({ destination }) => {
    return (
        <main className="bg-white">
            <header className="relative h-[70vh] min-h-[400px] max-h-[650px]">
                <img src={destination.heroImage} alt={`View of ${destination.name}`} className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-end items-center text-center text-white p-8">
                    <h1 className="text-5xl md:text-7xl font-light tracking-wider uppercase">{destination.name}</h1>
                    <p className="mt-2 text-lg font-semibold tracking-widest">{destination.tagline}</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Intro Section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-light tracking-wider uppercase">ABOUT THE TRIP</h2>
                        {destination.description.map((p, i) => <p key={i} className="mt-6 text-gray-600 leading-relaxed">{p}</p>)}
                    </div>
                    <div className="flex justify-around bg-gray-50 p-6 border border-gray-200/80">
                        <Stat value="10" label="Days" />
                        <Stat value="09" label="Nights" />
                        <Stat value="08" label="Cities" />
                    </div>
                </section>

                {/* Gallery */}
                <section className="py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {destination.gallery.map((imgSrc, index) => (
                            <div key={index} className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img src={imgSrc} alt={`Gallery image ${index + 1} of ${destination.name}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Itinerary */}
                <section className="py-16">
                    <h2 className="text-3xl md:text-4xl font-light tracking-wider uppercase text-center">ITINERARY</h2>
                    <div className="mt-12 relative border-l-2 border-dashed border-gray-300 ml-6">
                        {destination.itinerary.map((item, index) => (
                            <div key={index} className="mb-12 pl-12 relative">
                                <div className="absolute -left-5 -top-1 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                                    {item.day}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Highlights */}
                <section className="py-16">
                     <h2 className="text-3xl md:text-4xl font-light tracking-wider uppercase text-center">HIGHLIGHTS</h2>
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {destination.highlights.map((highlight, index) => (
                            <div key={index} className="text-center p-6 border border-gray-200/80">
                                <highlight.icon className="w-12 h-12 text-red-500 mx-auto" />
                                <h3 className="mt-4 font-bold tracking-widest text-sm">{highlight.title.toUpperCase()}</h3>
                                <p className="text-sm text-gray-500 mt-2">{highlight.description}</p>
                            </div>
                        ))}
                     </div>
                </section>

                {/* Testimonial */}
                <section className="py-16 text-center max-w-3xl mx-auto">
                    <ChatBubbleLeftIcon className="w-16 h-16 text-gray-300 mx-auto" />
                    <blockquote className="mt-6 text-xl md:text-2xl text-gray-700 italic leading-loose">
                        "An absolutely unforgettable journey! Safarnamaa Holidays curated the perfect blend of adventure and culture. The attention to detail was impeccable. Highly recommended for anyone looking to truly experience India."
                    </blockquote>
                    <cite className="mt-6 block font-bold text-gray-800 not-italic">
                        - Alex Thompson
                        <span className="block text-sm text-gray-500 font-normal">Travel Blogger</span>
                    </cite>
                </section>

                 {/* CTA */}
                <section className="py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-light tracking-wider uppercase">READY FOR YOUR ADVENTURE?</h2>
                    <p className="mt-4 text-gray-500 max-w-xl mx-auto">Spaces are limited for this exclusive trip. Book your spot now and get ready for the journey of a lifetime!</p>
                    <button 
                        onClick={() => window.open("https://wa.me/918779988156", "_blank")}
                        className="mt-8 bg-gray-800 text-white px-10 py-4 text-sm font-bold tracking-widest hover:bg-gray-700 transition-colors transform hover:scale-105">
                        BOOK NOW
                    </button>
                </section>

            </div>
        </main>
    );
};

export default DestinationPage;