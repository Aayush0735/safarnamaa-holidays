import React from 'react';
import { CartIconSide, LinesIcon } from './icons';

const SideButtons: React.FC = () => {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center animate-fadeInUp" style={{ animationDelay: '3s' }}>
            <button className="bg-red-500 text-white w-20 py-2 text-xs font-bold tracking-wider transform -rotate-90 origin-center translate-x-[28px] rounded-t-md transition-transform hover:translate-x-[24px]">RELATED</button>
            <div className="flex flex-col bg-white shadow-lg rounded-l-md overflow-hidden mt-2">
                <button 
                    onClick={() => window.open("https://wa.me/918779988156", "_blank")}
                    className="p-3 group"
                >
                    <CartIconSide className="w-5 h-5 text-gray-600 transition-colors group-hover:text-red-500" />
                    <span className="absolute right-full mr-2 text-xs bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">BUY NOW</span>
                </button>
                <button className="p-3 group">
                    <LinesIcon className="w-5 h-5 text-gray-600 transition-colors group-hover:text-red-500" />
                    <span className="absolute right-full mr-2 text-xs bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">EXPLORE</span>
                </button>
            </div>
        </div>
    );
};

export default SideButtons;