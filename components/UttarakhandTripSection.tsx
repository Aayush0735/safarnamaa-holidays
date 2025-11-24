import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { TripHighlight, CarouselItem } from '../types';
import { SafariIcon, BonfireIcon, RaftingIcon, MusicIcon } from './icons';

const highlights: TripHighlight[] = [
    { icon: SafariIcon, text: 'Jungle Safari' },
    { icon: BonfireIcon, text: 'Lakeside Bonfire' },
    { icon: RaftingIcon, text: 'River Rafting' },
    { icon: MusicIcon, text: 'New Year\'s Eve DJ Party' },
];

const locations = ['MUMBAI', 'DELHI', 'JIM CORBETT', 'NAINITAL', 'BHIMTAL', 'RISHIKESH', 'MUSSOORIE', 'DELHI', 'MUMBAI'];

const carouselData: CarouselItem[] = [
    { 
        src: './images/jim corbett.webp',
        title: 'Jim Corbett Chill',
        description: 'Morning safari, relaxing at the resort with pool time, and an exciting Neon DJ Night. The wild meets the vibe.',
    },
    { 
        src: './images/nainital.jpg',
        title: 'Nainital Exploration',
        description: 'Scenic drives, lakeside relaxation with karaoke and a bonfire. The lakes call and the hills echo your playlist.',
    },
    { 
        src: './images/ganga aarti.jpg',
        title: 'Ganga Aarti',
        description: 'Witness the mesmerizing Ganga Aarti at Triveni Ghat. Spiritual vibes, devotional chants, and floating lamps create magic.',
    },
    { 
        src: './images/rishikesh.jpg',
        title: 'Rishikesh Adventure',
        description: 'Experience adrenaline with river rafting, bungee jumping, and cafe hopping. Thrills, chills and café refills.',
    },
    { 
        src: './images/mussorie.jpg',
        title: 'Mussoorie Magic',
        description: 'Visit Kempty Falls, Gun Hill, and scenic viewpoints to capture travel reels. The queen of hills never disappoints.',
    },
];


const Snowfall: React.FC = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
            <div
                key={i}
                className="snow-dot"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 10}s`, // 10s to 20s
                    animationDelay: `${Math.random() * 10}s`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                }}
            />
        ))}
    </div>
);

const AnimatedElement: React.FC<{ children: React.ReactNode; animation: string; delay?: string; className?: string }> = 
({ children, animation, delay = '0s', className = '' }) => {
    const ref = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`animate-on-scroll ${animation} ${className}`} style={{ animationDelay: delay }}>
            {children}
        </div>
    );
};


const UttarakhandTripSection: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % carouselData.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, []);

    const numImages = carouselData.length;

    return (
        <section ref={sectionRef} className="relative text-white py-24 overflow-hidden">
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('./images/uttarakhand_ropeway.jpg')" }}
            ></div>
            <div className="absolute inset-0 z-0 bg-black/60"></div>
            <Snowfall />
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side: Rotating Carousel */}
                    <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                        <div className="absolute w-80 h-80 lg:w-96 lg:h-96 border-2 border-dashed border-gray-500 rounded-full"></div>
                        
                        {/* Central Active Image */}
                        <div key={activeIndex} className="absolute z-10 animate-fadeInUp">
                             <img 
                                src={carouselData[activeIndex].src} 
                                alt={carouselData[activeIndex].title} 
                                className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-lg shadow-2xl border-4 border-white"
                            />
                        </div>

                        {/* Orbiting Images */}
                        <div className="absolute w-full h-full">
                           {carouselData.map((item, index) => {
                                const angle = (index / numImages) * 2 * Math.PI;
                                const radius = 180;
                                const x = radius * Math.cos(angle);
                                const y = radius * Math.sin(angle);
                                const rotation = (activeIndex / numImages) * 360;
                                
                                return (
                                    <div
                                        key={item.src}
                                        className="absolute top-1/2 left-1/2 w-20 h-20 lg:w-24 lg:h-24 -m-10 lg:-m-12 transition-transform duration-1000 ease-in-out"
                                        style={{
                                            transform: `rotate(${rotation}deg) translate(${x}px, ${y}px) rotate(-${rotation}deg)`
                                        }}
                                    >
                                        <img 
                                            src={item.src} 
                                            alt={item.title} 
                                            className={`w-full h-full object-cover rounded-lg shadow-lg border-2 border-white/50 transition-all duration-500 ${activeIndex === index ? 'opacity-0 scale-50' : 'opacity-70 scale-100'}`}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side: Static Content */}
                    <div className="text-center lg:text-left">
                        <AnimatedElement animation="animate-fadeInUp-scroll" delay="0.2s">
                            <h2 className="text-5xl md:text-7xl font-bold" style={{ fontFamily: "'Dancing Script', cursive", textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>Ultimate</h2>
                            <h3 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase -mt-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>Uttarakhand</h3>
                        </AnimatedElement>
                        
                        <AnimatedElement animation="animate-fadeInUp-scroll" delay="0.4s" className="mt-6 flex flex-col items-center lg:items-start space-y-3">
                           <div className="inline-block bg-gray-900/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                               <p className="text-lg font-bold tracking-wider">STARTING FROM <span className="text-xl">₹14,500/-</span></p>
                           </div>
                           <p className="font-semibold text-white/90 text-sm">For 9 Nights, 10 Days | 26TH DECEMBER - 4TH JANUARY</p>
                        </AnimatedElement>

                        <AnimatedElement animation="animate-fadeInUp-scroll" delay="0.6s" className="mt-4 max-w-md mx-auto lg:mx-0">
                             <p className="text-xs font-medium text-white/80 tracking-wider">
                                {locations.join(' - ')}
                            </p>
                        </AnimatedElement>

                         <div className="mt-6 grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                            {highlights.map((highlight, index) => (
                                <AnimatedElement animation="animate-fadeInUp-scroll" delay={`${0.8 + index * 0.15}s`} key={highlight.text}>
                                    <div className="flex items-center bg-gray-900/40 backdrop-blur-sm p-3 rounded-lg border border-white/20 h-full">
                                        <highlight.icon className="w-6 h-6 text-white flex-shrink-0"/>
                                        <span className="ml-3 font-semibold text-sm">{highlight.text}</span>
                                    </div>
                                </AnimatedElement>
                            ))}
                        </div>
                        
                        <AnimatedElement animation="animate-fadeInUp-scroll" delay="1.4s" className="mt-8">
                            <button 
                                onClick={() => window.open("https://wa.me/918779988156", "_blank")}
                                className="bg-blue-600 text-white font-bold text-base px-10 py-4 rounded-lg shadow-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto lg:mx-0">
                                Book Your Spot
                            </button>
                        </AnimatedElement>
                    </div>
                </div>
                
                {/* Dynamic Content Box Below */}
                <div className="mt-16 flex justify-center">
                    <div key={activeIndex} className="w-full max-w-2xl bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-contentFade text-center shadow-lg">
                        <h4 className="text-2xl font-bold text-white">{carouselData[activeIndex].title}</h4>
                        <p className="mt-2 text-gray-300">{carouselData[activeIndex].description}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UttarakhandTripSection;