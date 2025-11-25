import React, { useState, useEffect } from 'react';
import { Slide } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const slides: Slide[] = [
    {
        imageUrl: '/images/s1.avif',
        caption: 'HOW TO SPEND ONE WEEK ON THE COAST?',
    },
    {
        imageUrl: '/images/thejourney.jpg',
        caption: 'JOURNEY THROUGH THE MYSTICAL LAND',
    },
        {
        imageUrl: '/images/j1.avif',
        caption: 'GET A LOOK OF THE DESERT LIFE IN RAJASTHAN',
    },
{
        imageUrl: '/images/u4.avif',
        caption: 'A JOURNEY THROUGH THE MIGHTY HIMALAYAS',
    },
     {
        imageUrl: '/images/p1.avif',
        caption: 'DISCOVER THE ROYAL HERITAGE OF RAJASTHAN',
    },
];

const ImageSliderSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(sliderInterval);
    }, [currentIndex]);

    return (
        <section className="relative w-full h-[90vh] min-h-[500px] max-h-[950px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 w-full h-full transition-opacity duration-1000"
                    style={{ opacity: index === currentIndex ? 1 : 0 }}
                >
                    <img src={slide.imageUrl} alt={slide.caption} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            ))}

            <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
                <div key={currentIndex} className="animate-fadeInUp">
                    <h2 className="text-4xl md:text-6xl font-light tracking-wider uppercase">
                        {slides[currentIndex].caption}
                    </h2>
                    {/* Learn More button removed as requested */}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors"
                aria-label="Next slide"
            >
                <ChevronRightIcon className="w-6 h-6 text-gray-800" />
            </button>
        </section>
    );
};

export default ImageSliderSection;