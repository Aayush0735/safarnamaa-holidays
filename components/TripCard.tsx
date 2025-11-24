import React from 'react';
import { Trip } from '../types';
import { UserCircleIcon } from './icons';

interface TripCardProps {
    trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <img src={trip.imageUrl} alt={trip.title} className="w-full h-24 object-cover" />
            <div className="p-3">
                <h3 className="font-semibold text-sm text-[#5C4B40] truncate">{trip.title}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                    <UserCircleIcon className="w-4 h-4 mr-1" />
                    <span>{trip.peopleGoing} people going</span>
                </div>
            </div>
        </div>
    );
};

export default TripCard;