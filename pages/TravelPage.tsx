import React from 'react';
import DestinationCard from '../components/DestinationCard';
import CategoriesSection from '../components/CategoriesSection';
import ContentSection from '../components/ContentSection';
import TravelEssentialsSection from '../components/TravelEssentialsSection';
import { Destination } from '../types';
import { EyeIcon, CurrencyDollarIcon, LightBulbIcon, BookOpenIcon, LinkIcon } from '../components/icons';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface NavigationState {
    page: 'home' | 'travel' | 'destination' | 'contact';
    slug?: string;
}

interface TravelPageProps {
    onNavigate: (nav: NavigationState) => void;
}


export const destinations: Destination[] = [
    {
        slug: 'uttarakhand-adventure',
        name: 'Uttarakhand',
        tagline: 'The Land of Gods',
        categories: 'ADVENTURE, SPIRITUAL, NATURE',
        cardImage: 'https://picsum.photos/seed/uttarakhand-card/400/400',
        heroImage: './images/uttarakhand/u2.jpg',
        description: [
            'Embark on an epic 10-day journey through the majestic mountains, serene lakes, and spiritual havens of Uttarakhand. This adventure is not just a trip; it\'s an experience that will challenge your limits, soothe your soul, and leave you with memories to last a lifetime.',
            'From the wildlife of Jim Corbett to the tranquil boat rides in Nainital, and the adrenaline rush of Rishikesh, every day is a new discovery. We cap it all off with a magical New Year\'s Eve celebration that you won\'t forget.'
        ],
        gallery: [
            './images/uttarakhand/mussorie.jpg',
            './images/uttarakhand/train.jpg',
            './images/uttarakhand/uttarakhand_boat1.jpeg.jpg',
            './images/uttarakhand/nainital.jpg',
        ],
        itinerary: [
            { day: '1-2', title: 'Arrival in Delhi & Transfer to Jim Corbett', description: 'Begin your journey from Mumbai/Delhi and travel to the wilderness of Jim Corbett National Park. Check into the resort and relax.' },
            { day: '3', title: 'Jungle Safari & Neon Party', description: 'Experience a thrilling morning jungle safari. In the evening, get ready for an exciting Neon DJ Night at the resort.' },
            { day: '4-5', title: 'Nainital & Lakeside Bonfire', description: 'Travel to the city of lakes, Nainital. Enjoy boating, explore the town, and spend the evening with a lakeside bonfire and karaoke.' },
            { day: '6-7', title: 'Rishikesh Adventures & New Year\'s Eve', description: 'Head to the adventure capital, Rishikesh. Celebrate New Year\'s Eve with a rooftop DJ party overlooking the Ganga. The next day is for river rafting and cafe hopping.' },
            { day: '8-9', title: 'Mussoorie Magic & Departure', description: 'Visit the "Queen of Hills," Mussoorie. Explore Kempty Falls and Gun Hill before traveling back to Delhi for your departure.' },
            { day: '10', title: 'Buffer Day & Return Journey', description: 'A buffer day for any unforeseen delays. Depart from Delhi for your journey back home, filled with incredible memories.' }
        ],
        highlights: [
            { icon: EyeIcon, title: 'Sightseeing', description: 'Explore iconic landmarks and hidden gems across Uttarakhand.' },
            { icon: CurrencyDollarIcon, title: 'All Inclusive', description: 'Accommodation, travel, and most meals are covered in the package.' },
            { icon: LightBulbIcon, title: 'Expert Guides', description: 'Knowledgeable guides to enrich your travel experience.' },
            { icon: BookOpenIcon, title: 'Easy Booking', description: 'Hassle-free booking process with transparent pricing.' }
        ],
    },
    {
        slug: 'rajasthan-royalty',
        name: 'Rajasthan',
        tagline: 'The Land of Kings',
        categories: 'HERITAGE, CULTURE, DESERT',
        cardImage: 'https://picsum.photos/seed/rajasthan-card/400/400',
        heroImage: 'https://picsum.photos/seed/rajasthan-hero/1600/600',
        description: [
            'Experience the vibrant culture and royal history of Rajasthan. From majestic forts to colorful markets, this tour is a feast for the senses.'
        ],
        gallery: ['https://picsum.photos/seed/rajasthan-gallery1/800/600'],
        itinerary: [{ day: '1-2', title: 'Jaipur - The Pink City', description: 'Explore Amber Fort, City Palace, and Hawa Mahal.' }],
        highlights: [{ icon: LinkIcon, title: 'Cultural Shows', description: 'Enjoy traditional Rajasthani folk dance and music.' }]
    },
    {
        slug: 'kerala-calm',
        name: 'Kerala',
        tagline: 'God\'s Own Country',
        categories: 'NATURE, BEACHES, WELLNESS',
        cardImage: 'https://picsum.photos/seed/kerala-card/400/400',
        heroImage: 'https://picsum.photos/seed/kerala-hero/1600/600',
        description: [
            'Relax and rejuvenate in the serene backwaters of Kerala. Enjoy houseboat stays, Ayurvedic treatments, and pristine beaches.'
        ],
        gallery: ['https://picsum.photos/seed/kerala-gallery1/800/600'],
        itinerary: [{ day: '1-2', title: 'Backwaters of Alleppey', description: 'Cruise through the tranquil backwaters on a traditional houseboat.' }],
        highlights: [{ icon: LinkIcon, title: 'Ayurvedic Spa', description: 'Indulge in relaxing and healing Ayurvedic therapies.' }]
    }
];

const AnimatedDestinationWrapper: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
    const ref = useScrollAnimation<HTMLDivElement>();
    return (
        <div 
            ref={ref} 
            className="animate-on-scroll animate-fadeInUp-scroll" 
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            {children}
        </div>
    );
};


const TravelPage: React.FC<TravelPageProps> = ({ onNavigate }) => {
    
    const handleSelectDestination = (slug: string) => {
        onNavigate({ page: 'destination', slug });
    };

    return (
        <main>
            <header className="relative h-[60vh] min-h-[400px] max-h-[500px]">
                <img src="https://picsum.photos/seed/travel-hero/1600/600" alt="Travelers on a mountain" className="absolute inset-0 w-full h-full object-cover animate-dropIn"/>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-light tracking-wider uppercase animate-fadeInUp">Travel With Us</h1>
                    <p className="mt-4 max-w-2xl animate-fadeInUp" style={{animationDelay: '0.2s'}}>Discover curated journeys across the heart of India. Each trip is a unique story waiting to be told, filled with adventure, culture, and unforgettable moments.</p>
                </div>
            </header>
            <div className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <AnimatedDestinationWrapper key={dest.slug} index={index}>
                            <DestinationCard destination={dest} onSelect={handleSelectDestination} />
                        </AnimatedDestinationWrapper>
                    ))}
                </div>
            </div>
            <CategoriesSection />
            <ContentSection />
            <TravelEssentialsSection />
        </main>
    );
};

export default TravelPage;