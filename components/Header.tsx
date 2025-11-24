import React from 'react';
import { SafarnamaaLogoIcon, InstagramIcon, WhatsappIcon } from './icons';

interface NavigationState {
    page: 'home' | 'travel' | 'destination' | 'contact' | 'blog';
    slug?: string;
}

interface HeaderProps {
    onNavigate: (nav: NavigationState) => void;
}


const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-[#FDFBF8]/90 backdrop-blur-sm border-b border-gray-200/60">
            <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                {/* Left */}
                <button onClick={() => onNavigate({ page: 'home' })} className="flex items-center space-x-2">
                    <SafarnamaaLogoIcon className="h-10 w-auto" />
                    <span className="hidden sm:inline font-script align-bottom">
                        <span style={{color: '#1E40AF'}} className="text-3xl">Safarnamaa</span> <span style={{color: '#EF4444'}} className="text-3xl">Holidays</span>
                    </span>
                </button>
                
                {/* Center */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <button onClick={() => onNavigate({ page: 'home' })} className="transition-colors hover:text-red-500">HOME</button>
                    <button onClick={() => onNavigate({ page: 'travel' })} className="transition-colors hover:text-red-500">
                        TRAVEL
                    </button>
                    <button onClick={() => onNavigate({ page: 'blog' })} className="transition-colors hover:text-red-500">BLOG</button>
                    <button onClick={() => onNavigate({ page: 'contact' })} className="transition-colors hover:text-red-500">GET IN TOUCH</button>
                </nav>

                {/* Right */}
                <div className="flex items-center space-x-4">
                    <a 
                        href="https://www.instagram.com/safarnamaaholidays/#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-opacity hover:opacity-70 text-gray-700"
                    >
                        <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://wa.me/918779988156" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-opacity hover:opacity-70 text-gray-700"
                    >
                        <WhatsappIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;