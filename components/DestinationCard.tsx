import React from 'react';
import { Destination } from '../types';

interface DestinationCardProps {
    destination: Destination;
    onSelect: (slug: string) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
    return (
        <div className="border border-gray-200/80 p-6 text-center flex flex-col items-center group">
            <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden shadow-inner">
                 <img 
                    src={destination.cardImage} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>
            <h3 className="font-script text-3xl">{destination.name}</h3>
            <p className="text-xs text-gray-500 tracking-widest uppercase mt-2">{destination.categories}</p>
            <button 
                onClick={() => onSelect(destination.slug)}
                className="mt-6 border border-gray-300 px-8 py-3 text-xs font-bold tracking-widest hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors">
                EXPLORE
            </button>
        </div>
    );
};

export default DestinationCard;