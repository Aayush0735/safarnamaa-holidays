import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TravelPage, { destinations } from './pages/TravelPage';
import DestinationPage from './pages/DestinationPage';
import ContactPage from './pages/ContactPage';
import DiscoverSection from './components/DiscoverSection';
import ImageSliderSection from './components/ImageSliderSection';
import UttarakhandTripSection from './components/UttarakhandTripSection';
import SectionSeparator from './components/SectionSeparator';
import BlogPage from './pages/BlogPage';

const TopoBackground: React.FC = () => (
    <div 
        className="absolute inset-0 z-[-20] opacity-30" 
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7-7 3.134-7 7-7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7-7 3.134-7 7-7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63-17c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-52-14c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-23 55c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm22-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm38-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-42 3c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm53-6c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-32-40c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm1-23c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM23 81c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm51-38c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5z' fill='%23333333' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
    />
);

interface NavigationState {
    page: 'home' | 'travel' | 'destination' | 'contact' | 'blog';
    slug?: string;
}

interface HomePageProps {
    onNavigate: (nav: NavigationState) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => (
    <main>
        <div className="px-4 sm:px-6 lg:px-8">
            <Hero onNavigate={onNavigate} />
        </div>
        <ImageSliderSection />
        <SectionSeparator />
        <UttarakhandTripSection />
        <DiscoverSection />
    </main>
);

const App: React.FC = () => {
    const [navigation, setNavigation] = useState<NavigationState>({ page: 'home' });

    const handleNavigate = (nav: NavigationState) => {
        setNavigation(nav);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (navigation.page) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;
            case 'travel':
                return <TravelPage onNavigate={handleNavigate} />;
            case 'destination':
                const destination = destinations.find(d => d.slug === navigation.slug);
                return destination ? <DestinationPage destination={destination} /> : <TravelPage onNavigate={handleNavigate} />;
            case 'contact':
                return <ContactPage />;
            case 'blog':
                return <BlogPage />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <TopoBackground />
            <Header onNavigate={handleNavigate} />
            
            {renderPage()}

            <Footer />
        </div>
    );
};

export default App;